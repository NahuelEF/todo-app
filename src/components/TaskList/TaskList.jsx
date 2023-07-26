import { IconCross } from "@/assets/icons";
import IconCheck from "@/assets/icons/icon-check.svg";
import { useId } from "react";
import style from "./TaskList.module.css";

export const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul className={style["task-list"]}>
      {todos.length === 0 ? (
        <EmptyTask />
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className={style["task"]}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        ))
      )}
    </ul>
  );
};

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
      <button className={style["task__delete"]} type="button" title="Delete task" onClick={() => onDelete(todo.id)}>
        <IconCross />
      </button>
    </>
  );
};

const EmptyTask = () => (
  <li className={style["empty-task"]}>
    <div className={style["container"]}>
      <span className={style["container__circle"]}>
        <img className={style["container__img"]} src={IconCheck} alt="Icon check" />
      </span>
      <strong className={style["container__strong"]}>Great news!</strong>
      <p className={style["container__paragraph"]}>You've completed all tasks!</p>
    </div>
  </li>
);
