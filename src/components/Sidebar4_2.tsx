// import React, { useState } from 'react'

// function Sidebar4_2() {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
  
//     const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  
  
 
//       return (
//         <>
//         <div className='flex mt-12 '>
//           <button
//             onClick={toggleSidebar}
//             aria-controls="sidebar"
//             type="button"
//             className="inline-flex items-center p-2  ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           >
//             <span className="sr-only">Open sidebar</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 clipRule="evenodd"
//                 fillRule="evenodd"
//                 d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//               ></path>
//             </svg>
//           </button>
    
//           {/* Sidebar */}
//           <aside
//             id="sidebar"
//             className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
//               isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//             } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
//             aria-label="Sidebar"
//           >
//             <div className="h-full px-3 py-4 overflow-y-auto">
//               <ul className="space-y-2 font-medium">
//                 <li>
//                   <a
//                     href="#"
//                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <svg
//                       className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 21"
//                     >
//                       <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                       <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                     </svg>
//                     <span className="ms-3">Dashboard</span>
//                   </a>
//                 </li>
//                 <li>
//                   <button
//                     onClick={toggleDropdown}
//                     type="button"
//                     className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                   >
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 18 21"
//                     >
//                       <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                     </svg>
//                     <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
//                       E-commerce
//                     </span>
//                     <svg
//                       className="w-3 h-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>
//                   {isDropdownOpen && (
//                     <ul className="py-2 space-y-2">
//                       <li>
//                         <a
//                           href="#"
//                           className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                           Products
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                           Billing
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                           Invoice
//                         </a>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li>
//       <a
//         href="#"
//         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//       >
//         <svg
//           className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           {/* Kanban SVG */}
//           <path d="M3 3h4v10H3V3zm10 0h4v6h-4V3zm0 8h4v2h-4v-2zM3 15h4v2H3v-2zm10-4h4v2h-4v-2z" />
//         </svg>
//         <span className="ms-3">Kanban</span>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//       >
//         <svg
//           className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           {/* Product SVG */}
//           <path d="M10 2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2h4zm0 2H6v4h4V4zm2 8H6v4h6v-4zm2 0v4h4v-4h-4zm4-2h-4V6h4v4z" />
//         </svg>
//         <span className="ms-3">Product</span>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//       >
//         <svg
//           className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           {/* User SVG */}
//           <path d="M10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 18c0-3.316 2.684-6 6-6h4c3.316 0 6 2.684 6 6H2z" />
//         </svg>
//         <span className="ms-3">User</span>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//       >
//         <svg
//           className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           {/* User SVG */}
//           <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
//           </svg>
//         <span className="ms-3">Inbox</span>
//       </a>
//     </li>
    
//               </ul>
//             </div>
//           </aside>
//           </div>
//         </>
//       );
//     }
    
    
    


// export default Sidebar4_2
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar4_2 = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <span>In this article</span>
        <div className="card__container">
          <p className="element">Try it</p>
          <p className="element">Syntax</p>
          <p className="element ">Formal definition</p>
          <p className="element active" onClick={toggleSubMenu}>
            Formal syntax
          </p>
          {isSubMenuOpen && (
            <div className="sub-menu">
              <Link to='/form1'> <p className="sub-element">Form 1</p></Link>
              <Link to='/form2'> <p className="sub-element">Form 2</p></Link>
              <p className="sub-element">Sub-option 3</p>
            </div>
          )}
         <p className="element">Examples</p>
          <p className="element">See also</p>
          <p className="element">Try it</p>
          <p className="element">Syntax</p>
          <p className="element">Try it</p>
          <p className="element">Syntax</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 460px;
    border-radius: 15px;
    background: rgb(27, 26, 26);
    color: white;
    font-weight: 600;
    font-size: 1.2em;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -5px 5px 1px 0px #004d92;
  }

  .element {
    color: grey;
    font-size: .8em;
    padding: 6px 15px;
    border-left: 2px solid grey;
    cursor: pointer;
  }

  .active {
    background-color: #004d92;
    border-left: 2px solid #8cb4ff;
    color: azure;
  }

  .element:hover:not(.active) {
    color: #3775bb;
  }

  .sub-menu {
    padding-left: 20px;
    margin-top: 5px;
  }

  .sub-element {
    color: #8cb4ff;
    font-size: .75em;
    padding: 4px 10px;
    cursor: pointer;
  }

  .sub-element:hover {
    color: #004d92;
  }
`;

export default Sidebar4_2;
