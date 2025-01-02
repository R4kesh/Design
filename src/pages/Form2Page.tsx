import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar4_2 from '../components/Sidebar4_2';
import Form2 from '../components/Form2';


const Form2Page = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      {/* Navbar at the top */}
      <header className="bg-white shadow-md p-4">
        <Navbar />
      </header>
      
      {/* Main content area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-76 bg-white shadow-md p-2">
          <Sidebar4_2 />
        </aside>

        {/* Main content */}
        <main className="flex-grow bg-gray-100 p-4">
          {/* Replace with your main content */}
          <Form2 />
          {/* <h1 className="text-center text-2xl text-gray-700">Main Content Area</h1> */}
        </main>
      </div>
    </div>
  );
};

export default Form2Page;
