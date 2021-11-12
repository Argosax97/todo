import React from "react";
import ListItem from "./ListItem";

const TodoList = ({ todos, setTodos, filter }) => {
  return (
    <div>
      <ul>
        {filter.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
