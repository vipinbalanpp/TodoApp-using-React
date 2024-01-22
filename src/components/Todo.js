import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";


const Todo = (props) => {
        const [showModal,setShowModal]=useState(false)
        const [editText,setEditText]=useState('')
        const [todos,setTodos] = useContext(TodoContext);
        const completeTodo = (e) => {
            const filterTodos = todos.map( (item) => {
                if(item.id === e.target.value){
                    item.completed=false;
                    if(e.target.checked){
                        item.completed=true;
                    }
                }return item;
            })
            setTodos(filterTodos);
        }
        const deleteTodo = (e) => {
            e.preventDefault();
            const filteredTodos = todos.filter((item) => item.id !==  e.target.id)
            setTodos(filteredTodos)
        }
        const startEditTodo = (e) => {
            setShowModal(true)
            setEditText(e)
        }
        const submitEditTodo = (id)=>{
            const filterTodos = todos.map( (item) => {
                if(item.id === id){
                   item.title=editText;
                }return item;
            })
            setTodos(filterTodos);
            setShowModal(false)
        }

        const isCompleted=props.completed?'checked':'';

    return (
        <>
        {showModal && <div className="edit-modal" onClick={()=>setShowModal(false)}>
            <div className="edit-box">
                <div onClick={()=>setShowModal(false)} className="close_icon">
                    <i  className="fa fa-close"></i>
                </div>
                
            <input value={editText} onChange={(e)=>setEditText(e.target.value)} onClick={(e)=>e.stopPropagation()} type="text"/>
            <button onClick={(()=>submitEditTodo(props.id))} type="button">save</button>
            </div>
        </div>}
       
            <div className="todo-item">
                <input type="checkbox" checked={isCompleted} value={props.id} onChange={ e =>completeTodo(e)} />
                <label htmlFor={props.id} style={{textDecoration:isCompleted?"line-through":"",textOverflow:"ellipsis"}}>{props.title}</label>
                <i id={props.id}  onClick={ e => startEditTodo(props.title)} className="fa-solid fa-edit"></i>
                <i id={props.id}  onClick={ e => deleteTodo(e)} className="fa-solid fa-trash"></i>
            </div>
           
        </>
    )
}
export default Todo;