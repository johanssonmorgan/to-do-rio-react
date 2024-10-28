import React from 'react';
import TaskListItem from './TaskListItem';

const SavedTasks = ({ tasks, deleteTask, toggleCompleted }) => {

  return (
    <div className="saved-tasks">
        <ul className="tasks">
            {
                tasks.length > 0 && tasks.map(task => (
                    <TaskListItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>
                ))
            }

            {
                tasks.length <= 0 && <p className='noTaskMessage'>Enjoy the calm... while it lasts.</p>
            }
        </ul>
    </div>
  )
}

export default SavedTasks