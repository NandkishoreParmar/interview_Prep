import React, { useState } from "react";
import Child from "./childcomponent";
const Parent = ()=>{
const [count ,setcount] = useState(10);

  return (
    <>
    <>This is Parent</>
     <button onClick={()=> setcount(count+1)} >Increment</button>
     <button onClick={()=> setcount(count-1)} >Decrement</button>
     <Child count={count} />
    </>
  )
}

export default Parent;

