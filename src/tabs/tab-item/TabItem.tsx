import { PropsWithChildren } from "react";
import { useTabContext } from "../Tabs";

export interface TabItemProps extends PropsWithChildren {
  indexKey: string | number;
}

function TabItem(props: TabItemProps) {
  const { indexKey, children } = props;
  const { active } = useTabContext();

  if (active !== indexKey) return null;

  return <div className="tab-item">{children}</div>;
}

export default TabItem;
