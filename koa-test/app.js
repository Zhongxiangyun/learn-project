const Koa=require('koa')

// 创建一个http服务器，监听请求，http.createServer()
const app= new Koa()

// 注册中间件函数  webpack -> 读取文件,   loader，plugin   ,打包并生成文件

// next : 中间件函数 -> 迭代器

app.use((ctx,next)=>{
    // ctx：koa处理过的对象
    ctx.body='<h1>koa'
    let n=Math.random()
    // 不推荐
    // ctx.n = n;
    // ctx.state.n = n;

    // ctx.throw(404, '页面没了', {a: 1});

    next() //通过 next 才能执行 下一个 app.use

    // 判断当前用户是否有权限，如果有权限，再调用next()
})

app.use((ctx,next)=>{
    console.log(ctx)
    // ctx：koa处理过的对象
    ctx.body+=' 这是首页</h1>'
    ctx.response.body={a:'444',c:999}
    // ctx.attachment('a.txt')

    // ctx.body => ctx.response.body  两个一样的
})

app.on('error', (err, ctx) => {
    console.log('错了', err);
});

// 监听当前机器的地址，端口
app.listen(80)