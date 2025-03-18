import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f8f6] text-[#000] py-6 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-2">
        <span 
  className="text-xl font-bold cursor-pointer" 
  onClick={() => window.location.href = "/"}
>
  DharmaAwakening Camp
</span>

        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 flex space-x-6 text-sm">
          <a href="/" className="hover:text-[#c8b6a6] transition">Home</a>
          <a href="/about" className="hover:text-[#c8b6a6] transition">About</a>
          <a href="/faq" className="hover:text-[#c8b6a6] transition">FAQ</a>
          <a href="/contact" className="hover:text-[#c8b6a6] transition">Contact</a>
        </nav>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-sm">&copy; {new Date().getFullYear()} Summer Camp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
