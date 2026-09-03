import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TaskList from '../components/TaskList';
import { taskReducer } from '../reducers/taskReducer';

function TasksPage({ studentName }) {
  const [tasks, dispatch] = React.useReducer(taskReducer, JSON.parse(localStorage.getItem('tasks')) || []);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch({ 
      type: 'ADD_TASK', 
      payload: { id: Date.now(), title, description: desc, completed: false, deadline } 
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Task Management</h2>
      <form onSubmit={handleAddTask}>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" onChange={e => setDesc(e.target.value)} />
        <input type="date" onChange={e => setDeadline(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <TaskList studentName={studentName} tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default TasksPage;
