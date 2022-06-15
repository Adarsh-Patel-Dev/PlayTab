import { FaRegEdit, FaRegWindowClose, } from "react-icons/fa";
import { React, useState } from "react";
import { Clock, Quote } from "../../components";
import { useNavigate } from "react-router-dom";
import { Todo } from "../../components/todo/Todo";

function MainPage() {
  const [style, setStyle] = useState("none");
  const [check, setCheck] = useState(true);
  const [display, setDisplay] = useState("hidden");
  const navigate = useNavigate();

  function focusHandler(e) {
    if (check) {
      setCheck(false);
      setStyle("line-through");
      setDisplay("visible");
    } else {
      setStyle("none");
      setCheck(true);
      setDisplay("hidden");
    }
  }
  const myfocus = localStorage.getItem("focus");
  const user = localStorage.getItem("userName");
  return (
    <div className="main-container main">
      <Clock />

      <div className="focus-container">
        <input
          onChange={focusHandler}
          value={check}
          type="checkbox"
          className="checkbox"
          placeholder=""
        />
        <p className="para-focus" style={{ textDecorationLine: style }}>
          {myfocus}
        </p>
        <FaRegEdit className="edit-icon" onClick={() => navigate("/home")} />
      </div>
      <p className="para-focus" style={{ visibility: display }}>
        Well done🤓 <em>{user}</em>
      </p>
      <Quote />
      <Todo/>
    </div>
  );
}

export { MainPage };
