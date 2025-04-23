import React, { useState } from "react";

const ControlledComponent = () => {
  const [input , setInput] = useState("");
  const handleinput = (event)=>{
setInput(event.target.value)
  }
  return (
    <>
    <div>
    <input type="text" value={input} onChange={handleinput} />
    <div>Input change value: {input}</div>
    </div>
    </>
  )
}

export default ControlledComponent;