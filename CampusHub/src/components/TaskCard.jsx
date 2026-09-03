import React, { useState } from 'react';

function TaskCard({ studentName, task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_TASK', payload: { ...task, title: editedTitle } });
    setIsEditing(false);
  };

  return (
    <div>
      <p>Hello, {studentName}</p>
      {isEditing ? (
        <div>
          <input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <p>{task.title} - {task.completed ? 'Completed' : 'Pending'} - {task.deadline}</p>
          <p>{task.description}</p>
          <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>Complete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
