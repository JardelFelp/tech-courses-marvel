import React, { useState, useEffect } from 'react'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

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

  return (
    <div>
      <h1>My first page :D</h1>
      
      <Button onClick={ decrement }>Decrement</Button>
      <span> { count } </span>
      <Button onClick={ increment }>Increment</Button>
    </div>
  )
}

export default App