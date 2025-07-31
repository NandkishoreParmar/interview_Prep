

import React, { use, useEffect, useState } from "react";


const Test= ()=>{
const [item,setItem] = useState("");
const [TodoList,setTodolist] = useState([]);

const HandleChange = (e)=>{
  setItem(e.target.value);
}
const AddTask = ()=>{
  if (item !=""){
 setTodolist([...TodoList,item])
  setItem("")
  }
 
}
const handleDelete = (id)=>{
  let updated = TodoList.filter((el,index)=> id != index)
  setTodolist(updated)
}
  return (<>
     <div>
      <input value={item} onChange={HandleChange} placeholder="Enter a Task.." />
     </div>
     <button onClick={AddTask}>Add Item </button>

     <div>

      <ul>
 {TodoList.map((el,id)=>(
        <li>{el} <button onClick={()=>handleDelete(id) }>Delete</button></li>
      ))}
      </ul>
     
     </div>
  </>)
}

export default Test;