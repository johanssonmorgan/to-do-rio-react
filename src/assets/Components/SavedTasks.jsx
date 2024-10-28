import React from 'react';
import TaskListItem from './TaskListItem';

const SavedTasks = ({ tasks, deleteTask }) => {

  return (
    <div className="saved-tasks">
        <ul className="tasks">
            {
                tasks.length > 0 && tasks.map(task => (
                    <TaskListItem key={task.id} task={task} deleteTask={deleteTask}/>
                ))
            }

            {
                tasks.length <= 0 && <p>Congratulations you dont have any tasks left to do!</p>
            }
        </ul>
    </div>
  )
}

export default SavedTasks