import { PropsWithChildren } from "react";

function TabList(props: PropsWithChildren) {
  const { children } = props;
  return <div className="tab-list">{children}</div>;
}

export default TabList;
