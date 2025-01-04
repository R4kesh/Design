// import React, { useState } from "react";
// import { MultiLevelSidebar } from "../components/DashBoard/Sidebar";
// import Navbar from "../components/DashBoard/Navbar";
// import Nav_Icons from "../components/DashBoard/Nav_Icons";

// function Dashboard() {
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
//           }`}
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

//         {/* Main Content Section */}
//         <div className="flex-1 flex flex-col p-4">
//           <div className="w-full mb-4">
//             <Nav_Icons />
//           </div>
//           {/* Additional content can be added here */}
//           <div className="flex-1 bg-gray-100 rounded-md shadow p-4">
//             Main content goes here
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import React, { useState } from "react";
import { MultiLevelSidebar } from "../components/DashBoard/Sidebar";
import Navbar from "../components/DashBoard/Navbar";
import Nav_Icons from "../components/DashBoard/Nav_Icons";
import { SideCards } from "../components/DashBoard/SideCards";

function Dashboard() {
  // State for sidebar expansion
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Toggle sidebar expansion
  const toggleSidebarExpansion = () => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-all ease-in-out duration-300 bg-gray-800 text-white h-full sm:w-20 md:w-64 lg:w-64 ${
            isSidebarExpanded ? "w-64" : "w-20"
          } flex-shrink-0`}
        >
          <div className="bg-gray-800 text-white h-full">
            {/* Sidebar Toggle Button for Small Screens */}
            <div className="sm:hidden p-2 bg-blue-600 text-white">
              <button onClick={toggleSidebarExpansion}>
                {isSidebarExpanded ? "Collapse" : "Expand"}
              </button>
            </div>

            {/* MultiLevel Sidebar Content (Icons & Text) */}
            <MultiLevelSidebar isExpanded={isSidebarExpanded} />
          </div>
        </div>
        <div
  className="md:flex flex-col justify-start  top-0 right-0 mt-6 mr-8 space-y-4 overflow-y-auto max-h-screen sm:max-h-12 sm:w-full md:max-h-16 md:w-full scroll-smooth "
>
  <Nav_Icons />
</div>

        {/* Main Content Section */}
        <div className=" p-4">
          <div className="w-full mb-4">
            <div className=" bg-gray-100 rounded-md shadow p-4">
              Main content goes here
            </div>
          </div>
          <SideCards/>
        </div>

        {/* Nav_Icons positioned on the right side for large screens */}
   

      </div>
    </div>
  );
}

export default Dashboard;


// import React, { useState } from "react";
// import { MultiLevelSidebar } from "../components/DashBoard/Sidebar";
// import Navbar from "../components/DashBoard/Navbar";
// import Nav_Icons from "../components/DashBoard/Nav_Icons";

// function Dashboard() {
//   // State for sidebar expansion
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   // Toggle sidebar expansion
//   const toggleSidebarExpansion = () => setIsSidebarExpanded(!isSidebarExpanded);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex flex-1 relative">
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

//         {/* Nav_Icons positioned at the top right for md screens and above */}
//         <div
//           className="hidden md:flex flex-col justify-start fixed top-16 right-0 mt-4 mr-8 space-y-4 overflow-y-auto max-h-screen md:w-20 lg:w-24 scroll-smooth"
//         >
//           <Nav_Icons />
//         </div>

//         {/* Main Content Section */}
//         <div
//           className={`flex-1 flex flex-col p-4 ${
//             isSidebarExpanded ? "ml-20 sm:ml-20 md:ml-64 lg:ml-64" : "ml-20"
//           }`}
//           style={{ marginTop: "5rem" }} // Adjust margin to stay below Nav_Icons
//         >
//           <div className="w-full mb-4">
//             <div className="flex-1 bg-gray-100 rounded-md shadow p-4">
//               Main content goes here
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
