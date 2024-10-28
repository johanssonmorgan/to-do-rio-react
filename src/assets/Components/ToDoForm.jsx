import React, { useState } from 'react'
import inputImage from '../input-icon.svg'

const ToDoForm = ({ addTask }) => {

  const [taskData, setTaskData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(taskData.trim() === '') return

    addTask(taskData);
    setTaskData('')

  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <img className="form-icon" src={inputImage} alt="" />
        <input value={taskData} onChange={(e) => setTaskData(e.target.value)} className="todo-input" type="text" maxLength="97" placeholder="Don't forget... again" />
        <button className="todo-btn">D<i className="fa-solid fa-gear"></i> THIS</button>
    </form>
  )
}

export default ToDoForm