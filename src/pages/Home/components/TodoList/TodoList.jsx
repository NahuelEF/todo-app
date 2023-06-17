import TodoItem from "../../../../components/TodoItem/TodoItem";
import todoTask from "../../todoTask.json";

const TodoList = () => {
  return (
    <ul>
      {todoTask.length === 0 ? (
        <li>
          <p>No hay task</p>
        </li>
      ) : (
        todoTask.map(({ id, todo }) => <TodoItem todo={todo} key={id} />)
      )}
    </ul>
  );
};

export default TodoList;
