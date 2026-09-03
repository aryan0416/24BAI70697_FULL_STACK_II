import { useState } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true);
  function toggleTheme(){
    setIsDark(!isDark);
  }
  return (

      <div className={isDark ? "dark" : "light"}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <h2>{isDark ? 'DarkTheme' : 'LightTheme'}</h2>
      </div>



  );
}

export default App
