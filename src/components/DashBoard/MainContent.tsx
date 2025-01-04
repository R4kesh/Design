import React from "react";
import Form1 from "../Forms/Form1";

const MainContent = ({ activeComponent }) => {
  const renderContent = () => {
    switch (activeComponent) {
      case "Patient":
        return <div>Patient Component Content</div>;
      case "CareTeam":
        return <div>Care Team Component Content</div>;

        case "Analytics":
            return <div><Form1/></div>;
      case "default":
        return <div>Welcome! Please select an option from the sidebar.</div>;

       

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="bg-gray-100 rounded-md shadow p-4">
      {renderContent()}
    </div>
  );
};

export default MainContent;
