import React, { useEffect, useState } from "react";
import TodoItem from "./Todo-item";

function TodoList({ setRefresh, isRefresh }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:8000/todos")
        .then((response) => response.json())
        .then((data) => {
          setRefresh(false);
          setTodos(data);
        })

        .catch((err) => console.log(err));
    }
  }, [isRefresh, setRefresh]);

  return (
    <ul id="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} setRefresh={setRefresh} />;
      })}
    </ul>
  );
}

export default TodoList;
