const Koa = require('koa');
const Router = require('koa-router');
const request = require('request');
const { PassThrough } = require('stream');
const api = require('../server/router');

module.exports = (apps) => {
  const app = new Koa();
  const router = new Router();
  const routers = api(apps);

  app.use(routers.routes());
  app.use(routers.allowedMethods());

  router.get('/', (ctx) => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = request.get('http://localhost:9000/index.html').pipe(PassThrough());
  });

  router.get('/(.*)', async (ctx) => {
    const path = ctx.path.split('.').reverse();
    if (path.length > 0) {
      const type = path[0];
      switch (type) {
        case 'css': {
          ctx.set('Content-Type', 'text/css');
          break;
        }
        case 'js': {
          ctx.set('Content-Type', 'text/javascript');
          break;
        }
        case 'jpg': {
          ctx.set('Content-Type', 'image/jpeg');
          break;
        }
        case 'png': {
          ctx.set('Content-Type', 'image/png');
          break;
        }
        default: {
          ctx.set('Content-Type', 'text/plain');
        }
      }
    }
    ctx.body = request.get(`http://localhost:9000${ctx.path}`).pipe(PassThrough());
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
