

import React, { useState,useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function NavbarLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Persist dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav
      className={`bg-white ${darkMode ? "dark:bg-gray-900" : ""} border-b shadow-md`}
    >
      <div className="max-w-screen-xl mx-auto  flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="text-3xl font-semibold dark:text-white text-gray-900">
          Management System
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-md font-semibold">
            <li>
             <Link to='/'> <a
                
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </a></Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Solutions
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg ${isDropdownOpen ? "block" : "hidden"}`}
              >
                <ul className="py-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Practice Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Electronic Health Record Drop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Revenue Cycle Management
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to='/aboutUs'><a
               
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                About Us
              </a></Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Request a Demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Pricing and Discounts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                 
                      Chat
                  
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                 
                      Contact Us
                  
              </a>
            </li>
            {/* More Dropdown */}
            
             
            
          </ul>
        </div>
        <Link to="/login">
          <button
            className="ml-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out"
          >
            Login
          </button>
        </Link>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 ml-4 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {/* {darkMode ? "🌙" : "☀️"} */}
          {darkMode ? (
              <FaMoon className="text-yellow-400" />
            ) : (
              <FaSun className="text-yellow-500" />
            )}
        </button>
      </div>
    </nav>
  );
}

export default NavbarLanding;
