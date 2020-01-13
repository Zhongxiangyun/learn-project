const KoaRouter = require ('koa-router');
const md5 = require ('md5');
const Sequelize = require ('sequelize');

const Models = require ('../models');

const router = new KoaRouter ();

router.get ('/', async ctx => {
  // 操作数据库
  // DOM => Document Object Model 文档对象模型
  // 文档：如html，html的内容本身是一组字符串，通过字符串的操作去修改html的内容，会特别的麻烦
  // 为了能够更方便的操作html这样的字符串，js先把这种结构字符串转成对象，然后通过
  // 操作对象来映射到对应的html上面
  // ORM => 和DOM的概念和相似，像操作对象的一样的操作数据库

  // let data = await Models.Users.findById(1, {
  //     include: {
  //         model: Models.Comments
  //     }
  // });

  // 获取 queryString穿过来的值
  let page = ctx.query.page || 1;
  let prepage = ctx.query.prepage || 2;
  let offset = (page - 1) * prepage;
  let rs = await Models.Contents.findAndCountAll ({
    limit: 3,
    offset,
    include: {
      model: Models.Users,
    },
  });

  ctx.body = {
    code: 0,
    prepage,
    count: rs.count,
    data: rs.rows.map (d => {
      return {
        id: d.id,
        title: d.title,
        content: d.content,
        user_id: d.user_id,
        username: d.User.username,
        created_at: d.createdAt,
        like_count: d.like_count,
        comment_count: d.comment_count,
      };
    }),
  };
});
//注册
router.post ('/register', async ctx => {
  //   console.log (ctx.request.body);
  const {username, password, repassword} = ctx.request.body;
  if (username === '' || password === '' || repassword === '') {
    return (ctx.body = {
      code: 1,
      data: '用户名和密码不能为空',
    });
  }
  if (password !== repassword) {
    return (ctx.body = {
      code: 1,
      data: '两次的密码不一致',
    });
  }
  let user = await Models.Users.findOne ({
    where: {
      username,
    },
  });
  if (user !== null) {
    return (ctx.body = {
      code: 1,
      data: '当前用户已经被注册了',
    });
  }

  //   console.log (user);
  let newuser = await Models.Users
    .build ({
      username,
      password: md5 (password),
    })
    .save ();
  ctx.body = {
    code: 0,
    data: {
      id: newuser.get ('id'),
      username: newuser.get ('username'),
    },
  };
});
// 登录
router.post ('/login', async ctx => {
  const {username, password} = ctx.request.body;
  let user = await Models.Users.findOne ({
    where: {
      username,
    },
  });
  if (user === null) {
    return (ctx.body = {
      code: 1,
      data: '用户不存在',
    });
  }
  if (user.get ('password') !== md5 (password)) {
    return (ctx.body = {
      code: 1,
      data: '密码错误',
    });
  }
  /*
  ctx.cookies.set ('uid', user.get ('id'), {
    httpOnly: true,
      signed:true
  });
  ctx.cookies.set ('username', user.get ('username'), {
    httpOnly: false,
      signed:true
  });
*/
  ctx.session.uid = user.get ('id');

  //   // 服务端发送一个约定好的cookie，来表示当前是登录
  // ctx.cookies.set('uid', user.get('id'), {
  //     // httpOnly，表示当前的cookie是否允许客户端进行操作（js），如果为true，那么就表示这个cookie是能用户http协议的数据传输
  //     httpOnly: true,
  //     signed: true
  // });
  ctx.body = {
    code: 0,
    data: {
      id: user.get ('id'),
      username: user.get ('username'),
    },
  };
});
// 点赞
router.post ('/like', async ctx => {
  // 请求带凭证 cookie
  //   let uid = ctx.cookies.get ('uid');
  let uid = ctx.session.uid;
  let {content_id: contentId} = ctx.request.body;
  console.log (uid, contentId, ctx.session.uid);
  if (!uid) {
    return (ctx.body = {
      code: 1,
      data: '你还没有登录',
    });
  }
  //   获取被点赞的内容
  let content = await Models.Contents.findByPk (contentId);
  if (!content) {
    return (ctx.body = {
      code: 1,
      data: '没有对应的内容',
    });
  }
  //   查询当前用户是否对该内容已经点过赞了
  //   SELETC * FROM likes WHERE content_id=contentId AND user_id=uid
  let like = await Models.Likes.findOne ({
    where: {
      [Sequelize.Op.and]: [{content_id: contentId}, {user_id: uid}],
    },
  });
  if (like) {
    return (ctx.body = {
      code: 3,
      data: '已经点过赞了',
    });
  }
  //   对内容的like数据进行增加
  content.set ('like_count', content.get ('like_count') + 1);
  await content.save ();
  //   console.log (content);
  await Models.Likes
    .build ({
      content_id: contentId,
      user_id: uid,
    })
    .save ();

  ctx.body = {
    code: 0,
    data: content,
  };
});
module.exports = router;
