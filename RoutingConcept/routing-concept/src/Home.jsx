import React from 'react'
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/About");
  }
  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home;
