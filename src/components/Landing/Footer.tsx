import React from 'react'

function Footer() {
  return (
    <div> <footer className="py-16 bg-gray-800 text-white">
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
  )
}

export default Footer