import { useContext } from "react"
import Todo from "./Todo"
import { TodoContext } from "../context/TodoContext"


const ToDoList=()=>{
        const [todos,setTodos] = useContext(TodoContext);


    return(
        1<= todos.length ? todos.map((item)=>{
            return( <Todo key={item.id} id={item.id} title={item.title} completed={item.completed} />)
           
        }): (<h3>No todo found. Please add some...</h3>)
      
    )
}
export default ToDoList