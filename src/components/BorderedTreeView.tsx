import React, { useState } from "react";

// TreeItem Component
function TreeItem({ label, children, isExpanded, onToggle }: any) {
  return (
    <div className="flex flex-col border-y-zinc-500 shadow-sm">
      <div
        className="flex items-center cursor-pointer p-2 hover:bg-gray-200 focus:ring-4 rounded-md "
        
        onClick={onToggle}
      >
        {children && (
          <span className="mr-2">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.864.5l6 10A1 1 0 0116 15H4a1 1 0 01-.864-1.5l6-10A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V9z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        )}
        <span className="text-xl font-normal text-slate-700">{label}</span>
      </div>
      {isExpanded && <div className="ml-6 border-l border-gray-300">{children}</div>}
    </div>
  );
}

// Main TreeView Component
export default function aBorderedTreeView() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggle = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const isExpanded = (itemId: string) => expandedItems.includes(itemId);

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
      <TreeItem
        label="Main1"
        
        isExpanded={isExpanded("1")}
        onToggle={() => handleToggle("1")}
      >
        <TreeItem label="Level1" />
        <TreeItem
          label="Level1"
          isExpanded={isExpanded("3")}
          onToggle={() => handleToggle("3")}
        >
          <TreeItem label="Level2" />
          <TreeItem
            label="Level2"
            isExpanded={isExpanded("7")}
            onToggle={() => handleToggle("7")}
          >
            <TreeItem label="Level3 " />
            <TreeItem label="Level3" />
            <TreeItem label="Level3" />
          </TreeItem>
          <TreeItem label="Level2" />
        </TreeItem>
        <TreeItem label="Level1" />
        <TreeItem label="Level1" />
      </TreeItem>




      <TreeItem
        label="Main2"
        
        isExpanded={isExpanded("10")}
        onToggle={() => handleToggle("10")}
      >
        <TreeItem label="Hello" />
        <TreeItem
          label="Subtree with children"
          isExpanded={isExpanded("30")}
          onToggle={() => handleToggle("30")}
        >
          <TreeItem label="Hello" />
          <TreeItem
            label="Sub-subtree with children"
            isExpanded={isExpanded("70")}
            onToggle={() => handleToggle("7")}
          >
            <TreeItem label="Child 1" />
            <TreeItem label="Child 2" />
            <TreeItem label="Child 3" />
          </TreeItem>
          <TreeItem label="Hello" />
        </TreeItem>
        <TreeItem label="World" />
        <TreeItem label="Something something" />
      </TreeItem>
    </div>
  );
}
