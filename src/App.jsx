import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Header from './assets/Components/Header'
import ToDoForm from './assets/Components/ToDoForm'
import SavedTasks from './assets/Components/SavedTasks'

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

const addTask = (taskData) => {
  setTasks(state => {
    return [...state, {id: uuidv4(), todo: taskData, completed: false}]
  })
}

const toggleCompleted = (id) => {
  setTasks(state => 
    state.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed } 
        : task
    )
  );
};

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
            <SavedTasks tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
          </div>
      </div>
    </>
  )
}

export default App
