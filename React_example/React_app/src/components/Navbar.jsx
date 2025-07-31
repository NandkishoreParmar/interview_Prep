import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/contextComp">ContextCompo</Link>
      </div>
      <div>
        <Link to="/fetchAxious">Fetch Axious</Link>
      </div>
      <div>
        <Link to="/reduxhandle">ReduxHandle</Link>
      </div>
      <div>
        <Link to="/todolist">TodoList</Link>
      </div>
      <div>
        <Link to="/test">Test</Link>
      </div>
    </>
  );
};

export default Navbar;
