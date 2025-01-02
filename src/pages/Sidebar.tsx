import React from "react";
import BorderedTreeView from "../components/BorderedTreeView";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4">
      <BorderedTreeView />
    </div>
  );
};

export default Sidebar;
