import React, {useContext} from 'react'

import TodoItem from './Todo';
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context';

const Todos =() =>{

const todosCtx = useContext(TodosContext)
    return <ul  className={classes.todos} >
        
        {todosCtx.items.map((item, i) => <TodoItem onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)} key={item.id+i} todo={item} />)}
    </ul>

}   


export default Todos;