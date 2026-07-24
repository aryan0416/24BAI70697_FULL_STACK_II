import React, { useState, useMemo } from 'react';
import TaskList from '../components/TaskList';

const TasksPage = ({ tasks, studentName, onAddTask, onDeleteTask, onUpdateTask, onToggleTask }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    deadline: new Date().toISOString().split('T')[0]
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        deadline: formData.deadline
      });
      setEditingTask(null);
    } else {
      onAddTask({
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        deadline: formData.deadline,
        completed: false
      });
    }

    setFormData({
      title: '',
      description: '',
      priority: 'Medium',
      deadline: new Date().toISOString().split('T')[0]
    });
    setShowAddForm(false);
  };

  const handleStartEdit = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description || '',
      priority: task.priority || 'Medium',
      deadline: task.deadline || new Date().toISOString().split('T')[0]
    });
    setShowAddForm(true);
  };

  const handleCancelForm = () => {
    setShowAddForm(false);
    setEditingTask(null);
    setFormData({
      title: '',
      description: '',
      priority: 'Medium',
      deadline: new Date().toISOString().split('T')[0]
    });
  };

  const filteredAndSortedTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        const matchesSearch =
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus =
          statusFilter === 'all' ||
          (statusFilter === 'completed' && task.completed) ||
          (statusFilter === 'pending' && !task.completed);

        const matchesPriority =
          priorityFilter === 'all' ||
          task.priority.toLowerCase() === priorityFilter.toLowerCase();

        return matchesSearch && matchesStatus && matchesPriority;
      })
      .sort((a, b) => {
        const dateA = new Date(a.deadline || '9999-12-31').getTime();
        const dateB = new Date(b.deadline || '9999-12-31').getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [tasks, searchQuery, statusFilter, priorityFilter, sortOrder]);

  return (
    <div className="page-container tasks-page">
      <div className="page-header">
        <div>
          <h2>Task Management</h2>
        </div>
        <button
          onClick={() => {
            if (showAddForm) handleCancelForm();
            else setShowAddForm(true);
          }}
          className="btn-primary"
        >
          {showAddForm ? 'Cancel' : 'Add Task'}
        </button>
      </div>

      {showAddForm && (
        <div className="form-card">
          <h3>{editingTask ? 'Edit Task' : 'Add New Task'}</h3>
          <form onSubmit={handleFormSubmit} className="task-form">
            <div className="form-group">
              <label htmlFor="task-title">Title *</label>
              <input
                type="text"
                id="task-title"
                name="title"
                required
                placeholder="Task title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="task-description">Description</label>
              <textarea
                id="task-description"
                name="description"
                rows="3"
                placeholder="Task details"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="task-priority">Priority</label>
                <select
                  id="task-priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="task-deadline">Deadline</label>
                <input
                  type="date"
                  id="task-deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingTask ? 'Update Task' : 'Save Task'}
              </button>
              <button type="button" onClick={handleCancelForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="controls-card">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="control-item">
            <label>Status:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="control-item">
            <label>Priority:</label>
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="control-item">
            <label>Sort Deadline:</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Earliest First</option>
              <option value="desc">Latest First</option>
            </select>
          </div>
        </div>
      </div>

      <TaskList
        tasks={filteredAndSortedTasks}
        studentName={studentName}
        onToggle={onToggleTask}
        onDelete={onDeleteTask}
        onEdit={handleStartEdit}
      />
    </div>
  );
};

export default TasksPage;
