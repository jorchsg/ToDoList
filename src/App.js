import React, { useEffect, useReducer } from 'react';
import TodoView from './components/layout/TodoView';
import { TodoReducer } from './components/todo/TodoReducer';
import { TodoContext } from './components/todo/TodoContext';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


function App() {

  const [todos, dispatch] = useReducer(TodoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    document.querySelector('input').focus()
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoView />
    </TodoContext.Provider>
  );
}

export default App;
