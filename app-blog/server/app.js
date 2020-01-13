(async () => {
  const Koa = require ('koa');
  const session = require ('koa-session');

  const KoaStaticCache = require ('koa-static-cache');
  const KoaBodyParser = require ('koa-bodyparser');
  const router = require ('./routers/main');

  const app = new Koa ();

  // 加密的密钥
  app.keys = ['PresByter'];

  const CONFIG = {
    key: 'koa:sess' /** (string) cookie key (default is koa:sess) */,
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true /** (boolean) automatically commit headers (default true) */,
    overwrite: true /** (boolean) can overwrite or not (default true) */,
    httpOnly: true /** (boolean) httpOnly or not (default true) */,
    signed: true /** (boolean) signed or not (default true) */,
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
    renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  };

  //session把所有加密的信息 全部放到服务端，传给客户端是对应的key，同样session也是基于cookies
  app.use (session (CONFIG, app)); 

  app.use (
    KoaStaticCache ('./public', {
      prefix: 'public',
      gzip: true,
    })
  );

  app.use (KoaBodyParser ());

  app.use (router.routes ());

  app.listen (80);
}) ();
