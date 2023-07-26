import { IconMoon, IconSun } from "@/assets/icons";
import style from "./Header.module.css";

export const Header = ({ theme, onChangeTheme }) => {
  return (
    <header className={style["header"]}>
      <h1 className={style["title"]}>Todo</h1>
      <button onClick={onChangeTheme} type="button" title="Change theme">
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
    </header>
  );
};
