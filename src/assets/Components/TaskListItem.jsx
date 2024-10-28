import React from 'react'
import closeImage from '../x-solid.svg';

const TaskListItem = ({ task, deleteTask }) => {
  return (
    <li>
        <p>{ task.todo}</p>
        <button onClick={() => deleteTask(task.id)} className='btn-remove'><img src={closeImage} alt="" /></button>
    </li>
  )
}

export default TaskListItem