import React, { useState, useImperativeHandle } from 'react';
import "@/scss/right.css"

let Right = ({cRef}) => {
  const [num, setNum] = useState(0);

  useImperativeHandle(cRef, () => ({
		// changeVal 就是暴露给父组件的方法
	    changeNum: (newVal) => {
	      setNum(newVal);
	    }
  	}))

  return (
    <div className="right">
      {num}
    </div>
  )
}


export default Right