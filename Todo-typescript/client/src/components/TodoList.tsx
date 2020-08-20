import React from "react";
import { Todo } from "./TodoModel";
import "./TodoList.css";

interface todoListProps {
  items: Todo[];
  ondeleteHandler: (id: String) => void;
}

const TodoList: React.FC<todoListProps> = (props) => {
  const { items, ondeleteHandler } = props;
  return (
    <ul>
      {items.map((todo) => (
        <li key={+todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => ondeleteHandler(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
