import React from "react";

const newAddedTabs = (props) => {
  console.log(props.tabs);
  return (
    <div className="tabs">
      {props.tabs.map(tab => {
        return (
          <div key={tab.id} className="title-wrapper">
            <h3 className="title">{tab.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default newAddedTabs;
