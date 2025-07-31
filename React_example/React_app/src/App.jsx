import React from "react";
import TodoList from "./components/TodoList";
import Product from "./components/Product";
// import SimpleTimer from "./components/Timer";
import Test from "./components/Test";
import ReduxHandleCount from "./components/ReduxHandle";
import FetchAxious from "./components/FetchAxious";
import ContextComp from "./contextAPI/ContextComp";
import HocExample from "./components/HigherOrderCompo";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
const App = ()=>{
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/contextComp" element={<ContextComp/>} />
       <Route path="/fetchAxious" element={<FetchAxious />} />
       <Route path="/reduxhandle" element={<ReduxHandleCount />} />
       <Route path="/test" element={<Test/>} />
       <Route path="/todolist" element={<TodoList/>} />
       <Route path="/product" element={ <Product/>} />
       <Route path="/hocexample" element={ <HocExample/>} />
{/* <SimpleTimer/> */}
   
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;