import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Three-line menu icon
import logo from "../../assets/logo.png"; // Import your logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar (Hidden when menu is open) */}
      {!isOpen && (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-transparent z-50 transition-opacity duration-300">

          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="DharmaAwakening Camp" className="h-20 w-20" />
          </Link>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8 text-black text-xl">
            <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-300">About</Link></li>
            <li><Link to="/faq" className="hover:text-orange-300">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-orange-300">Contact Us</Link></li>
            <li><Link to="/camp-rules" className="hover:text-orange-300">Rules & Regulations</Link></li>
            
          </ul>

          {/* Apply Now Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link to="/apply" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Register for Camp
            </Link>
            <Link to="/apply-counselor" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Apply for Counselor
            </Link>
          </div>

          {/* Three-Line Menu Button (Mobile) */}
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      )}

      {/* Full-Screen Blur Background (Only when menu is open) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-50 flex">
          {/* Sidebar Menu */}
          <div 
            className="fixed top-0 left-0 h-full w-[70%] bg-transparent shadow-lg flex flex-col items-start p-6 transform transition-transform duration-500 ease-in-out translate-x-0"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the menu
          >
            {/* Logo in Sidebar */}
            <div className="w-full flex justify-between items-center mb-6">
              <img src={logo} alt="DharmaAwakening Camp" className="h-20 w-20" />
              <button 
                className="text-black text-3xl"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="w-full text-left space-y-6 text-xl">
              <li><Link to="/" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/faq" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>FAQ</Link></li>
              <li><Link to="/contact" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
              <li><Link to="/camp-rules" className="hover:text-orange-300">Rules & Regulations</Link></li>
            </ul>

            {/* Apply Now Buttons (Mobile) */}
            <Link to="/apply" className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full text-center">
              Register for Camp
            </Link>
            <Link to="/apply-counselor" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full text-center">
              Apply for Counselor
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
