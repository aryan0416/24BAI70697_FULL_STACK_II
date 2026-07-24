import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, studentName, onToggle, onDelete, onEdit }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-title">No tasks found</p>
        <p className="empty-subtitle">Add a task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          studentName={studentName}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
