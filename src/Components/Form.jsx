import React, { useState } from "react";

const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      alert("Please fill the field");
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="container">
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          className="textbox"
        />
        <button type="submit" onClick={submitTodoHandler} className="todo-btn">
          <i class="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompletd">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
