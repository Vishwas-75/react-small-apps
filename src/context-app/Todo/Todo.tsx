import {TodoProvider} from "../context/providers";
import { Field } from "./Field";
import { List } from "./List";
import "./todo.css";

function Todo() {
  return (
    <div className="todo-Wrapper">
      <TodoProvider>
        <Field />
        <List />
      </TodoProvider>
    </div>
  );
}

export default Todo;
