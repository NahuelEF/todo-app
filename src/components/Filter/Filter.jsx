import { useState } from "react";
import style from "./Filter.module.css";

export const Filter = ({ todosActive, onDeleteCompleted }) => {
  const [isActive, setIsActive] = useState("All");

  const handleClick = (label) => {
    setIsActive(label);
  };

  return (
    <div className={style["filter"]}>
      <span className={style["filter__span"]}>{todosActive} items left</span>
      <div className={style["contain"]}>
        <ButtonFilter label="All" active={isActive} onClick={handleClick} />
        <ButtonFilter label="Active" active={isActive} onClick={handleClick} />
        <ButtonFilter
          label="Completed"
          active={isActive}
          onClick={handleClick}
        />
      </div>
      <button
        className={style["filter__btn"]}
        type="button"
        onClick={onDeleteCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

const ButtonFilter = ({ label, active, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`${style["filter__btn"]} ${
        active === label ? style["active"] : ""
      }`}
      type="button"
    >
      {label}
    </button>
  );
};
