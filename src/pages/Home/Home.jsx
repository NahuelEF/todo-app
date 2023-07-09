import { useState } from "react";
import style from "./Home.module.css";
import Header from "./components/Header/Header";
import AddTodo from "../../components/AddTodo/AddTodo";
import TaskList from "../../components/TaskList/TaskList";

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

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <main className={style["main"]}>
      <div className={style["container"]}>
        <Header />
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </main>
  );
};

export default Home;
