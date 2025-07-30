import React, { useRef } from "react";
// import './test.css'
const Test = ()=>{

  const count = useRef("");
 const paragraphStyle = {
  color:"red",
  border:"1px solid white"
 }

 const handleChange = ()=>{
  alert(count.current.value)
 }


  return (<>
  <h1 style={paragraphStyle}>This is test component</h1>
  {/* <p>{count}</p> */}
  <input type="text" ref={count} placeholder="Enter " onChange={handleChange}  />
  </>)
}

export default Test;
