import React from 'react';

const TaskCard = ({ task, studentName, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed-card' : ''}`}>
      <div className="task-header">
        <div className="task-title-group">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
            id={`task-check-${task.id}`}
          />
          <label htmlFor={`task-check-${task.id}`} className="task-title">
            {task.title}
          </label>
        </div>
        <span className={`priority-badge priority-${task.priority?.toLowerCase() || 'medium'}`}>
          {task.priority || 'Medium'}
        </span>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <span className="task-deadline">
          Deadline: {task.deadline || 'No deadline'}
        </span>
        <span className="task-status-badge">
          Status: {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      {/* Part B Prop Drilling Requirement */}
      <div className="task-greeting-banner">
        <span className="greeting-text">Hello, {studentName || 'Akash'}</span>
        <div className="prop-drilling-note">
          <strong>Note on Prop Drilling:</strong> Passing <code>studentName</code> through intermediate components (<code>App -&gt; Dashboard -&gt; TaskSection -&gt; TaskList -&gt; TaskCard</code>) causes components like TaskSection and TaskList to receive props they do not use, creating unnecessary boilerplate and coupling.
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onToggle(task.id)}
          className="btn-action btn-toggle"
        >
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        {onEdit && (
          <button
            onClick={() => onEdit(task)}
            className="btn-action btn-edit"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="btn-action btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
