import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardPage from './pages/Dashboard';
import TasksPage from './pages/Tasks';
import ResourcesPage from './pages/Resources';
import ProfilePage from './pages/Profile';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [user, setUser] = useLocalStorage('user', null);
  const studentName = user ? user.name : 'Akash'; 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<DashboardPage studentName={studentName} />} />
        <Route path="/tasks" element={<TasksPage studentName={studentName} />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
