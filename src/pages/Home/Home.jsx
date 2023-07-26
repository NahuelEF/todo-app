import { AddTodo, Filter, TaskList } from "@/components";
import { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Footer, Header } from "./components";

let nextId = 6;
const initialTodos = [
  {
    id: 0,
    title: "Complete online JavaScript course",
    done: true,
  },
  {
    id: 1,
    title: "Jog around the park 3x",
    done: false,
  },
  {
    id: 2,
    title: "10 minutes meditation",
    done: false,
  },
  {
    id: 3,
    title: "Read for 1 hour",
    done: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    done: false,
  },
  {
    id: 5,
    title: "Complete Todo App on Frontend Mentor",
    done: false,
  },
];

export const Home = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("task")) || initialTodos);
  const [activeFilter, setActiveFilter] = useState("all");
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const todosCompleted = todos.filter((todo) => todo.done).length;

  const activeTodos = todos.length - todosCompleted;

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "active") return !todo.done;
    if (activeFilter === "completed") return todo.done;
    return todo;
  });

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
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
        return todo.id === nextTodo.id ? nextTodo : todo;
      })
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleDeleteCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const handleFilterTodo = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <main className={style["main"]}>
      <section className={style["section"]}>
        <Header onChangeTheme={handleChangeTheme} theme={theme} />
        <AddTodo onAddTodo={handleAddTodo} />
        <div className={style["container"]}>
          <TaskList todos={filteredTodos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
          <Filter
            todosActive={activeTodos}
            onDeleteCompleted={handleDeleteCompleted}
            onFilterTodo={handleFilterTodo}
            activeFilter={activeFilter}
          />
        </div>
        <Footer />
      </section>
    </main>
  );
};
