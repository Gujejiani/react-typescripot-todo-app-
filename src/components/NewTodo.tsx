
import { useRef } from "react"
import classes from './NewTodo.module.css'
import { useContext } from "react"
import { TodosContext } from "../store/todos-context"
const NewTodo: React.FC = ()=>{

const todosCtc = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent)=> {
        e.preventDefault()
        const enteredText = todoTextInputRef.current?.value
        if(enteredText?.trim().length===0){
        return
        }
        if(enteredText){
            todosCtc.addTodo(enteredText)
        }
      
        
    }


            return <form  className={classes.form} onSubmit={submitHandler} >
                <label htmlFor="text">todo text</label>
                <input ref={todoTextInputRef} type="text" id="text" />
                <button>add todo</button>
            </form>

}

export default NewTodo