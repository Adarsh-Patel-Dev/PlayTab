import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    input.length &&
      setTodo((prev) => [
        ...prev,
        { data: input, isDone: false, inputId: uuid() },
      ]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((todo, index) => {
      return index !== id;
    });
    setTodo(updatedTodo);
  };
  const toggleTodo = () => {
    setDisplay((display) => !display);
  };

  const todoHandler = (item) => {
    setTodo((todos) =>
      todos.map((todo) => {
        return todo.inputId === item.inputId
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      })
    );
    setDisplay2((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleTodo} className="toggle-todo-btn">
        Todo
      </button>
      <div
        className="todo-container"
        style={{ display: display ? "block" : "none" }}
      >
        <span onClick={toggleTodo} className="close-todo-container">
          <MdKeyboardArrowDown />
        </span>
        <h3>Todo</h3>
        <div style={{ opacity: display2 ? 1 : 0 }}>
          <form
            onPointerLeave={() => setDisplay2(false)}
            onPointerEnter={() => setDisplay2(true)}
            onSubmit={addTodo}
          >
            <input
              className="todo-input"
              onChange={(e) => setInput(e.target.value)}
              onPointerEnter={() => setDisplay2(true)}
              value={input}
              placeholder="Add todo here..."
            />
          </form>
        </div>

        {todo.length > 0 &&
          todo.map((item, index) => {
            return (
              <div className="todo-list" key={index}>
                <input
                  onChange={() => todoHandler(item)}
                  type="checkbox"
                  checked={item?.isDone}
                  className="todo-checkbox"
                />
                <p
                  style={{
                    textDecorationLine: item?.isDone ? "line-through" : "none",
                    color: item?.isDone ? "gray" : "white",
                  }}
                >
                  {item.data}
                </p>
                <i onClick={() => deleteTodo(index)}>
                  <MdClose />
                </i>
              </div>
            );
          })}
      </div>
    </>
  );
}

export { Todo };
