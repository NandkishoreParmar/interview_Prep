import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../Redux/action";
import Parent from "./parentcomponent";
const ReactHandleCount = ()=>{
 const count = useSelector((state)=>state.count);
 const dispatch = useDispatch();

  return (
    <>
    <Parent/>
      <h1> Counter</h1>
      <p>count : {count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <hr></hr>
      </>
  )
}

export default ReactHandleCount;