import { PropsWithChildren } from "react";
import { useTabContext } from "../Tabs";

export interface TabProps extends PropsWithChildren {
  indexKey: string | number;
}

function Tab(props: TabProps) {
  const { indexKey, children } = props;
  const { dispatch } = useTabContext();

  const handleTabChange = () => {
    dispatch(indexKey);
  };
  return (
    <div className="tab">
      <button onClick={handleTabChange}>{children}</button>
    </div>
  );
}

export default Tab;
