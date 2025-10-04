import React, { createContext, useContext, useState } from "react";
import "./index.css";

const TabsContext = createContext<null | any>(null);

const Tabs = ({ children }) => {
  const [currentActive, setCurrentActive] = useState(1);
  return (
    <TabsContext.Provider value={{ currentActive, setCurrentActive }}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>
  );
};

const Tab = ({ title, value }) => {
  const { currentActive, setCurrentActive } = useContext(TabsContext);
  function handleTabChange() {
    setCurrentActive(value);
  }
  return (
    <div
      className={`tab ${currentActive === value ? "active" : ""}`}
      onClick={() => handleTabChange()}
    >
      {title}
    </div>
  );
};

const Headers = ({ children }) => {
  return <div className="tabs-header-container">{children}</div>;
};
const Panels = ({ children }) => {
  return <div className="tabs-panels-container">{children}</div>;
};
const Panel = ({ value, children }) => {
  const { currentActive } = useContext(TabsContext);
  if (value !== currentActive) return null;
  return <div>{children}</div>;
};

Tabs.Headers = Headers;
Tabs.Tab = Tab;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

export default Tabs;
