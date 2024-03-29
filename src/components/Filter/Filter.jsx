import { TODO_FILTER } from "@/constants/filter";
import style from "./Filter.module.css";

export const Filter = ({ todosActive, onDeleteCompleted, onFilterTodo, activeFilter }) => {
  return (
    <div className={style["bottom"]}>
      <span className={style["bottom__span"]}>{todosActive} items left</span>
      <ul className={style["filter"]}>
        {Object.entries(TODO_FILTER).map(([key, value]) => (
          <li key={key}>
            <button
              onClick={() => onFilterTodo(value)}
              type="button"
              className={`${style["filter__button"]} ${activeFilter === value ? style["active"] : ""}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <button className={style["bottom__button"]} type="button" onClick={onDeleteCompleted}>
        Clear Completed
      </button>
    </div>
  );
};
