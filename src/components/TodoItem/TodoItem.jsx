import { useId } from "react";
import IconCross from "../../assets/icons/Cross";
import style from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const todoId = useId();
  return (
    <li className={style["todo-item"]}>
      <div className={style["todo"]}>
        <input
          id={`${todoId}-todo`}
          className={style["todo__btn"]}
          type="checkbox"
        />
        <label className={style["todo__label"]} htmlFor={`${todoId}-todo`}>
          {todo}
        </label>
      </div>
      <button type="button" title="Delete task">
        <IconCross />
      </button>
    </li>
  );
};

export default TodoItem;
