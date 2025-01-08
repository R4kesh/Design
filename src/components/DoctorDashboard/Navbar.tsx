// Navbar.js
import React from 'react';
import { MdNotifications, MdAccountCircle, MdExitToApp } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-6 bg-[#001a2d] text-gray-100 p-4">
      <h1 className="text-3xl font-semibold">Doctor Dashboard</h1>
      {/* Right side options in Navbar */}
      <div className="flex space-x-6">
        <a href="#notifications" className="flex items-center text-lg text-gray-200 hover:text-gray-400">
          <MdNotifications className="h-5 w-5 mr-2" />
          Notifications
        </a>
        <a href="#profile" className="flex items-center text-lg text-gray-200 hover:text-gray-400">
          <MdAccountCircle className="h-5 w-5 mr-2" />
          Profile
        </a>
        <a href="#logout" className="flex items-center text-lg text-gray-200 hover:text-gray-400">
          <MdExitToApp className="h-5 w-5 mr-2" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;
