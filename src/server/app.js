const koa = require("koa");
const router = require("koa-router")();
const WebSocket = require("koa-websocket")
const app = WebSocket(new koa());

const ctxs = []

app.ws.use(async(ctx, next) => {
  ctxs.push(ctx)
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3005, () => {
  console.log("Your app has run at 3005...")
})