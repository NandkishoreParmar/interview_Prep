// What is Redux?
// Redux is a state management library used with React (and other frameworks) to handle complex application state in a predictable and centralized way.

// Data flows in one direction

// Uses concepts like actions, reducers, and a store

// ✅ Best for large applications with deeply nested components and complex state logic.

import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../Redux/action";
import Parent from "./parentcomponent";
const ReduxHandleCount = ()=>{
 const count = useSelector((state)=>state.count);
 const dispatch = useDispatch();

  return (
    <>
    <Parent/>
    <p>This is handle by Redux </p>
      <h1> Counter</h1>
      <p>count : {count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <hr></hr>
      </>
  )
}

export default ReduxHandleCount;