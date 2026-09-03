import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardComponent from '../components/Dashboard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { taskReducer } from '../reducers/taskReducer';

function DashboardPage({ studentName }) {
  const [tasks, dispatch] = React.useReducer(taskReducer, JSON.parse(localStorage.getItem('tasks')) || []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <DashboardComponent studentName={studentName} tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default DashboardPage;