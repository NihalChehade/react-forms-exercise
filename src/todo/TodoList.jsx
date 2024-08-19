import React, {useState} from 'react'
import {v4 as UUID} from 'uuid';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos([...todos, {key: UUID(), value :todo}]);
  }

  const removeTodo = (key)=>{
    setTodos(todos.filter((obj)=>obj.key!=key))
  }
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ol>
      {todos.map(todo=><Todo id={todo.key} key={todo.key} value={todo.value} removeTodo={removeTodo}/>)}
      </ol>
    </div>
  )
}

export default TodoList