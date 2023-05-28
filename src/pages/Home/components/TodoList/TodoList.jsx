import TodoItem from "../../../../components/TodoItem/TodoItem";

const TodoList = () => {
  return (
    <ul>
      <TodoItem todo={"Jog around the park 3x"} />
      <TodoItem todo={"10 minutes meditation"} />
      <TodoItem todo={"Read for 1 hour"} />
    </ul>
  );
};

export default TodoList;
