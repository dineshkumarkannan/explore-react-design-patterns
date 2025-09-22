import React from "react";

const Tab = ({ tabs, onTabClick }) => {
  console.log(tabs);
  return (
    <div className="w-[100%] bg-gray-400 text-white">
      {tabs.length > 0 &&
        tabs.map((tab, idx) => {
          return (
            <button
              key={tab.title}
              className={`w-[content-fit] border-none py-[12px] px-[16px]  ${
                tab.active ? "bg-gray-500" : ""
              }`}
              onClick={() => onTabClick(idx)}
            >
              {tab.title}
            </button>
          );
        })}
    </div>
  );
};

export default Tab;
