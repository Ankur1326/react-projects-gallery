import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext' 

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() // Use the custom 'useTodo' hook to access the 'addTodo' function from the context

    // Define a function 'add' to handle the submission of a new todo
    const add = (e) => {
      e.preventDefault()

      //Check if the 'todo' input is empty, and return if it is
      if (!todo) return

      // Call the 'addTodo' function from the context to add a new todo
      addTodo({ todo, completed: false})
      setTodo("") // Clear the input field by resetting the 'todo' state to an empty string
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;