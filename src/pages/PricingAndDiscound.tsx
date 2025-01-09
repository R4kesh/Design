import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarLanding from '../components/Landing/NavbarLanding';

// Define types for the pricing and feature data
interface PricingData {
  header: {
    title: string;
    subtitle: string;
  };
  soloPlan: {
    title: string;
    description: string;
    features: string[];
  };
  teamPlan: {
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
  };
}

interface Feature {
  title: string;
  description: string;
}

interface FeaturesData {
  title: string;
  features: Feature[];
}

const PricingAndDiscount: React.FC = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [featuresData, setFeaturesData] = useState<FeaturesData | null>(null);

  // Fetch data from a JSON file using Axios
  useEffect(() => {
    // Replace with the correct path to your JSON file
    const fetchData = async () => {
      try {
        const response = await axios.get('/pricingContent.json'); // Adjust path as necessary
        const { pricing, features } = response.data;

        setPricingData(pricing);
        setFeaturesData(features);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  if (!pricingData || !featuresData) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <NavbarLanding />
  
      {/* Header */}
      <div className="text-center py-12 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        
        <h1 className="text-4xl font-bold text-gray-200">Pay Once, Use Forever</h1>
          <p className="mt-4 text-gray-400">No subscriptions, just a one-time payment to access our patient and doctor management system with free updates for life.</p>
      </div>
  
      {/* Pricing Cards */}
      <div className="py-12 px-6 md:px-20 lg:px-40 grid gap-8 md:grid-cols-2">
        {/* Solo Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">{pricingData.soloPlan.title}</h2>
          <p className="mt-4 text-gray-600">{pricingData.soloPlan.description}</p>
          <ul className="mt-6 space-y-2 text-gray-600">
            {pricingData.soloPlan.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
  
        {/* Team Plan */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700 hover:shadow-xl transition duration-300 text-white">
          <h2 className="text-2xl font-bold mb-4">{pricingData.teamPlan.title}</h2>
          <p className="text-gray-300 mb-6">{pricingData.teamPlan.description}</p>
          <div className="text-4xl font-bold mb-4">{pricingData.teamPlan.price}</div>
          <ul className="space-y-3 mb-6">
            {pricingData.teamPlan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            {pricingData.teamPlan.buttonText}
          </button>
        </div>
      </div>
  
      {/* Features Section */}
      <div className="py-12 px-6 md:px-20 lg:px-40 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{featuresData.title}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {featuresData.features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-blue-500 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  
      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} Patient & Doctor Management System. All rights reserved.</p>
      </footer>
    </div>
  );
  
};

export default PricingAndDiscount;





