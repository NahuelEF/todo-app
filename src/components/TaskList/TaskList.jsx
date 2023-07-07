import { useId } from "react";
import style from "./TaskList.module.css";
import IconCross from "../../assets/icons/Cross";

const Task = ({ todo, onChange, onDelete }) => {
  const taskId = useId();
  return (
    <>
      <div className={style["task"]}>
        <input
          id={`${taskId}-task`}
          className={style["task__btn"]}
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({ ...todo, do: e.target.checked });
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

const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={style["task_item"]}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
