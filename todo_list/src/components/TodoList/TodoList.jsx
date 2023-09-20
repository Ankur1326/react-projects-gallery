import React from 'react'
import Todo from '../Todo/Todo'

function TodoList(props) {

  return (
    <div>
        {props.list.length > 0 && props.list.map(todo => <Todo key={todo.id} todoData={props.list.TodoData} />)}
    </div>
  )
}

export default TodoList;