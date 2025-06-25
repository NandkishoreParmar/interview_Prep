import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const HandleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...tasklist, task]);
      setTask("");
    }
  };

  const DeleteTask = (id)=>{
    console.log(id)
    const updatedList = tasklist.filter((_,index)=> id != index)
    setTaskList(updatedList)
  }

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <input
          value={task}
          onChange={HandleChangeTask}
          placeholder="Enter a Task.."
        />
        <button onClick={AddTask}>Add Task</button>
      </div>

      <div>
        {tasklist.map((el, id) => (
          <li key={id}>{el} <button onClick={()=> DeleteTask(id)}>Delete</button></li>
        ))}
      </div>
    </>
  );
};

export default TodoList;
