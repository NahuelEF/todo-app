import { useState } from "react";
import style from "./Home.module.css";
import Header from "./components/Header/Header";
import AddTodo from "../../components/AddTodo/AddTodo";
import TaskList from "../../components/TaskList/TaskList";

let nextId = 3;
const initialTodos = [
  {
    id: 0,
    title: "Jog around the park 3x",
    done: true,
  },
  {
    id: 1,
    title: "10 minutes meditation",
    done: false,
  },
  {
    id: 2,
    title: "Read for 1 hour",
    done: false,
  },
];

const Home = () => {
  const [theme, setTheme] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const changeThemeColor = () => {
    setTheme(!theme);
  };

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((todo) => {
        todo.id === nextTodo.id ? nextTodo : todo;
      })
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <main className={`${style["main"]} ${theme ? "light" : "dark"}`}>
      <div className={style["container"]}>
        <Header onClick={changeThemeColor} theme={theme} />
        <AddTodo onAddTodo={handleAddTodo} />
        <div className={style["list_container"]}>
          <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
      <p style={{ color: "var(--tertiary-txt)" }}>
        Drag and drop to reorder list
      </p>
    </main>
  );
};

export default Home;
