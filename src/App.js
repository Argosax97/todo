import "./App.css";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
     loadLocalStorage();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    switch (filterStatus) {
      case "completed":
        setFilter(todos.filter((element) => element.completed === true));
        console.log(filter);
        break;
      case "notcompleted":
        setFilter(todos.filter((element) => element.completed === false));
        console.log(filter);
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const loadLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos); 
    }
  };

  return (
    <div className="todo-body">
      <h1>To-do App</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        input={input}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        input={input}
        filter={filter}
      />
    </div>
  );
}

export default App;
