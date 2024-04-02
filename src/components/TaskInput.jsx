import React, { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskName}
        onChange={handleChange}
        className="border border-gray-400 px-3 py-2 rounded-lg w-64 mr-2"
      />
      <button type="submit" className="text-green-500">
        <RiAddCircleLine className="text-2xl" />
      </button>
    </form>
  );
}

export default TaskInput;
