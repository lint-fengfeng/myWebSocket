import React from 'react';
import "@/scss/left.css"

const Left = (props) => {
  const handleAdd = (evt) => {
    props.handleAdd && props.handleAdd(evt)
  }

  const handleSocket = () => {
    props.handleSocket && props.handleSocket()
  }

  return (
    <div className="left">
      <button onClick={handleSocket}>点我连接socket</button>
      <button style={{marginLeft: "10px"}} onClick={(evt) => handleAdd(evt)}>点我发起socket</button>
    </div>
  )
}

export default Left