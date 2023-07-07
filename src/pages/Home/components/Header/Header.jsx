import React from "react";
import style from "./Header.module.css";
import IconMoon from "../../../../assets/icons/Moon";
import IconsSun from "../../../../assets/icons/Sun";
const Header = ({ onClick, theme }) => {
  return (
    <header className={style["header"]}>
      <h1 className={style["title"]}>Todo</h1>
      <button onClick={onClick} type="button" title="Change theme">
        {theme ? <IconMoon /> : <IconsSun />}
      </button>
    </header>
  );
};

export default Header;
