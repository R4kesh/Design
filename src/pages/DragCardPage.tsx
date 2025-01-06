// import React, { useState } from "react";
// import { MultiLevelSidebar } from "../components/DashBoard/Sidebar";
// import Navbar from "../components/DashBoard/Navbar";
// import Nav_Icons from "../components/DashBoard/Nav_Icons";
// import CardGrid from "../components/DashBoard/CardDrag";

// function DragCardPage() {
//   // State for sidebar expansion
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   // Toggle sidebar expansion
//   const toggleSidebarExpansion = () => setIsSidebarExpanded(!isSidebarExpanded);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div
//           className={`transition-all ease-in-out duration-300 bg-gray-800 text-white h-full sm:w-20 md:w-64 lg:w-64 ${
//             isSidebarExpanded ? "w-64" : "w-20"
//           } flex-shrink-0`}
//         >
//           <div className="bg-gray-800 text-white h-full">
//             {/* Sidebar Toggle Button for Small Screens */}
//             <div className="sm:hidden p-2 bg-blue-600 text-white">
//               <button onClick={toggleSidebarExpansion}>
//                 {isSidebarExpanded ? "Collapse" : "Expand"}
//               </button>
//             </div>

//             {/* MultiLevel Sidebar Content (Icons & Text) */}
//             <MultiLevelSidebar isExpanded={isSidebarExpanded} />
//           </div>
//         </div>
//         <div
//   className="md:flex flex-col justify-start  top-0 right-0 mt-6 mr-8 space-y-4 overflow-y-auto max-h-screen sm:max-h-12 sm:w-full md:max-h-16 md:w-full scroll-smooth "
// >
//   <Nav_Icons />
//           <CardGrid/>
// </div>

//         {/* Main Content Section */}
//         <div className=" p-4">
//           <div className="w-full mb-4">
//             <div className=" bg-gray-100 rounded-md shadow p-4">
          
//             </div>
//           </div>
//         </div>

//         {/* Nav_Icons positioned on the right side for large screens */}
   

//       </div>
//     </div>
//   );
// }

// export default DragCardPage;


import React, { useState } from "react";
import { MultiLevelSidebar } from "../components/DashBoard/Sidebar";
import Navbar from "../components/DashBoard/Navbar";
import Nav_Icons from "../components/DashBoard/Nav_Icons";
import CardGrid from "../components/DashBoard/CardDrag";

function DragCardPage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebarExpansion = () => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-all ease-in-out duration-300 bg-gray-800 text-white h-full sm:w-20 md:w-64 ${
            isSidebarExpanded ? "w-64" : "w-20"
          } flex-shrink-0`}
        >
          <div className="bg-gray-800 text-white h-full">
            <div className="sm:hidden p-2 bg-blue-600 text-white">
              <button onClick={toggleSidebarExpansion}>
                {isSidebarExpanded ? "Collapse" : "Expand"}
              </button>
            </div>
            <MultiLevelSidebar isExpanded={isSidebarExpanded} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Nav_Icons */}
          <div className="flex-shrink-0 bg-gray-100 p-4 shadow-md">
            <Nav_Icons />
          </div>

          {/* Scrollable Card Section */}
          <div className="flex flex-col overflow-y-auto p-6">
            <div className=" flex-col items-center gap-4">
              {/* Multiple Cards */}
              <CardGrid />
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragCardPage;
