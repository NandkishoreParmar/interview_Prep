import React from "react";
import TodoList from "./components/TodoList";
import Product from "./components/Product";
// import SimpleTimer from "./components/Timer";
import Test from "./components/Test";
import ReduxHandleCount from "./components/ReduxHandle";
import FetchAxious from "./components/FetchAxious";
import ContextComp from "./contextAPI/ContextComp";
import HocExample from "./components/HigherOrderCompo";

const App = ()=>{
  return (
    <>
    <ContextComp/>
    <FetchAxious />
<ReduxHandleCount />
<Test/>
    <TodoList/>
{/* <SimpleTimer/> */}
    <Product/>
    <HocExample/>
    </>
  )
}

export default App;