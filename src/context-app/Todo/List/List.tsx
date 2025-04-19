import { useTodoContext } from "../../context";
import { deleteTask, updateTask } from "../../context";
import { ChangeEvent, useState } from "react";
import "./list.css";

function List() {
  const [taskItem, setTaskItem] = useState("");
  const {
    state: { todoList },
    dispatch,
  } = useTodoContext();
  const [editId, setEditId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    dispatch(deleteTask({ description: "", id: id }));
  };

  const handleEdit = (id: number, value: string) => {
    setEditId(id);
    setTaskItem(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskItem(event.target.value);
  };

  const handleUpdate = () => {
    if (editId) {
      dispatch(updateTask({ description: taskItem, id: editId }));
      setEditId(null);
      setTaskItem("");
    }
  };
  return (
    <div>
      {todoList.map(({ id, description }) => (
        <div key={id} className="todo_list_item-wrapper">
          {editId === id ? (
            <input value={taskItem} onChange={handleChange} />
          ) : (
            <h6>{description}</h6>
          )}
          <div>
            {editId === id ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={() => handleEdit(id, description)}>Edit</button>
            )}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
