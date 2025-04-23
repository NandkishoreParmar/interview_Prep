import { Flex } from "antd";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todo, setTodolist] = useState([]);

  const AddList = () => {
    if (task !== "" && todo !== "") {
      setTodolist([...todo, task]);
      setTask("");
    }
  };
  const Delete = (id) => {
    console.log(id);
    const updatedtodo = todo.filter((_, index) => index !== id);
    setTodolist(updatedtodo);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ padding: "10px", marginRight: "5px" }}
          placeholder="Enter a task "
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={AddList}> Add Task </button>
      </div>
      <h1>Todo list</h1>
      <div>
        <ul>
          {todo.map((todo, id) => {
            return (
              <li style={{display:"flex",justifyContent:"center"}}> 
                {todo}
                <span onClick={() => Delete(id)}>
                  <MdDeleteForever />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
