import {useState} from 'react'
import Todo from '../models/todo'
import React from 'react'

type TodosContextObj ={
    items: Todo[];
    addTodo: (text: string)=> void;
    removeTodo: (id: string)=> void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string)=> {},
    removeTodo: (id: string)=>{}
})



const TodosContextProvider: React.FC = (props) =>{
    const [todos, setTodos] = useState<Array<Todo>>([   new Todo(' learn react')])
    const addTodoHandler = (text: string)=>{
        const todo = new Todo(text)
      setTodos(currentTodos=>{
        return [...currentTodos, todo]
      })
    }
    const deleteHandler  = (id: string)=>{
          const updatedTodos: Todo[] = todos.filter(todo=> todo.id !==id)
          setTodos(updatedTodos)
    }

const  contextValue: TodosContextObj  = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteHandler
}

 return <TodosContext.Provider value={contextValue} >
     {props.children}
 </TodosContext.Provider>       
}


export default TodosContextProvider