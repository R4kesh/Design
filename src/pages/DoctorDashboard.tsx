import React from 'react';
import { MdNotifications, MdAccountCircle, MdExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
  const appointments = [
    { date: "05/30/2024 11:30AM CST", name: "Jude Bellingham", type: "Followup Visit", contact: "Televisit" },
    { date: "06/04/2024 09:00AM CST", name: "Xabi Alonso", type: "Online Consultation", contact: "Televisit" },
    { date: "05/30/2024 11:30AM CST", name: "Florian Writz", type: "Followup Visit", contact: "In-person" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">

      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-gray-900 p-6 border-r border-gray-700">
        <ul className="mt-10 space-y-8">
          {[
            { label: "Dashboard", path: "/doctor_Dashboard" },
            { label: "Upcoming Appointments", path: "/appointments" },
            { label: "Manage Appointments", path: "#manage" },
            { label: "Manage Feedback", path: "#feedback" },
            { label: "Manage Insurance", path: "#insurance" },
            { label: "Manage Practice Location", path: "#practice" },
            { label: "Settings", path: "#settings" },
          ].map((item, index) => (
            <li key={index} className="group">
              <Link
                to={item.path}
                className="block text-lg text-gray-200 hover:text-teal-400 transition-all ease-in-out duration-300 pb-1 border-b-2 border-transparent group-hover:border-teal-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8 bg-gray-800 text-gray-100 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
          {/* Right side options in Navbar */}
          <div className="flex space-x-8">
            <Link to="#notifications" className="flex items-center text-lg text-gray-200 hover:text-teal-400">
              <MdNotifications className="h-6 w-6 mr-2" />
              Notifications
            </Link>
            <Link to="#profile" className="flex items-center text-lg text-gray-200 hover:text-teal-400">
              <MdAccountCircle className="h-6 w-6 mr-2" />
              Profile
            </Link>
            <Link to="#logout" className="flex items-center text-lg text-gray-200 hover:text-red-500">
              <MdExitToApp className="h-6 w-6 mr-2" />
              Logout
            </Link>
          </div>
        </div>

        {/* Doctor Profile Section */}
        <div className="bg-white text-gray-800 shadow-lg rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-gray-300">Doctor Profile</h2>
          <div className="flex items-center mb-6">
            <img
              src="https://minhajm12.github.io/mycarepedia/assets/img/dashboard/doctors/doctor-profile.jpg"
              alt="Doctor Profile"
              className="w-28 h-28 rounded-full mr-6 border-4 border-teal-500"
            />
            <div>
              <p className="text-xl font-semibold">Dr. Richard Irwin Marks</p>
              <p className="text-sm text-gray-500">General Medicine</p>
            </div>
          </div>
          <div className="space-y-3">
            <p><strong>Email:</strong> richard@gmail.com</p>
            <p><strong>Mobile Number:</strong> 1-972-333-9282</p>
            <p><strong>Status:</strong> <span className="text-green-500">Active</span></p>
            <p><strong>Qualifications:</strong> MBBS, MD</p>
            <p><strong>Website:</strong> <a href="http://www.richardirwin.com" className="text-teal-500 hover:underline">www.richardirwin.com</a></p>
            <p><strong>Address:</strong> 211 Clement St., Suite 232, Dallas, TX, USA</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-4 rounded-lg">
          <p>&copy; 2024 MyCarePedia. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DoctorDashboard;


// import Sidebar from '../components/DoctorDashboard/Sidebar';
// import Navbar from '../components/DoctorDashboard/Navbar';
// import ProfileSection from '../components/DoctorDashboard/ProfileSection';
// import Appointments from '../components/DoctorDashboard/Appointments';


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';  // Don't need Router here
// import Sidebar from '../components/DoctorDashboard/Sidebar';
// import Navbar from '../components/DoctorDashboard/Navbar';
// import ProfileSection from '../components/DoctorDashboard/ProfileSection';
// import Appointments from '../components/DoctorDashboard/Appointments';

// const DoctorDashboard = () => {
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-slate-500 text-white">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-y-auto">
//         <Navbar />
//         <Routes>
//           <Route path="/dashboards" element={<ProfileSection />} />
//           <Route path="/appointments" element={<Appointments />} />
//           {/* Add other routes here */}
//         </Routes>
//         <footer className="bg-[#001a2d] text-white text-center py-4 mt-8">
//           <p>&copy; 2024 MyCarePedia. All Rights Reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;



