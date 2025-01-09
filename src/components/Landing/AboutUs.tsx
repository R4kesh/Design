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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.7 }}
        className="max-w-4xl mx-auto py-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VMRnFnT_VD0GgbB3DtXnMO9BzPCnXgNDIQ&s" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Dr. John Doe</h3>
            <p className="text-teal-600">Chief Medical Officer</p>
            <p className="text-gray-600 mt-2">Dr. John is an experienced physician who oversees all clinical operations and ensures top-quality care.</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=pEJ7PefqTUcR5hPhB3jLIvAUOzPA6FVPlw391Oxqnrw=" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-teal-600">Technology Director</p>
            <p className="text-gray-600 mt-2">Jane leads our tech team in developing cutting-edge solutions that make healthcare management efficient.</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="data:image/jpeg;base64,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" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-teal-600">Lead Developer</p>
            <p className="text-gray-600 mt-2">Emily is responsible for ensuring the hospital management system is reliable and secure, with smooth user experiences.</p>
          </div>
        </div>
      </motion.div>

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
