import React, { useState } from "react";
import style from "./BottomNavigation.module.css";

const ButtonNav = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`${style["bottom-nav__btn"]} ${
        isActive === label ? style["active"] : ""
      }`}
      type="button"
    >
      {label}
    </button>
  );
};

const BottomNavigation = ({ items = "0" }) => {
  const [active, setActive] = useState("All");

  const handleClick = (label) => {
    setActive(label);
  };

  return (
    <div className={style["bottom-nav"]}>
      <span className={style["bottom-nav__span"]}>{items} items left</span>
      <div className={style["contain-center"]}>
        <ButtonNav label="All" isActive={active} onClick={handleClick} />
        <ButtonNav label="Active" isActive={active} onClick={handleClick} />
        <ButtonNav label="Completed" isActive={active} onClick={handleClick} />
      </div>
      <button className={style["bottom-nav__btn"]} type="button">
        Clear Completed
      </button>
    </div>
  );
};

export default BottomNavigation;
