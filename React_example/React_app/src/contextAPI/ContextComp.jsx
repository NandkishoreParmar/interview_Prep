// What is Context API?
// Context API is a built-in React feature used to share data globally (like user info, theme, or language) between components without passing props manually at every level (prop drilling).

// ✅ Best for small to medium apps with less complex state.
import React from "react";
import { useContext } from "react";
import noteContext from "./noteContext";
const ContextComp = ()=> {
  const {name,setName}= useContext(noteContext)
  return (
    <>
    <p> This is a Context Components</p>
    <p>Name: "{name}" is gettting with the help of context Api </p>
    <button onClick={()=> setName("John")}>Change Name to John</button>
    <hr></hr>
    </>
  )
}

export default ContextComp;