import TodoItem from "../../../../components/TodoItem/TodoItem";
import todoTask from "../../todoTask.json";

const TodoList = () => {
  return (
    <ul>
      {todoTask.length === 0 ? (
        <li>
          <p>There are not task</p>
        </li>
      ) : (
        todoTask.map((todo) => (
          <TodoItem key={todo.id} label={todo.title} active={todo.active} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
