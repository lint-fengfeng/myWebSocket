import React from 'react';
import Left from "@/component/left"
import Right from "@/component/right"
import Center from "@/component/center"
import "@/scss/base.css"

let Home = () => {

  // let RightRef = useRef()

  // let Socket = null;

  // let [a] = useState(0)

  // const handleAdd = () => {
  //   a++
  //   RightRef.current.changeNum(a)
  // }

  // const connect = () => {
  //   // todo
  //    Socket = new WebSocket("ws://localhost:3005/xuefeng/1")
  //   Socket.onopen = function() {
  //     Socket.send("发送数据")
  //   }
  //   Socket.onmessage = function(e) {
  //     var message = e.data;
  //     console.log("接收到数据" + message)
  //   }
  //   Socket.onerror = function(e) {
  //     console.log(e)
  //   }
  //   Socket.onclose = function() {
  //     // 关闭websocket
  //     console.log("关闭")
  //     Socket.close()
  //   }
  // }

  return (
    <div className="home">
      <Left />
      <Center />
      <Right />
    </div>
  )
}

export default Home