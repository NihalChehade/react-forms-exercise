import React from "react";

const Todo = ({id, value, removeTodo }) => {
  return <li>{value}<button onClick={()=>{removeTodo(id)}}>X</button></li>;
};

export default Todo;
