import { useState } from "react";
import style from "./Header.module.css";
import IconMoon from "@/assets/icons/Moon";
import IconsSun from "@/assets/icons/Sun";

export const Header = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").dataset.theme = newTheme;
  };

  return (
    <header className={style["header"]}>
      <h1 className={style["title"]}>Todo</h1>
      <button onClick={handleThemeChange} type="button" title="Change theme">
        {theme === "dark" ? <IconsSun /> : <IconMoon />}
      </button>
    </header>
  );
};
