// ProfileSection.js
import React from 'react';

const ProfileSection = () => {
  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Doctor Profile</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://minhajm12.github.io/mycarepedia/assets/img/dashboard/doctors/doctor-profile.jpg"
          alt="Doctor Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <p className="text-lg">Dr. Richard Irwin Marks</p>
          <p className="text-sm text-gray-500">General Medicine</p>
        </div>
      </div>
      <div>
        <p><strong>Email:</strong> richard@gmail.com</p>
        <p><strong>Mobile Number:</strong> 1-972-333-9282</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Qualifications:</strong> MBBS, MD</p>
        <p><strong>Website:</strong> <a href="http://www.richardirwin.com" className="text-blue-500">www.richardirwin.com</a></p>
        <p><strong>Address:</strong> 211 Clement St., Suite 232, Dallas, TX, USA</p>
      </div>
    </div>
  );
};

export default ProfileSection;
