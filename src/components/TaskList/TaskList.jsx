import { useId } from "react";
import style from "./TaskList.module.css";
import IconCross from "../../assets/icons/Cross";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul className={style["task-list"]}>
      {todos.map((todo) => (
        <li key={todo.id} className={style["task"]}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

const Task = ({ todo, onChange, onDelete }) => {
  const taskId = useId();
  return (
    <>
      <div className={style["task-contain"]}>
        <input
          id={`${taskId}-task`}
          className={style["task__checkbox"]}
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({ ...todo, done: e.target.checked });
          }}
        />
        <label className={style["task__label"]} htmlFor={`${taskId}-task`}>
          {todo.title}
        </label>
      </div>
      <button
        className={style["task__button"]}
        type="button"
        title="Delete task"
        onClick={() => onDelete(todo.id)}
      >
        <IconCross />
      </button>
    </>
  );
};
