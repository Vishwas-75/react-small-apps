import { Field } from "./Field";
import { List } from "./List";
import "./todo.css"

function Todo() {
  return (
    <div className="todo-Wrapper">
      <Field />
      <List />
    </div>
  );
}

export default Todo;
