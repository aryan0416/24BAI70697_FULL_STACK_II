import React from 'react';
import TaskList from './TaskList';

function TaskSection({ studentName, tasks, dispatch }) {
  return (
    <div>
      <h3>Task Section</h3>
      <TaskList studentName={studentName} tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

function Dashboard({ studentName, tasks, dispatch }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {studentName}</p>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
      <TaskSection studentName={studentName} tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default Dashboard;