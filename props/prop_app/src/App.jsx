import './App.css'

function Child({ name, age }) {
  return (
    <p>
      {name} is {age} years old in his dreams.
    </p>
  )
}

function App() {
  return (
    <main className="app">
      <h1>React Props Example</h1>
      <Child name="Sam" age={8} />
      <Child name="Mia" age={12} />
    </main>
  )
}

export default App
