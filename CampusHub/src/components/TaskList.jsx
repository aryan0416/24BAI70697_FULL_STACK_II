import React, { useState } from 'react';
import TaskCard from './TaskCard';

function TaskList({ studentName, tasks, dispatch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [sortAsc, setSortAsc] = useState(true);
  
  let displayedTasks = tasks.filter(task => task.title.includes(searchTerm));
  if (filter === 'COMPLETED') displayedTasks = displayedTasks.filter(t => t.completed);
  if (filter === 'PENDING') displayedTasks = displayedTasks.filter(t => !t.completed);

  displayedTasks.sort((a, b) => {
    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  return (
    <div>
      <h4>Task List</h4>
      <input placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="PENDING">Pending</option>
      </select>
      <button onClick={() => setSortAsc(!sortAsc)}>Sort by Deadline</button>

      <div>
        {displayedTasks.map(task => (
          <TaskCard key={task.id} studentName={studentName} task={task} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
