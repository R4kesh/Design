import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-gray-800"
      style={{
        backgroundImage:
          "url('https://blog.xoxoday.com/content/images/2023/07/Patient-Engagement.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            We’re here to make your healthcare experience seamless and
            stress-free. Reach out to us for support, inquiries, or suggestions.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* FAQs Section */}
        <div className="mt-20 bg-white bg-opacity-95 rounded-lg shadow-2xl p-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800">
                How secure is my data in this app?
              </h3>
              <p className="text-gray-700 mt-2">
                Your data is encrypted and stored securely, following strict
                industry standards to ensure your privacy.
              </p>
            </div>
            <div className="p-5 bg-blue-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800">
                Can I contact my doctor directly using this app?
              </h3>
              <p className="text-gray-700 mt-2">
                Yes, our app provides seamless communication with your doctor
                through secure messaging and teleconsultations.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 text-white animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
              <p className="text-gray-200">
                "This app is a game-changer for remote consultations. It’s
                fast, secure, and user-friendly."
              </p>
              <p className="font-semibold mt-4 text-blue-200">- Sarah L.</p>
            </div>
            <div className="bg-blue-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
              <p className="text-gray-200">
                "Managing patient records has never been easier. Highly
                recommend this platform."
              </p>
              <p className="font-semibold mt-4 text-blue-200">- Dr. Mark J.</p>
            </div>
            <div className="bg-blue-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
              <p className="text-gray-200">
                "The seamless integration of telemedicine and EHR is fantastic.
                A must-have for healthcare professionals!"
              </p>
              <p className="font-semibold mt-4 text-blue-200">- Emily T.</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 bg-blue-900 text-white py-12 text-center rounded-lg shadow-2xl animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Healthcare?
          </h2>
          <p className="text-lg mb-6">
            Start using our app today and experience the future of healthcare.
          </p>
         <Link to='/login'> <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-200 transition-transform transform hover:scale-105">
            Get Started Now
          </button></Link>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
