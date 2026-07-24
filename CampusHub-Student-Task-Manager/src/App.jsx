import React, { useReducer, useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { taskReducer, TASK_ACTIONS } from './reducers/taskReducer';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import DashboardPage from './pages/Dashboard';
import TasksPage from './pages/Tasks';
import ResourcesPage from './pages/Resources';
import ProfilePage from './pages/Profile';

const DEFAULT_TASKS = [
  {
    id: '1',
    title: 'Submit Lab Assignment 5',
    description: 'Build CampusHub React app.',
    priority: 'High',
    completed: false,
    deadline: '2026-07-28'
  },
  {
    id: '2',
    title: 'Prepare for Mid-Sem Exam',
    description: 'Revise unit 1 and unit 2 concepts.',
    priority: 'High',
    completed: true,
    deadline: '2026-07-25'
  },
  {
    id: '3',
    title: 'Read React Hooks Notes',
    description: 'Understand props and custom hooks.',
    priority: 'Medium',
    completed: false,
    deadline: '2026-07-30'
  }
];

const DEFAULT_RESOURCES = [
  {
    id: '1',
    title: 'React Documentation',
    category: 'Documentation',
    url: 'https://react.dev'
  },
  {
    id: '2',
    title: 'JavaScript Reference',
    category: 'Documentation',
    url: 'https://developer.mozilla.org'
  }
];

function App() {
  const [user, setUser, removeUser] = useLocalStorage('campushub_user', null);
  const [storedTasks, setStoredTasks] = useLocalStorage('campushub_tasks', DEFAULT_TASKS);
  const [resources, setResources] = useLocalStorage('campushub_resources', DEFAULT_RESOURCES);
  const [theme, setTheme] = useLocalStorage('campushub_theme', 'light');
  const [activeTab, setActiveTab] = useState('dashboard');

  const [tasks, dispatch] = useReducer(taskReducer, storedTasks || DEFAULT_TASKS);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const studentName = user?.name || 'Akash';

  const handleAddTask = (newTaskData) => {
    dispatch({
      type: TASK_ACTIONS.ADD_TASK,
      payload: newTaskData
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: TASK_ACTIONS.DELETE_TASK,
      payload: taskId
    });
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch({
      type: TASK_ACTIONS.UPDATE_TASK,
      payload: updatedTask
    });
  };

  const handleToggleTask = (taskId) => {
    dispatch({
      type: TASK_ACTIONS.TOGGLE_TASK,
      payload: taskId
    });
  };

  const handleAddResource = (newResource) => {
    const resourceWithId = {
      ...newResource,
      id: Date.now().toString()
    };
    setResources((prev) => [resourceWithId, ...(prev || [])]);
  };

  const handleDeleteResource = (resourceId) => {
    setResources((prev) => (prev || []).filter((r) => r.id !== resourceId));
  };

  const handleLoginSuccess = (userPayload) => {
    setUser(userPayload);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    removeUser();
    setActiveTab('dashboard');
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className={`app-wrapper ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navbar
        user={user}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onLogout={handleLogout}
        activeTab={activeTab}
      />

      <div className="main-layout">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="content-area">
          {activeTab === 'dashboard' && (
            <DashboardPage
              user={user}
              tasks={tasks}
              studentName={studentName}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              onEdit={handleUpdateTask}
            />
          )}

          {activeTab === 'tasks' && (
            <TasksPage
              tasks={tasks}
              studentName={studentName}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onUpdateTask={handleUpdateTask}
              onToggleTask={handleToggleTask}
            />
          )}

          {activeTab === 'resources' && (
            <ResourcesPage
              resources={resources || []}
              onAddResource={handleAddResource}
              onDeleteResource={handleDeleteResource}
            />
          )}

          {activeTab === 'profile' && (
            <ProfilePage
              user={user}
              tasksCount={tasks.length}
              completedCount={tasks.filter((t) => t.completed).length}
              theme={theme}
              onToggleTheme={handleToggleTheme}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
