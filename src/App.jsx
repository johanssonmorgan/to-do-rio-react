import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Header from './assets/Components/Header'
import ToDoForm from './assets/Components/ToDoForm'
import SavedTasks from './assets/Components/SavedTasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: uuidv4(),
        todo: 'Fixa studier',
        completed: false
    },
    {
        id: uuidv4(),
        todo: 'Bli proffs på React',
        completed: false
    }
])

const addTask = (taskData) => {
  setTasks(state => {
    return [...state, {id: uuidv4, todo: taskData, completed: false}]
  })
}

const deleteTask = (id) => {
  setTasks(state => {
    return state.filter(task => task.id !== id)
  })
}

  return (
    <>
        <div className="container">
          <Header />
          <div className="todo-list">
            <ToDoForm addTask={addTask}/>
            <SavedTasks tasks={tasks} deleteTask={deleteTask} />
          </div>
      </div>
    </>
  )
}

export default App
