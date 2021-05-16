import React from "react";
import { IToDo } from "../interfaces";

type ToDoListProps = {
  todos: IToDo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const ToDoList: React.FunctionComponent<ToDoListProps> = (props) => {
  if (props.todos.length === 0) {
    return <p className="center"> Пока дел нет!</p>;
  }

  return (
    <ul>
      {props.todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                onClick={() => props.onRemove(todo.id)}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
