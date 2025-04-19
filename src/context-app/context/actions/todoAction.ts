import { TodoItem } from "../providers";

const ACTION_TYPE = {
  ADD_TASK: "add/task",
  EDIT_TASK: "edit/task",
  UPDATE_TASK: "update/task",
  DELETE_TASK: "delete/task",
};

const addTask = (payload: TodoItem) => {
  return { type: ACTION_TYPE.ADD_TASK, payload: payload };
};

const editTask = (payload: TodoItem) => {
  return { type: ACTION_TYPE.EDIT_TASK, payload: payload };
};

const updateTask = (payload: TodoItem) => {
  return { type: ACTION_TYPE.UPDATE_TASK, payload: payload };
};

const deleteTask = (payload: TodoItem) => {
  return { type: ACTION_TYPE.DELETE_TASK, payload: payload };
};

export { addTask, deleteTask, editTask, updateTask, ACTION_TYPE };
