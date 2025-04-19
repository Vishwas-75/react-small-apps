import { Tab } from "./tab";
import { TabItem } from "./tab-item";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import Tabs from "./Tabs";

const ExportedTabs = Object.assign(Tabs, {
  Item:TabItem,
  List: TabList,
  Panel: TabPanel,
  Tab,
});

export { ExportedTabs as Tabs };
