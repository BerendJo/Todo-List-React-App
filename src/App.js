import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

// loads todolist.js
function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;