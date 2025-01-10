import React from 'react';
import { motion } from 'framer-motion';
import NavbarLanding from './NavbarLanding';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "How to Improve Healthcare Efficiency",
      excerpt: "In this blog, we will discuss how you can optimize healthcare management through technology...",
      icon: "📈",
      imageUrl: "https://blogs.perficient.com/files/iStock-1961399015-600x400.jpg",
    },
    {
      title: "The Importance of Patient Data Security",
      excerpt: "Patient data security is critical in today’s digital healthcare landscape. Let’s explore how to protect sensitive data...",
      icon: "🔒",
      imageUrl: "https://tediselmedical.com/wp-content/uploads/2023/10/seguridad_datos_paciente_pic01_20231006_tedisel_medical.jpg",
    },
    {
      title: "How Automation Can Streamline Healthcare Operations",
      excerpt: "Automation in healthcare can improve patient outcomes and reduce administrative costs. Here’s how it works...",
      icon: "🤖",
      imageUrl: "https://plumlogix.com/wp-content/uploads/2021/11/search-engine-marketing-composition-900x410.jpg.webp",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <NavbarLanding />

      {/* Blog Header */}
      <motion.div
        className="text-center py-12 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-200">Our Blog</h1>
        <p className="mt-4 text-gray-400">Stay updated with the latest insights and trends in healthcare management.</p>
      </motion.div>

      {/* Blog Posts */}
      <div className="py-12 px-6 md:px-20 lg:px-40 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }} // Staggered animation
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">{post.icon} {post.title}</h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800">Read More</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Content Section */}
      <motion.div
        className="py-12 px-6 md:px-20 lg:px-40 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Healthcare Innovation: Shaping the Future</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Healthcare has seen significant transformations in recent years, with technological advancements playing a pivotal role. From improving efficiency to enhancing patient care, the industry is embracing new tools and solutions. In this post, we dive deeper into these innovations and their impact on the future of healthcare.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          One of the key factors driving these changes is the digitalization of healthcare processes. Electronic health records (EHR), telemedicine, and cloud-based technologies are transforming how healthcare providers deliver services to patients. These innovations not only enhance the quality of care but also reduce operational costs, enabling healthcare organizations to focus more on patient outcomes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Another area of improvement is the use of artificial intelligence (AI) and machine learning. AI-powered diagnostic tools and predictive analytics are helping doctors make more accurate diagnoses and treatment decisions. Moreover, AI is also streamlining administrative tasks, freeing up healthcare professionals to focus more on patient care.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The adoption of automation in healthcare is another trend that continues to gain momentum. With automated systems in place, healthcare organizations can optimize scheduling, reduce wait times, and enhance the patient experience. As technology continues to evolve, we can expect even more breakthroughs in healthcare that will make the industry more efficient, patient-centered, and sustainable.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} Patient & Doctor Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
