import React from 'react'

function Todo({todoData, isFinished}) {
  return (
    <div>
        <input type="checkbox" checked={isFinished} />
        {todoData}
        <button>Edit</button> 
        <button>Delete</button>
    </div>
  )
}

export default Todo;