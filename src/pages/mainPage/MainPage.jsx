import { FaRegEdit, FaRegWindowClose } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { React, useState } from "react";
import { Clock, Quote } from "../../components";
import { Todo } from "../../components/todo/Todo";

function MainPage() {
  const [style, setStyle] = useState(false);
  const [check, setCheck] = useState(true);
  const [display, setDisplay] = useState(true);

  const [focus, setFocus] = useState("");
  const [display2, setDisplay2] = useState(true);

  function keyHandler(e) {
    if (e.key === "Enter") {
      localStorage.setItem("focus", focus);
      setDisplay2(false);
    }
  }

  function focusHandler(e) {
    if (check) {
      setCheck(false);
      setStyle("line-through");
      setDisplay(false);
    } else {
      setStyle("none");
      setCheck(true);
      setDisplay(true);
    }
  }
  const myfocus = localStorage.getItem("focus");
  const user = localStorage.getItem("userName");
  return (
    <div className="main-container main">
      <Clock />

      {!display2 ? (
        <div className="flex-col">
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
            <FaRegEdit
              className="edit-icon"
              // style={{ display: display ? "display" : "none" }}
              onClick={() => setDisplay2(true)}
            />

            <MdDeleteOutline
              className="edit-icon"
              onClick={() => {
                setFocus("");
                setDisplay2(true);
              }}
            />
          </div>
          <div>
            {display ? (
              <p className="para-focus grid-center">You can do it.</p>
            ) : (
              <p className="para-focus grid-center flex-row">Well Done  {user}.</p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="para">What is your main focus for today?</p>
          <input
            onKeyPress={keyHandler}
            onChange={(e) => setFocus(e.target.value)}
            value={focus}
            type="text"
            className="input-container-focus"
            placeholder=""
            required
          />
        </div>
      )}

      <Quote />
      <Todo />
    </div>
  );
}

export { MainPage };
