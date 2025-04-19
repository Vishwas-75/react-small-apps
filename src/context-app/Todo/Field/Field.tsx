import { ChangeEvent, useState } from "react";
import { addTask, useTodoContext } from "../../context";
import "./field.css";

function Field() {
  const [todoItem, setTodoItem] = useState("");
  const { dispatch } = useTodoContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoItem(event.target.value);
  };

  const handleAdd = () => {
    dispatch(
      addTask({
        description: todoItem,
        id: Math.floor(100000 + Math.random() * 900000),
      })
    );
    setTodoItem("");
  };
  return (
    <div className="todo_field-wrapper">
      <input type="text" value={todoItem} onChange={handleChange} className="todo_field-input" />
      <button onClick={handleAdd} className="todo_field-button">Add</button>
    </div>
  );
}

export default Field;
