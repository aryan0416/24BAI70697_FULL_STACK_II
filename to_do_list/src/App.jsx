import React, { useState } from 'react';
import { use } from 'react';

function App() {
const [count,setCount] = useState(0);
const [todo,setTodo] = useState("");
const [todos,setTodos]=useState([]);

function addTodo(){
  if(todo.trim() === ""){return;}
  setTodos(prevTodos => [...prevTodos, todo]);
  setTodo("");
}
function CountIncrese(){
  setCount(prevCount => prevCount + 1);
}
function CountDecrese(){
  setCount(prevCount => prevCount - 1);
}
function deleteTodo(todoToDelete){
  setTodos(
    todos.filter(todo => todo !== todoToDelete)
  );
}

  return (
    <div>
      <h1>To-Do List</h1>
      <h2>Count={count}</h2>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder = "Enter a new task..." />
      <button onClick={() => { addTodo(); CountIncrese(); }}>Add</button>
      <ul>
        {todos.map((t,index)=>(
          <li key={index} >
            {t}
            <button onClick={() => { deleteTodo(t); CountDecrese(); }}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App

