const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');
const path = require('path');
const api = require('./router');


module.exports = (apps) => {
  const app = new Koa();
  const router = new Router();
  const routers = api(apps);

  app.use(routers.routes());
  app.use(routers.allowedMethods());

  router.get('/(.*)', async (ctx) => {
    try {
      await send(ctx, '/index.html', { root: path.resolve(__dirname, '../dist') });
    } catch (e) { }
  });
  router.get('/(.*)', async (ctx) => {
    try {
      await send(ctx, ctx.path, { root: path.resolve(__dirname, '../dist') });
    } catch (e) { }
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
