import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={task.done ? 'done' : ''}>
      <input type="checkbox" checked={task.done} onChange={toggleTask} />
      <span>{task.name}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
