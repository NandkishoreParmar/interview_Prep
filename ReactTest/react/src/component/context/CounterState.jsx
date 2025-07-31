import React from "react";
import { useState } from "react";
import CounterContext from "./counterContext";

const CounterState = (props)=>{
const [count,setCount] = useState(0)

  return(
    <>
<CounterContext.Provider  value={{count,setCount}}>
  {props.children}
</CounterContext.Provider>
    
    </>
  )
}



export default CounterState;