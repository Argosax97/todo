import React from "react";

const ListItem = ({ text, todo, todos, setTodos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !todo.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="list-item">
      <li className={`todo-li ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ListItem;
