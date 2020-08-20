import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/TodoModel";

const App = () => {
  const [todos, settodos] = useState<Todo[]>([]);

  const todoAddHAndler = (text: string) => {
    settodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const deleteHandler = (todoId: String) => {
    settodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddHandler={todoAddHAndler} />
      <TodoList ondeleteHandler={deleteHandler} items={todos} />
    </div>
  );
};

export default App;
