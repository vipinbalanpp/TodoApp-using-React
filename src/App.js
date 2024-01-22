import { TodoProvider } from "./context/TodoContext";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (

   

    <TodoProvider>
      <div className="container">
      <h1 className="app-title">My Todos</h1>
        <AddToDo />
        <ToDoList />
      </div>
    </TodoProvider>
   
  );
}

export default App;
