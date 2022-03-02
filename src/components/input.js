import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [input, setInput] = useState('')
    const addTodo =() => {

    }
  return (
    <div className='input'>
        <input type="text"/>
        <button onClick={addTodo}>ADD</button>
    </div>
  )
}

export default Input