import { createContext, useCallback, useContext, useState } from "react";
import { TabContextStore, TabsProps } from "./type";
import "./index.css";

const intialStore = {
  active: 0,
  dispatch: (_arg: any) => {},
};
const TabContext = createContext<TabContextStore<any>>(intialStore);

function Tabs<T>(props: TabsProps<T>) {
  const { children, defaultindex, orientation = "horizontal" } = props;
  const [active, setActive] = useState<T>(defaultindex);

  const dispatch = useCallback(
    (newActive: T) => {
      setActive(newActive);
    },
    [active]
  );

  const contextValue = { active, dispatch } as TabContextStore<T>;

  return (
    <TabContext.Provider value={contextValue}>
      <div className={`tabs tabs--${orientation}`}>{children}</div>
    </TabContext.Provider>
  );
}

export const useTabContext = () => useContext(TabContext);

export default Tabs;
