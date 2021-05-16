import React, { useState, useEffect } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { IToDo } from "../interfaces";

const ToDoPage: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as IToDo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newToDo: IToDo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newToDo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  );
};

export default ToDoPage;
