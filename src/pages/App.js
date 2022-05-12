import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(function() {
    console.log('Atualizou Count. Novo valor: ', count)
  }, [count])

  useEffect(function() {
    console.log('Entrou na página.')

    return function() {
      console.log('Saindo da página...')
    }
  }, [])

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function openToDo() {
    navigate('/to-do')
  }

  return (
    <div>
      <h1>My first page :D</h1>
      
      <Button onClick={ decrement }>Decrement</Button>
      <span> { count } </span>
      <Button onClick={ increment }>Increment</Button>

      <hr />
      <Button onClick={ openToDo }>Open ToDo</Button>
    </div>
  )
}

export default App