import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App(props) {
  const [list, setList] = useState([
    { id: 1, TodoData: 'todo 1', finished: true },
    { id: 1, TodoData: 'todo 2', finished: false },
  ])

  return (
    <>
      <AddTodo updateList={(todo) => setList([...list, {id: list.length + 1, todoData: todo, finished: false}])} />
      <TodoList list={list} />
    </>
  )
}

export default App;