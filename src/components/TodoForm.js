import React from "react";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  filter,
  setFilter,
  filterStatus,
  setFilterStatus,
}) => {
  const inputHandler = (e) => {
    let inputValue = e.target.value;
    setInput(inputValue);
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos([
        ...todos,
        {
          text: input,
          completed: false,
          id: Math.floor(Math.random() * 10000),
        },
      ]);
      setInput("");
    } else {
      return;
    }
  };

  const filterStatusHandler = (e) => {
    setFilterStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="Type Todo"
      />
      <button onClick={addTodoHandler} className="add-todo">
        Add Todo
      </button>
      <select onChange={filterStatusHandler} style={{ marginLeft: "15px" }}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not Completed</option>
      </select>
    </form>
  );
};

export default TodoForm;
