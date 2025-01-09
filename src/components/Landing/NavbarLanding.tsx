

import React, { useState,useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function NavbarLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

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
  const toggleDropdowns = () => setIsDropdownOpens((prev) => !prev);

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
  <Link
    to="/pricing" // Replace with the appropriate route path
    className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
  >
    Pricing and Discounts
  </Link>
</li>

            {/* More Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdowns}
                className="flex items-center  text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                More
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
                className={`absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg ${isDropdownOpens ? "block" : "hidden"}`}
                style={{ width: "200px" }}
              >
                <ul className="py-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18"
                        />
                      </svg>
                      (800) 825-0224
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M16 10h.01M12 10h.01M9 15l3 3 3-3"
                        />
                      </svg>
                      Chat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7v10M12 3v14M8 7v10"
                        />
                      </svg>
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

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
