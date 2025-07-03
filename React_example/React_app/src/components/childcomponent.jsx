import React from "react";

const Child = ({count})=>{

  return(
    <>
    <h1>This is child</h1>
    <p> This value is getting From Parent {count}</p>
    <hr></hr>
    </>
  )
}

export default Child;