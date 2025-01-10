import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  // State to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passkey, setPasskey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !passkey) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');  // Reset error state before attempting submission

    try {
      // Send POST request to the backend using Axios
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/registration/login`,
        {
          email,
          password,
          passkey,
        }
      );

      // Handle response from the backend
      console.log('Login successful', response.data);
      navigate('/dashboard');
      // Optionally, handle redirect or success message here
      // Clear form data or redirect the user after successful login
    } catch (err) {
      // Check if the error is a response error from the backend
      if (err.response) {
        const { status, data } = err.response;

        // Handle different error codes and show relevant messages
        if (status === 404) {
          setError('User not found. Please check your email.');
        } else if (status === 401) {
          setError('Incorrect password or passkey.');
        } else if (status === 403) {
          setError('User is not verified or approved.');
        } else {
          setError(data.message || 'An unexpected error occurred. Please try again.');
        }
      } else {
        // Handle network errors or other unexpected errors
        setError('Network error. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      {/* Login Form */}
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Background Image Section */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
              >
                {/* Email Field */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Passkey Field */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="passkey"
                  >
                    Passkey
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="passkey"
                    type="password"
                    placeholder="Enter your passkey"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 text-center text-red-500">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Logging In...' : 'Login'}
                  </button>
                </div>

                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>

            {/* Background Image Section */}
            <div
              className="w-full h-auto hidden lg:block lg:w-12/6 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p className="text-sm">&copy; 2025 MyApp. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
