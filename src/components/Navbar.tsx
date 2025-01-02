import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="text-2xl font-bold tracking-wider">
            MyBrand
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            )
          )}
          <motion.a
            href="#"
            className="bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            whileHover={{ scale: 1.1 }}
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-indigo-800 text-white py-4"
        >
          <ul className="space-y-4 px-4">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-medium hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="block bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Login
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
