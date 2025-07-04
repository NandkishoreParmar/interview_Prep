import React from "react";
import TodoList from "./components/TodoList";
import Product from "./components/Product";
// import SimpleTimer from "./components/Timer";
import Test from "./components/Test";
import ReactHandleCount from "./components/ReduxHandle";
import FetchAxious from "./components/FetchAxious";
const App = ()=>{
  return (
    <>
    <FetchAxious />
<ReactHandleCount />
<Test/>
    <TodoList/>
{/* <SimpleTimer/> */}
    <Product/>
    </>
  )
}

export default App;