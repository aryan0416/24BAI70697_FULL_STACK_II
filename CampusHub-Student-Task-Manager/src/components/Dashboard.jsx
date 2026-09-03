import React from 'react';
import TaskList from './TaskList';

export const TaskSection = ({ tasks, studentName, onToggle, onDelete, onEdit }) => {
  return (
    <section className="task-section">
      <div className="section-header">
        <h2>Your Tasks ({tasks ? tasks.length : 0})</h2>
      </div>
      <TaskList
        tasks={tasks}
        studentName={studentName}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </section>
  );
};

const Dashboard = ({ user, tasks = [], studentName = 'Akash', onToggle, onDelete, onEdit }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard-component">
      <div className="welcome-banner">
        <h2>Welcome back, {studentName}</h2>
        <p>Here is your daily task overview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-total">
          <div className="stat-info">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{totalTasks}</span>
          </div>
        </div>

        <div className="stat-card stat-completed">
          <div className="stat-info">
            <span className="stat-label">Completed Tasks</span>
            <span className="stat-value">{completedTasks}</span>
          </div>
        </div>

        <div className="stat-card stat-pending">
          <div className="stat-info">
            <span className="stat-label">Pending Tasks</span>
            <span className="stat-value">{pendingTasks}</span>
          </div>
        </div>
      </div>

      <TaskSection
        tasks={tasks}
        studentName={studentName}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default Dashboard;
