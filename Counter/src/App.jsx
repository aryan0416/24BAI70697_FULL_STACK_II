import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Increase() {

    if(count < 10){setCount(count + 1);}
  }

  function Decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Aryan Counter App</h1>
      <h2>Count : {count}</h2>
      {count >= 10 && <p>Max Limit Reached!</p>}
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;