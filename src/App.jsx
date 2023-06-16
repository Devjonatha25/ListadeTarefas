import { useState } from "react";
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/search.jsx";
import "./App.css";

function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      Text: "criar funcionalidade X no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      Text: "ir para a academia ",
      category: "Pessoa",
      isCompleted: false,
    },
    {
      id: 3,
      Text: "Estudar react ",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  const [search,setSearch] = useState("")

  const addTodo = (Text,category)  =>{
    const newTodos = [...todos,
      {
      id: Math.floor(Math.random()* 10000),
      Text,
      category,
      isCompleted:false,
    },
  ];

    settodos(newTodos);
  }
  const removeTodo = (id) =>{
     const newTodos =[...todos]
     const filteredTodo = newTodos.filter(todo => todo.id !==id ? todo:null)
     settodos(filteredTodo);
  }
  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted): todo)
    settodos(newTodos) 
    
  }
 


  return (
    <div className="app">
      <h1 className="h1-todo">Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/> 
    <div className="todo-list">
    {todos.filter((todo)=>todo.Text.toLowerCase().includes(search.toLowerCase()) ).map((todo) => (
       <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  
  );
}

export default App;


//devJonatha