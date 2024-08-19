import React, {useState} from 'react'

const NewTodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e)=>{
   
    setTodo(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodo(todo);
    setTodo('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo:</label>
      <input 
      type="text" 
      name="todo" 
      id="todo" 
      value={todo} 
      onChange={handleChange}/>
      <button type="submit">Add Todo!</button>
    </form>
  )
}

export default NewTodoForm