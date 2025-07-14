import React from "react";
import { useContext } from "react";
import noteContext from "./noteContext";
const ContextComp = ()=> {
  const a = useContext(noteContext)
  return (
    <>
    <p> This is a Context Components</p>
    <p>Name: "{a.name}" is gettting with the help of context Api </p>
    <hr></hr>
    </>
  )
}

export default ContextComp;