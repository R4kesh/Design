// CustomStyling.js
import React, { useState } from "react";
import { motion } from "framer-motion"; // Animation library
import { FaChevronDown, FaChevronRight, FaHome, FaUser } from "react-icons/fa"; // Icons
import { Link } from "react-router-dom";

const CustomStyling = () => {
  const [openMenus, setOpenMenus] = useState({});

  // Toggle menu based on item ID
  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-800 to-indigo-900 text-white h-screen w-full p-6 shadow-2xl border-r border-indigo-600 mt-4">
      <h2 className="text-2xl font-extrabold text-indigo-200 mb-8 flex items-center tracking-wider">
        <FaHome className="mr-3 text-indigo-300" /> My Sidebar
      </h2>
      <div className="space-y-6">
        {/* Main Item 1 */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-lg border border-transparent hover:border-indigo-500 hover:bg-indigo-800 transition-all duration-300"
            onClick={() => toggleMenu("main1")}
          >
            <div className="flex items-center">
              <FaUser className="mr-3 text-indigo-300" />
              <span className="text-lg font-medium tracking-wide">Main Item 1</span>
            </div>
            <motion.span
              className="text-indigo-300"
              initial={{ rotate: 0 }}
              animate={{ rotate: openMenus.main1 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openMenus.main1 ? <FaChevronDown /> : <FaChevronRight />}
            </motion.span>
          </div>
          {openMenus.main1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="ml-6 mt-2 space-y-3"
            >
              {/* Sub Item 1 */}
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer py-3 px-5 rounded-lg border border-transparent hover:border-purple-500 hover:bg-purple-700 transition-all duration-300"
                  onClick={() => toggleMenu("sub1")}
                >
                  <span className="font-medium">Sub Item 1</span>
                  <motion.span
                    className="text-purple-300"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openMenus.sub1 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openMenus.sub1 ? <FaChevronDown /> : <FaChevronRight />}
                  </motion.span>
                </div>
                {openMenus.sub1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="ml-6 mt-2 space-y-2"
                  >
                    <Link to={'/sidebar3'}>
                    <div className="py-3 px-5 rounded-lg bg-purple-600 hover:bg-purple-500 text-sm cursor-pointer shadow-sm transition-transform transform hover:scale-105">
                      Sub-Sub Item 1
                    </div>
                    </Link>
                    <Link to={'/sidebar2'}>
                    <div className="py-3 px-5 rounded-lg bg-purple-600 hover:bg-purple-500 text-sm cursor-pointer shadow-sm transition-transform transform hover:scale-105">
                      Sub-Sub Item 2
                    </div>
                    </Link>
                  </motion.div>
                )}
              </div>
              {/* Sub Item 2 */}
              <div className="py-3 px-5 rounded-lg border border-transparent hover:border-purple-500 hover:bg-purple-700 transition-all duration-300 cursor-pointer">
                Sub Item 2
              </div>
            </motion.div>
          )}
        </div>

        {/* Main Item 2 */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-lg border border-transparent hover:border-indigo-500 hover:bg-indigo-800 transition-all duration-300"
            onClick={() => toggleMenu("main2")}
          >
            <div className="flex items-center">
              <FaUser className="mr-3 text-indigo-300" />
              <span className="text-lg font-medium tracking-wide">Main Item 2</span>
            </div>
            <motion.span
              className="text-indigo-300"
              initial={{ rotate: 0 }}
              animate={{ rotate: openMenus.main2 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openMenus.main2 ? <FaChevronDown /> : <FaChevronRight />}
            </motion.span>
          </div>
          {openMenus.main2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="ml-6 mt-2 space-y-3"
            >
              <div className="py-3 px-5 rounded-lg border border-transparent hover:border-purple-500 hover:bg-purple-700 transition-all duration-300 cursor-pointer">
                Sub Item 1
              </div>
              <div className="py-3 px-5 rounded-lg border border-transparent hover:border-purple-500 hover:bg-purple-700 transition-all duration-300 cursor-pointer">
                Sub Item 2
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomStyling;
