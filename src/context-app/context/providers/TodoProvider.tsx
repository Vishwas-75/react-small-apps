import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { todoReducer } from "../reducers";

interface TodoItem {
  id: number;
  description: string;
}
interface TodoState {
  todoList: Array<TodoItem>;
}

interface TaskAction {
  type: string;
  payload: TodoItem;
}

interface ContextType {
  state: TodoState;
  dispatch: React.Dispatch<{ type: string; payload: TodoItem }>;
}
const initialState: TodoState = {
  todoList: [],
};

const contextValue = {
  state: initialState,
  dispatch: (payload: TaskAction) => {},
};

const TodoContext = createContext<ContextType>(contextValue);

const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export type {ContextType, TodoItem, TaskAction, TodoState}
export { useTodoContext, initialState };
export default TodoProvider;
