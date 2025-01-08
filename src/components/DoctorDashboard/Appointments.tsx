// // Appointments.js
// import React from 'react';

// const Appointments = () => {
//   const appointments = [
//     { date: "05/30/2024 11:30AM CST", name: "Jude Bellingham", type: "Followup Visit", contact: "Televisit" },
//     { date: "06/04/2024 09:00AM CST", name: "Xabi Alonso", type: "Online Consultation", contact: "Televisit" },
//     { date: "05/30/2024 11:30AM CST", name: "Florian Writz", type: "Followup Visit", contact: "In-person" }
//   ];

//   return (
//     <div id="appointments" className="bg-white text-black shadow-lg rounded-lg p-6 mb-6">
//       <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Date & Time</th>
//             <th className="px-4 py-2">Patient Name</th>
//             <th className="px-4 py-2">Appointment Type</th>
//             <th className="px-4 py-2">Contact Type</th>
//             <th className="px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appt, index) => (
//             <tr key={index}>
//               <td className="px-4 py-2">{appt.date}</td>
//               <td className="px-4 py-2">{appt.name}</td>
//               <td className="px-4 py-2">{appt.type}</td>
//               <td className="px-4 py-2">{appt.contact}</td>
//               <td className="px-4 py-2"><button className="text-blue-500">Meet Patient</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Appointments;



import React from 'react';
import { MdNotifications, MdAccountCircle, MdExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Appointments = () => {
  const appointments = [
    { date: "05/30/2024 11:30AM CST", name: "Jude Bellingham", type: "Followup Visit", contact: "Televisit" },
    { date: "06/04/2024 09:00AM CST", name: "Xabi Alonso", type: "Online Consultation", contact: "Televisit" },
    { date: "05/30/2024 11:30AM CST", name: "Florian Writz", type: "Followup Visit", contact: "In-person" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f7fa] text-gray-800">

      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-[#273c75] text-white p-4">
        <ul className="mt-8 space-y-4">
          <li className="border-b border-gray-400 pb-2">
            <Link to="/doctor_Dashboard" className="text-lg text-gray-200 hover:text-yellow-400">Dashboard</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#appointments" className="text-lg text-gray-200 hover:text-yellow-400">Upcoming Appointments</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#manage" className="text-lg text-gray-200 hover:text-yellow-400">Manage Appointments</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#feedback" className="text-lg text-gray-200 hover:text-yellow-400">Manage Feedback</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#insurance" className="text-lg text-gray-200 hover:text-yellow-400">Manage Insurance</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#practice" className="text-lg text-gray-200 hover:text-yellow-400">Manage Practice Location</Link>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <Link to="#settings" className="text-lg text-gray-200 hover:text-yellow-400">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6 bg-[#273c75] text-gray-100 p-4 rounded-lg">
          <h1 className="text-3xl font-semibold">Doctor Dashboard</h1>
          {/* Right side options in Navbar */}
          <div className="flex space-x-6">
            <Link to="#notifications" className="flex items-center text-lg text-gray-200 hover:text-yellow-400">
              <MdNotifications className="h-5 w-5 mr-2" />
              Notifications
            </Link>
            <Link to="#profile" className="flex items-center text-lg text-gray-200 hover:text-yellow-400">
              <MdAccountCircle className="h-5 w-5 mr-2" />
              Profile
            </Link>
            <Link to="#logout" className="flex items-center text-lg text-gray-200 hover:text-yellow-400">
              <MdExitToApp className="h-5 w-5 mr-2" />
              Logout
            </Link>
          </div>
        </div>

        {/* Doctor Profile Section */}
        <div id="appointments" className="bg-white text-gray-800 shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Upcoming Appointments</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Patient Name</th>
                <th className="px-4 py-2">Appointment Type</th>
                <th className="px-4 py-2">Contact Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b border-gray-200">{appt.date}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{appt.name}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{appt.type}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{appt.contact}</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700">Meet Patient</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="bg-[#273c75] text-white text-center py-4 mt-8 rounded-lg">
          <p>&copy; 2025 MyCarePedia. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Appointments;


