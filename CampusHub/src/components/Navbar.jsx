import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>CampusHub</h2>
      <Link to="/dashboard">Dashboard</Link><br />
      <Link to="/tasks">Tasks</Link><br />
      <Link to="/resources">Resources</Link><br />  
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;