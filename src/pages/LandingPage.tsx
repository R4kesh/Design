// import React from 'react'
// import NavbarLanding from '../components/Landing/NavbarLanding'

// function LandingPage() {
//   return (
//     <div>
//         <NavbarLanding/>
//     </div>
//   )
// }

// export default LandingPage


// "use client";
// import React, { useEffect, useState } from "react";
// import NavbarLanding from "../components/Landing/NavbarLanding";

// function LandingPage() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="font-sans bg-gray-100 text-gray-800">
//       <NavbarLanding />

//       {/* Hero Section */}
//       <section className="relative py-24 bg-gradient-to-r from-blue-700 to-teal-600 text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://path/to/your/image.jpg')",
//             transform: `translateY(${scrollY * 0.3}px)`,
//           }}
//         ></div>
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
//             Empowering Healthcare with Technology
//           </h1>
//           <p className="text-lg sm:text-xl mb-8">
//             Manage patient records, appointments, and doctor communications in one secure platform.
//           </p>
//           <a
//             href="#features"
//             className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg transition-all hover:bg-teal-700 transform hover:scale-105"
//           >
//             Explore Features
//           </a>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-16 bg-white text-gray-700">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
//           <p className="text-lg leading-relaxed mb-8">
//             We're dedicated to improving healthcare management through cutting-edge technology. Our platform enables seamless communication and efficient record management for both doctors and patients.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-12">Key Features</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://www.shutterstock.com/image-photo/vertical-shot-young-happy-cheerful-600nw-2033522243.jpg" alt="Feature 1" className="w-60 h-60 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
//               <p className="text-gray-600">Schedule, reschedule, and cancel appointments with ease, with automated reminders.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2TWIIpUrQD48Gh4i7QxBnSzaWAdlzOtqLjwREWu4cplmgv2W6s1u3F3p3CzBEIjIqbk&usqp=CAU" alt="Feature 2" className="w-60 h-60 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Patient Records</h3>
//               <p className="text-gray-600">Easily access and manage patient data with secure storage and retrieval of medical histories.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCcueR6txkl0psFvd86sdQyDpBQSyH8YMJQ&s" alt="Feature 3" className="w-60 h-60 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Real-Time Communication</h3>
//               <p className="text-gray-600">Enable instant messaging between doctors and patients, fostering quick communication.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Doctor Details Section */}
//       <section id="doctors" className="py-16 bg-teal-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-12">Our Expert Doctors</h2>
//           <div className="flex justify-center gap-12 flex-wrap">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Dr. Jane Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
//               <p className="text-gray-600">Cardiologist</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg" alt="Dr. John Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Dr. John Smith</h3>
//               <p className="text-gray-600">Pediatrician</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <img src="https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" alt="Dr. Alice Brown" className="w-32 h-32 rounded-full mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Dr. Alice Brown</h3>
//               <p className="text-gray-600">Neurologist</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-12">What Our Clients Say</h2>
//           <div className="space-y-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <p className="text-lg text-gray-600 mb-4">"This platform has revolutionized the way we manage patient information. Highly intuitive and user-friendly!"</p>
//               <p className="font-semibold text-gray-800">Dr. John Doe</p>
//               <p className="text-gray-500">Cardiologist</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
//               <p className="text-lg text-gray-600 mb-4">"The system's appointment scheduling feature is a game-changer! It saves so much time." </p>
//               <p className="font-semibold text-gray-800">Nurse Mary Jane</p>
//               <p className="text-gray-500">Head Nurse</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
//           <form className="max-w-lg mx-auto">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//               />
//             </div>
//             <div className="mb-4">
//               <textarea
//                 placeholder="Your Message"
//                 rows="4"
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="py-8 bg-gray-800 text-white text-center">
//         <p>&copy; 2025 Hospital Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;



