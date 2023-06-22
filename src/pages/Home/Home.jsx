import { useState } from "react";
import style from "./Home.module.css";
import IconSoon from "../../assets/icons/Sun";
import IconMoon from "../../assets/icons/Moon";
import TodoList from "../Home/components/TodoList/TodoList";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

const Home = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <main className={`${style.main} ${theme ? "light" : "dark"}`}>
      <div className={style.container}>
        <header className={style.header}>
          <h1 className={style.title}>Todo</h1>
          <button
            onClick={changeTheme}
            className="theme-btn"
            type="button"
            title="Theme button"
          >
            {theme ? <IconMoon /> : <IconSoon />}
          </button>
        </header>
        <div className={style.input_container}>
          <span className={style.circle}></span>
          <input
            className={style.input}
            type="text"
            name="todo"
            placeholder="Create a new todo..."
          />
        </div>
        <div className={style.list_container}>
          <TodoList />
          <BottomNavigation />
        </div>
      </div>
      <p style={{ color: "var(--tertiary-txt)" }}>
        Drag and drop to reorder list
      </p>
    </main>
  );
};

export default Home;
