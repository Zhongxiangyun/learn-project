const Koa = require ('koa');
const koaStaticCache = require ('koa-static-cache'); //静态文件
const Router = require ('koa-router'); //路由
const Swig = require ('koa-swig'); //模板引擎
const co = require ('co'); //模板引擎
const bodyParser = require ('koa-bodyparser'); // 处理 请求正文中的数据

const app = new Koa ();
const router = new Router ();

/**
 * 处理静态文件
 */
app.use (
  koaStaticCache ('./static', {
    prefix: '/static',
    gzip: true,
  })
);

/**
 * 处理请求正文中的数据
 */
app.use (bodyParser ({}));

/**
 * 存储所有的任务数据
 *  当前这个数据是存储在服务器运行中的内存中
 */
let datas = {
  maxId: 3,
  appName: 'TodoList',
  skin: 'index.css',
  tasks: [
    {id: 1, title: '测试任务一', done: true},
    {id: 2, title: '学习koa', done: false},
    {id: 3, title: '学习sequelize', done: false},
  ],
};
/**
 * 设置模板引擎
 */
app.context.render = co.wrap (
  Swig ({
    root: __dirname + '/views',
    autoescape: true, //是否html编码，为了安全起见，一般不开启该功能，设置为true
    cache: false,
    // cache: 'memory', //memory : 把解析后的结果保存在内存中，比如每次访问都去解析模板，一般用于线上生成环境
    ext: 'html',
  })
);

router.get ('/', async ctx => {
  // ctx.body = '/ '
  ctx.body = await ctx.render ('index.html', {datas});
});

/**
 * 添加，添加新任务
 */
router.get ('/add', async ctx => {
  //   ctx.body = '/add';
  ctx.body = await ctx.render ('add.html', {datas});
});
/**
 * 添加，处理通过添加页面提交的数据
 * post方式
 */
router.post ('/posttask', async ctx => {
  //   let title = ctx.query.title;
  let title = ctx.request.body.title;
  //   ctx.body = title;
  if (!title) {
    ctx.body = await ctx.render ('message', {
      msg: '请输入任务标题',
      href: 'javascript:history.back();',
    });
    return;
  }
  datas.tasks.push ({
    id: ++datas.maxId,
    title: ctx.request.body.title,
    done: false,
  });
  ctx.body = await ctx.render ('message', {
    msg: '添加成功',
    href: '/',
  });
});
/**
 * 改变 ，修改任务
 */
router.get ('/change/:id', async ctx => {
  //   ctx.body = '/change/ ' + ctx.params.id;
  let id = ctx.params.id;
  //   console.log(id)
  datas.tasks.forEach (tasks => {
    if (tasks.id == id) {
      tasks.done = !tasks.done;
    }
  });

  ctx.response.redirect ('/');
});

/**
 * 删除任务
 */
router.get ('/remove/:id', async ctx => {
  //   ctx.body = '/remove/ ' + ctx.params.id;

  let id = ctx.params.id;

  datas.tasks = datas.tasks.filter (task => task.id != id);

  ctx.body = await ctx.render ('message', {
    msg: '删除成功',
    href: '/',
  });
});

app.use (router.routes ());

app.listen (80);