import React, { useEffect, useState } from "react";
import NavbarLanding from "../components/Landing/NavbarLanding";
import { motion } from "framer-motion";

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans  text-gray-800 bg-white  ">
    {/* Navbar Section */}
    <NavbarLanding />
  {/* <div className="w-full h-auto mt-28 bg-white">
  <section className="relative py-24 sm:py-36 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-semibold leading-tight mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Seamless Healthcare Management
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our platform simplifies the complexities of managing healthcare data. Easily manage appointments, patient records, and doctor communications—all in one place.
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="#features"
              className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg transition-all hover:bg-teal-700 transform hover:scale-105"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-teal-600 text-teal-600 py-3 px-8 rounded-full text-lg transition-all hover:bg-teal-600 hover:text-white transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
  </div> */}
    {/* Hero Section */}
    <section className="relative py-36   from-blue-700 to-teal-600 text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://acsonnet.com/wp-content/uploads/2021/05/hospital-management.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Empowering Healthcare with Technology
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Manage patient records, appointments, and doctor communications in one secure platform.
        </motion.p>
        <a
          href="#features"
          className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg transition-all hover:bg-teal-700 transform hover:scale-105"
        >
          Explore Features
        </a>
      </div>
    </section>
  
  
  

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white text-gray-700">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 mb-6"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg  leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We're dedicated to improving healthcare management through cutting-edge technology. Our platform enables seamless communication and efficient record management for both doctors and patients.
          </motion.p>
        </div>
      </section>

   

      <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
         
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNey4WHC6J_KmPQgpNq6YEK9AjbdGSjUreA&s"
                alt="Feature 1"
                className="w-full h-80 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">
              Schedule, reschedule, and cancel appointments with ease, with automated reminders.
            </p>
          </motion.div>

         
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="https://www.nirogya.com/assets/front/img/service/Mask_group_(1).png"
                alt="Feature 2"
                className="w-full h-80 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
            <p className="text-gray-600">
              Keep track of vital statistics and health metrics with real-time updates.
            </p>
          </motion.div>

         
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmU2D2XWksZ7oN5E_gAgxJ2AEMboCel9zftQ&s"
                alt="Feature 3"
                className="w-full h-80 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Virtual Consultations</h3>
            <p className="text-gray-600">
              Have remote consultations with doctors anytime, anywhere, using our video conferencing feature.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    
    <section id="features" className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content: Text */}
      <div>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Enhance Your Healthcare Experience
        </h2>
        <p className="text-gray-600 mb-4 text-lg">
          Our platform bridges the gap between patients and doctors, offering seamless virtual communication and practice management solutions.
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="mr-4 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6m5 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <div>
              <h4 className="text-lg font-semibold">Virtual Communication</h4>
              <p>
                Enable secure video calls, messaging, and real-time updates between doctors and patients for better healthcare outcomes.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4m16 0l-7-7m7 7l-7 7"
                />
              </svg>
            </span>
            <div>
              <h4 className="text-lg font-semibold">Practice Management</h4>
              <p>
                Simplify clinic operations with automated scheduling, patient record management, and billing integration.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Content: Image */}
      <div>
        <img
          src="https://shashwatco.com/wp-content/themes/shashwat/assets/img/Healthcare-Software-Mobile-and-Web-Application-Development.jpg"
          alt="Virtual Communication"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>



      {/* Footer Section */}
      <footer className="py-16 bg-gray-800 text-white">
  <div className="container mx-auto px-6">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
      {/* Column 1: About */}
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-gray-400 text-sm">
          We provide innovative solutions for healthcare management with cutting-edge technology, making the medical experience more efficient and accessible.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-teal-500">About Us</a></li>
          <li><a href="#features" className="hover:text-teal-500">Features</a></li>
          <li><a href="#contact" className="hover:text-teal-500">Contact</a></li>
          <li><a href="#faq" className="hover:text-teal-500">FAQ</a></li>
        </ul>
      </div>

      {/* Column 3: Contact Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400 text-sm mb-2">123 Healthcare St., Suite 100</p>
        <p className="text-gray-400 text-sm mb-2">City, State, ZIP</p>
        <p className="text-gray-400 text-sm mb-2">Email: support@healthcare.com</p>
        <p className="text-gray-400 text-sm">Phone: +1 (800) 123-4567</p>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="mt-8 text-center">
      <a href="#" className="inline-block mx-4 text-gray-400 hover:text-teal-500">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="inline-block mx-4 text-gray-400 hover:text-teal-500">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="inline-block mx-4 text-gray-400 hover:text-teal-500">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#" className="inline-block mx-4 text-gray-400 hover:text-teal-500">
        <i className="fab fa-instagram"></i>
      </a>
    </div>

    {/* Copyright */}
    <div className="mt-8 text-center text-sm text-gray-400">
      <p>&copy; 2025 Hospital Management System. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default LandingPage;
