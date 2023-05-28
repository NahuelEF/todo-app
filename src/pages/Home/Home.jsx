import style from "./Home.module.css";
import TodoList from "../Home/components/TodoList/TodoList";
import IconSoon from "../../assets/icons/Sun";

const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <header className={style.header}>
          <h1 className={style.title}>Todo</h1>
          <button className="theme-btn" type="button">
            <IconSoon />
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
          <div className={style.footer}>
            <span>0 items left</span>
            <div className={style.sub_footer}>
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
      <p>Drag and drop to reorder list</p>
    </main>
  );
};

export default Home;

{
  /* <ul>
  <li>items left</li>
  <li>All</li>
  <li>Active</li>
  <li>Completed</li>
  <li>Clear Completed</li>
</ul> */
}
