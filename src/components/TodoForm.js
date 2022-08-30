import React, { useEffect, useState,useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo!");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update value..." : "add new todo"}
          ref={inputRef}
        />
        <button
          className={`btn ${props.edit ? "updateTodo" : 'addTodo'}`}
          type="submit"
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
