import React, { Component } from 'react'
import "@/scss/center.css"

class Center extends Component {
  constructor(props) {
    super(props)
    this.setBind()
   
  }

  state = { 
    onlineCount: 0,
    iptVal: '',
    isShow: false,
    user: ''
  }

  setBind() {
    this.sendMessage = this.sendMessage.bind(this);
    this.enter = this.enter.bind(this);
    this.out = this.out.bind(this);
    this.onChange = this.onChange.bind(this);
    this.listener = this.listener.bind(this)
  }
  
  onChange(e) {
    this.setState({
      iptVal: e.target.value
    })
  }

  sendMessage() {
    const { iptVal } = this.state;
    console.log(iptVal)
  }

  enter() {
    this.socket = new WebSocket("ws://localhost:3005/xuefeng/1");
    this.socket.onopen = () => {
      const user = JSON.stringify({name: 'center', type: "enter"})
      this.socket.send(user)
    }
    this.listener(this.socket)
    if (!this.state.isShow) {
      this.setState({isShow: true})
    }
  }

  listener(socket) {
    socket.onmessage = function(msg) {
      msg = JSON.parse(msg.data)
      if (msg.type === "enter") {
        if (!this.author) {
          this.author = msg
        } else {
          // TODO: 客户端显示msg.name上线了
        }
      } else if (msg.type === "close") {
        // TODO: 客户端显示msg.name 离线了
      }
    }
  }

  out() {
    if (this.socket.readyState === 3) return
    this.socket.close()
    if (this.state.isShow) {
      this.setState({isShow: false})
    }
  }
  render() {
    const {onlineCount, iptVal, isShow, user} = this.state
    return (
      <div className="center">
        <div>WebSocket Chat Demo</div>
        {
          isShow ?
            <div>
              <p>在线人数: {<b className="onlineCount">{onlineCount}</b>} 人</p>
              <div>
                <ul className="chat-content">
                  <li className="onlineUser">{user + "上线了"}</li>
                  <li className="quitUser">{user + "上线了"}</li>
                </ul>
              </div>
              <div>
                <input type="text" value={iptVal}
                  onChange={this.onChange}
                />
              </div>
            </div> : null
        } 
        <div>
          <button onClick={this.sendMessage}>发送消息</button>
          <button onClick={this.enter}>进入</button>
          <button onClick={this.out}>退出</button>
        </div>
      </div>
    )
  }
}

export default Center;