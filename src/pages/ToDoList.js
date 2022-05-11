import React, { useState } from 'react'

import Button from '../components/Button'

const ToDoList = () => {
  const [title, setTitle] = useState('')
  const [list, setList] = useState([])

  const handleChangeTitle = (event) => {
    const value = event.target.value
    setTitle(value)
  }

  const addToDo = () => {
    setList([ ...list, title ])
    setTitle('')
  }

  return (
    <div>
      <h1>ToDo List</h1>

      <div>
        <input value={title} onChange={ handleChangeTitle } placeholder="Digite seu afazer..." />
        <Button onClick={ addToDo }>Add</Button>
      </div>

      <hr />

      <ul>
        { list.map((item, index) => (
          <li key={ index }>
            { item }
          </li>
        )) }
      </ul>
    </div>
  )
}

export default ToDoList