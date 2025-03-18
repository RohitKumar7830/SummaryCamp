import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import contactImage from "../assets/dharma.jpg"; // Import local image

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main Content Wrapper */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={contactImage} 
                alt="Contact Us" 
                className="rounded-lg shadow-lg w-full md:w-4/5"
              />
            </div>

            {/* Right Side - Contact Details */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 p-6">
              <p className="text-lg font-medium">Email:</p>
              <a href="mailto:DharmAwakeningCamp@gmail.com" className="text-blue-600 hover:underline">
                DharmAwakeningCamp@gmail.com
              </a>

              <p className="text-lg font-medium mt-4">Phone:</p>
              <p className="text-gray-700">203.240.1322</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
