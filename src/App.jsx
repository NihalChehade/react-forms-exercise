import React, { useState } from 'react'
import BoxList from './color-box-maker/BoxList'
import TodoList from './todo/TodoList'
import './App.css'

function App() {
  return (
    <>
      <div>
       <BoxList />
      </div>
      ---------------------------------------------------------------------------------------------------------------------<br/>
      ---------------------------------------------------------------------------------------------------------------------<br/>
      <div>
        <TodoList />
      </div>
    </>
  )
}

export default App
