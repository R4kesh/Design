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
            className="text-lg leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We're dedicated to improving healthcare management through cutting-edge technology. Our platform enables seamless communication and efficient record management for both doctors and patients.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}

      <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="https://www.shutterstock.com/image-photo/vertical-shot-young-happy-cheerful-600nw-2033522243.jpg"
                alt="Feature 1"
                className="w-full h-60 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">
              Schedule, reschedule, and cancel appointments with ease, with automated reminders.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="data:image/jpeg;base64,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"
                alt="Feature 2"
                className="w-full h-60 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
            <p className="text-gray-600">
              Keep track of vital statistics and health metrics with real-time updates.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <img
                src="https://www.pngitem.com/pimgs/m/455-4554869_doctor-with-stethoscope-png-png-download-doctor-images.png"
                alt="Feature 3"
                className="w-full h-60 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Virtual Consultations</h3>
            <p className="text-gray-600">
              Have remote consultations with doctors anytime, anywhere, using our video conferencing feature.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    

      {/* Add more Sections with Images */}
      
<section id="doctors" className="py-16 bg-teal-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-12">Our Expert Doctors</h2>
    <div className="flex justify-center gap-12 flex-wrap">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
          alt="Dr. Jane Doe"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
        <p className="text-gray-600">Cardiologist</p>
      </motion.div>
      
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
          alt="Dr. John Smith"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Dr. John Smith</h3>
        <p className="text-gray-600">Pediatrician</p>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src="https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg"
          alt="Dr. Alice Brown"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Dr. Alice Brown</h3>
        <p className="text-gray-600">Neurologist</p>
      </motion.div>
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
