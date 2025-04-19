import { ACTION_TYPE } from "../actions";
import { initialState, TaskAction } from "../providers";

const todoReducer = (state = initialState, action: TaskAction) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TASK:
      return { ...state, todoList: [...state.todoList, payload] };
    case ACTION_TYPE.DELETE_TASK:
      return {
        ...state,
        todoList: [...state.todoList.filter((item) => item.id !== payload.id)],
      };
    case ACTION_TYPE.UPDATE_TASK:
      const index = state.todoList.findIndex((item) => item.id === payload.id);
      state.todoList[index] = payload;
      return { ...state };
    default:
      return state;
  }
};

export { todoReducer };
