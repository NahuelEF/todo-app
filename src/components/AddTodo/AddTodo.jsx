import { useState } from "react";
import style from "./AddTodo.module.css";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    title !== "" && onAddTodo(title);
    setTitle("");
  };

  return (
    <form className={style["form"]} onSubmit={onSubmitTodo}>
      <span className={style["circle"]}></span>
      <input
        className={style["form__input"]}
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
