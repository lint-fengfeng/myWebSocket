import React, { useState, useRef } from 'react';
import Left from "@/component/left"
import Right from "@/component/right"
import "@/scss/base.css"

let Home = () => {

  let RightRef = useRef()

  let [a] = useState(0)

  const handleAdd = () => {
    a++
    RightRef.current.changeNum(a)
  }

  const handleSocket = () => {
    // todo
  }

  return (
    <div className="home">
      <Left handleAdd={() => handleAdd()} handleSocket={handleSocket}/>
      <Right cRef={RightRef} />
    </div>
  )
}

export default Home