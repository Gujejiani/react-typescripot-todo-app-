import React from 'react'
import Todo from '../models/todo'
import classes from './Todo.module.css'
const TodoItem: React.FC<{todo: Todo, onDeleteTodo: ()=> void }> = (props) =>{



return <li onClick={props.onDeleteTodo} className={classes.item} style={{color: 'green'}} > {props.todo.text}</li>
}
export default TodoItem