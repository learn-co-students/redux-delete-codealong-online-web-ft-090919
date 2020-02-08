import React from 'react'

const Todo = ({todo, deleteTodo}) => <li>{todo.text} - <span><button onClick={() => deleteTodo(todo)} >Delete</button></span></li>

export default Todo;
