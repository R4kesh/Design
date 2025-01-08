import React from "react";
import Form1 from "../Forms/Form1";
import Form2 from "../Forms/Form2";
import Form3 from "../Forms/Form3";
import CardGrid from "./CardDrag";
import FormBuilder from "./FormBuilder";
import AnswerFormPage from "./AnswerForm";

const MainContent = ({ activeComponent }) => {
  const renderContent = () => {
    switch (activeComponent) {
      case "Patient":
        return <div>Patient Component Content</div>;
      case "CareTeam":
        return <div>Care Team Component Content</div>;

        case "Analytics":
            return <div><Form1/></div>;

            case "Reporting":
            return <div><Form2/></div>;

            case "Projects":
              return <div><Form3/></div>;
              case "Result":
                return <div><CardGrid/></div>
               
                  case "Current Status":
                  return <div><FormBuilder/></div>
                  case "Medicine":
                  return <div><AnswerFormPage/></div>
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
