import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const ToDoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Что нужно сделать?"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Что нужно сделать?
      </label>
    </div>
  );
};

export default ToDoForm;
