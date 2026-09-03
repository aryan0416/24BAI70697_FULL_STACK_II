import React from 'react';
import DashboardComponent from '../components/Dashboard';

/**
 * Dashboard Page (src/pages/Dashboard.jsx)
 * Displays welcome message, task metrics, and task section with prop drilling.
 */
const DashboardPage = ({ user, tasks, studentName, onToggle, onDelete, onEdit }) => {
  return (
    <div className="page-container dashboard-page">
      <DashboardComponent
        user={user}
        tasks={tasks}
        studentName={studentName}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default DashboardPage;
