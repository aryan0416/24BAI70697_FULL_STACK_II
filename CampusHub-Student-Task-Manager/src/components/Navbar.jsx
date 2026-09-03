import React from 'react';

const Navbar = ({ user, theme, onToggleTheme, onLogout, activeTab }) => {
  const getTabTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'tasks': return 'Tasks';
      case 'resources': return 'Resources';
      case 'profile': return 'Profile';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="brand-name">CampusHub</span>
      </div>

      <div className="navbar-title">
        <h1>{getTabTitle()}</h1>
      </div>

      <div className="navbar-actions">
        <button 
          onClick={onToggleTheme} 
          className="theme-toggle-btn"
        >
          {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </button>

        {user && (
          <div className="user-profile-badge">
            <span className="user-name">{user.name || 'Akash'}</span>
          </div>
        )}

        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
