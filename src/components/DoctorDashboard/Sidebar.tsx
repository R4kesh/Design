// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/5 bg-[#001a2d] p-4">
      <ul className="mt-8 space-y-4">
        <li><Link to="/dashboards" className="text-lg text-gray-200 hover:text-gray-400">Dashboard</Link></li>
        <li><Link to="/appointments" className="text-lg text-gray-200 hover:text-gray-400">Upcoming Appointments</Link></li>
        <li><Link to="/manage" className="text-lg text-gray-200 hover:text-gray-400">Manage Appointments</Link></li>
        <li><Link to="/feedback" className="text-lg text-gray-200 hover:text-gray-400">Manage Feedback</Link></li>
        <li><Link to="/insurance" className="text-lg text-gray-200 hover:text-gray-400">Manage Insurance</Link></li>
        <li><Link to="/practice" className="text-lg text-gray-200 hover:text-gray-400">Manage Practice Location</Link></li>
        <li><Link to="/settings" className="text-lg text-gray-200 hover:text-gray-400">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
