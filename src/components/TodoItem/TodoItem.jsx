import IconCheck from "../../assets/icons/Check";
import IconCross from "../../assets/icons/Cross";
import "./TodoItem.css";

const CheckButton = () => {
  return (
    <button className="check-btn" type="button">
      <IconCheck />
    </button>
  );
};

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      <div className="item">
        <CheckButton />
        <p>{todo}</p>
      </div>
      <button>
        <IconCross />
      </button>
    </li>
  );
};

export default TodoItem;
