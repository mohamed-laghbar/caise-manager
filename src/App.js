import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-semibold mb-4">Todo List App</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
