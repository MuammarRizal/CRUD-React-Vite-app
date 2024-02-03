import React, { useState } from "react";

function Header({ setRefresh }) {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    const newTodo = {
      title,
      done: false,
    };

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setRefresh(true);
      setTimeout(() => {
        alert("Berhasil Menambahkan Data");
      }, 500);
      setTitle("Isi Disini");
    });
  };

  return (
    <div id="todo-header" className="header">
      <h2>Simple Todo App</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Isi disini" />
      <span className="add-button" onClick={addTodo}>
        Add
      </span>
    </div>
  );
}

export default Header;
