import React from 'react';
import { motion } from 'framer-motion';
import NavbarLanding from './NavbarLanding';
import Footer from './Footer';

function AboutUs() {
  return (
    <>
        <NavbarLanding/>
    <div className="relative">
      {/* Full Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D')" }}>
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-white py-20 px-6 sm:py-32 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About Us</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed mb-8"
          >
            We are a cutting-edge hospital management system that revolutionizes healthcare with technology. Our mission is to provide efficient solutions to manage hospital operations seamlessly. We are committed to enhancing the patient and staff experience, making healthcare more accessible and streamlined.
          </motion.p>

          {/* Our Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            className="bg-white text-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg">
              Our hospital management system is designed to bring efficiency, transparency, and accessibility to healthcare. Through automation and smart integration, we reduce operational complexities and improve care delivery.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="bg-teal-600 text-white p-8 rounded-lg shadow-lg mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Efficiency:</span> Streamlining processes to save time and reduce errors.</li>
              <li><span className="font-medium">Transparency:</span> Providing clear visibility and real-time updates.</li>
              <li><span className="font-medium">Security:</span> Ensuring the safety of patient data with robust encryption.</li>
              <li><span className="font-medium">Innovation:</span> Continuously evolving with new technologies to enhance healthcare services.</li>
            </ul>
          </motion.div>
         

      {/* Team Section */}
     

      {/* Technology Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        className="max-w-4xl mx-auto py-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Our Technology</h2>
        <p className="text-lg text-center mb-8">We leverage state-of-the-art technology to ensure smooth operations and secure data management. Some of the key technologies include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Cloud-Based Systems:</span> Scalable and accessible solutions to manage operations in real-time.</li>
          <li><span className="font-medium">AI-Powered Analytics:</span> Helping healthcare providers make informed decisions with data-driven insights.</li>
          <li><span className="font-medium">End-to-End Encryption:</span> Protecting sensitive patient data with the highest level of security.</li>
          <li><span className="font-medium">Mobile Accessibility:</span> Easy access through mobile apps for patients and staff alike.</li>
        </ul>
      </motion.div>
      {/* Testimonials Section */}
     

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg hover:bg-teal-700 transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
