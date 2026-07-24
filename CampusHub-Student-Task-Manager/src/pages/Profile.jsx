import React from 'react';

const ProfilePage = ({ user, tasksCount, completedCount, theme, onToggleTheme }) => {
  return (
    <div className="page-container profile-page">
      <div className="page-header">
        <div>
          <h2>Student Profile</h2>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card main-info">
          <h3 className="profile-name">{user?.name || 'Akash'}</h3>
          <p className="profile-role">Student</p>

          <div className="profile-details-list">
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user?.email || 'akash@institute.edu'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className="detail-value text-success">Logged In</span>
            </div>
          </div>
        </div>

        <div className="profile-card activity-summary">
          <h3>Task Summary</h3>
          <div className="summary-stats">
            <div className="summary-box">
              <span className="summary-num">{tasksCount}</span>
              <span className="summary-lbl">Total Tasks</span>
            </div>
            <div className="summary-box">
              <span className="summary-num">{completedCount}</span>
              <span className="summary-lbl">Completed</span>
            </div>
            <div className="summary-box">
              <span className="summary-num">
                {tasksCount > 0 ? `${Math.round((completedCount / tasksCount) * 100)}%` : '0%'}
              </span>
              <span className="summary-lbl">Completion Rate</span>
            </div>
          </div>

          <div className="preferences-section">
            <h4>App Theme</h4>
            <div className="preference-item">
              <div>
                <p>Toggle between light and dark mode.</p>
              </div>
              <button onClick={onToggleTheme} className="btn-secondary">
                Current: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
