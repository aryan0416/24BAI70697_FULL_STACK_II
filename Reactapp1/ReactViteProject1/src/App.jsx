import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = (event) => {
    event.preventDefault()
    const text = input.trim()

    if (!text) return

    setTasks([...tasks, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1>To-Do App</h1>

      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
              </label>
              <button type="button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
