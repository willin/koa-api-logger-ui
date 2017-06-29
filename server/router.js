const Router = require('koa-router');
const monitor = require('koa-api-logger/monitor');

module.exports = (apps) => {
  const router = new Router();
  const app = {};
  Object.keys(apps).forEach((key) => {
    app[key] = monitor(apps[key]);
  });

  router.get('/api/apps', (ctx) => {
    ctx.body = Object.keys(apps);
  });

  router.get('/api/:app', async (ctx) => {
    const key = ctx.params.app;
    ctx.body = await app[key]();
  });

  router.get('/api/:app/:date', async (ctx) => {
    const key = ctx.params.app;
    const date = ctx.params.date;
    ctx.body = await app[key](date);
  });

  return router;
};
