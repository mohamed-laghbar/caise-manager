import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="w-full max-w-md">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
