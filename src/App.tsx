import "./App.css";
import { Tabs } from "./tabs";
import { Carousel } from "./carousel-app";
import { Suspense } from "react";
import { Grid } from "./grid-app";
import { TodoList } from "./context-app";

const tabList = [
  {
    key: "Carousel-App",
    titel: "Carousel",
    Component: Carousel,
  },
  {
    key: "Grid-App",
    titel: "Grid",
    Component: Grid,
  },
  {
    key: "Todo-Context-App",
    titel: "Todo-Context",
    Component: TodoList,
  },
];

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Suspense fallback={"Loading ..."}>
          <Tabs defaultindex={tabList[0].key}>
            <Tabs.List>
              {tabList.map(({ key, titel }) => (
                <Tabs.Tab key={key} indexKey={key}>
                  {titel}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            <Tabs.Panel>
              {tabList.map(({ key, Component }) => (
                <Tabs.Item key={key} indexKey={key}>
                  <Component />
                </Tabs.Item>
              ))}
            </Tabs.Panel>
          </Tabs>
        </Suspense>
      </div>
    </>
  );
}

export default App;
