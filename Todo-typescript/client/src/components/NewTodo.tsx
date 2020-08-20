import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddHandler: (text: string) => void;
};
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHander = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddHandler(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHander}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
