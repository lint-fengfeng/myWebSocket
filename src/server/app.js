const koa = require("koa");
const router = require("koa-router")();
const uuid = require("node-uuid");
const WebSocket = require("koa-websocket")
const app = WebSocket(new koa());

let userAuthority = []

app.ws.use(async (ctx, next) => {
  await next()
})

router.all("/xuefeng/:id", (ctx) => {
  ctx.websocket.on('message', function(msg) {
    // do something with the message from client
    let message = JSON.parse(msg)
    if (message.type === "enter" && userAuthority.indexOf(author.id)) {
      var author = {
        name: message.name,
        id: uuid.v4(),
        type: message.type
      }
      userAuthority.push(author.id)
      ctx.websocket.send(JSON.stringify(author))
    } else if (message.type === "close") {
      ctx.websocket.close()
      userAuthority = userAuthority.filter(item => item !== msg.id)
      ctx.websocket.send(msg)
    }
    
        // ctx.websocket.send(message)
  })
  // ctx.websocket.on("close", function(message) {
  //   console.log(message)
  //   if (message === 1005) {
  //     console.log("left退出了")
  //   }
  // })
})

app.ws
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3005, () => {
  console.log("Your app has run at 3005...")
})