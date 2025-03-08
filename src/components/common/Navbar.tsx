import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react"; // Three-dot menu icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold cursor-pointer">
        DharmaAwakening Camp
      </Link>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
        <li><Link to="/activities" className="hover:text-gray-600">Activities & Workshops</Link></li>
        {/* <li><Link to="/instructors" className="hover:text-gray-600">Instructors</Link></li> */}
        <li><Link to="/faq" className="hover:text-gray-600">FAQ</Link></li>
        <li><Link to="/contact" className="hover:text-gray-600">Contact Us</Link></li>
      </ul>

      {/* Apply Now Button (Desktop) */}
      <Link to="/apply" className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Apply Now
      </Link>

      {/* Three-Dot Menu Button (Mobile) */}
      <button 
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreVertical size={28} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 w-48 bg-white shadow-lg rounded-md flex flex-col items-center md:hidden">
          <ul className="w-full text-center">
            <li className="py-2 border-b"><Link to="/" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="py-2 border-b"><Link to="/about" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="py-2 border-b"><Link to="/activities" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>Activities & Workshops</Link></li>
            <li className="py-2 border-b"><Link to="/instructors" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>Instructors</Link></li>
            <li className="py-2 border-b"><Link to="/faq" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li className="py-2 border-b"><Link to="/contact" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
          <Link to="/apply" className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full text-center">
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
