import React, { useState } from "react";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [style, setStyle] = useState(false);
  const [check, setCheck ] = useState(false);

  

  const addTodo = (e) => {
      e.preventDefault();
    input ? setTodo([...todo, input]) : "";
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

  const todoHandler = (id) => {
      const checkedTodo = todo.filter((todo,index)=>{
          return index!==id
      })
    setStyle((style) => !style);
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
        onPointerLeave={()=>setDisplay2(false)}
        onPointerEnter={() => setDisplay2(true)}
        onSubmit={addTodo}>
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
                  onChange={(e)=>e.target.checked?todoHandler(index):""}
                  type="checkbox"
                //   checked={check}
                  className="todo-checkbox"
                />
                <p
                  style={{
                    textDecorationLine: style ? "line-through" : "none",
                    color: style ? "gray" : "white"
                  }}
                >
                  {item}
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
