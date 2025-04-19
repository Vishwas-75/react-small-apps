import { PropsWithChildren } from "react";

function TabPanel(props: PropsWithChildren) {
  const { children } = props;

  return <div className="tab-panel">{children}</div>;
}

export default TabPanel;
