export default {
    /**
       * @description token在Cookie中存储的天数，默认1天
       */
    cookieExpires: 7,
    /**
       * @description api请求基础路径
       */
    baseUrl: {
      // dev: 'api', // 测试反向代理
      dev: 'http://47.99.131.67:9092', // 测试服2222
     //  dev: 'http://192.168.1.105:10002', // 本地服-zw
     //  dev: 'http://192.168.1.111:10001', // 本地服-zw
      // pro: 'https://produce.com'
      // pro: 'http://47.110.40.243:9090'
      // pro: 'http://47.110.40.243:9091'// 测试服
      pro: 'http://47.99.131.67:9092', // 测试服2222
      // pro: 'http://47.110.40.243:9093'// 测试服33
      // pro: 'api' // 测试反向代理
      // pro: 'http://47.99.181.42:9091'// 正式服
      //  pro: 'http://47.99.181.42:9092' // 正式服-新
    },
    /**
       * @description 默认打开的首页的路由name值，默认为home
       */
    homeName: 'home',
    /**
       * @description 需要加载的插件
       */
    plugin: {
      // 'error-store': {
      //   showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      //   developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
      // }
    }
  }
  // 阿里云账号密码：
  // myself：root Xh110803 URL：http://47.97.204.83:22
  // 线上的：root liXING001 URL：http://47.99.181.42
  // 测试的：root Night108 URL：http://47.110.40.243
  // -----测试代码地址：/usr/local/wencong/server
  // -----nginx地址：/etc/nginx/nginx.conf
  // -----正式地址：/usr/local/lixing/lixingjiaoyu/web/code
  