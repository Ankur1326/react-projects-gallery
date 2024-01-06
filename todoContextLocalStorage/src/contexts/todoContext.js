import {createContext, useContext} from "react"

// Create a new context called 'TodoContext' with default value for todos and functions 
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// Create a custom hook 'useTodo' to access the 'TodoContext' data
export const useTodo = () => {
    return useContext(TodoContext)
}

// Export the 'TodoProvider' components, which is just an alias for 'TodoContext.provider'
//allowing you to use it in your application to provide the context's data.
export const TodoProvider = TodoContext.Provider