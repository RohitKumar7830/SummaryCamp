import React from "react";

// Form2: Emergency Contact Information
const Form2: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Parents / Emergency Contact Information</h2>

      <div className="grid grid-cols-1 gap-4">
        <input type="text" placeholder="Parent 1 - Full Name" className="border p-4 rounded-lg w-full text-lg" />
        <input type="tel" placeholder="Parent 1 - Contact Information (Phone)" className="border p-4 rounded-lg w-full text-lg" />
        <input type="email" placeholder="Parent 1 - Email Address" className="border p-4 rounded-lg w-full text-lg" />
        <input type="text" placeholder="Father's Full Name" className="border p-4 rounded-lg w-full text-lg" />
        <input type="tel" placeholder="Parent 2 - Contact Information (Phone)" className="border p-4 rounded-lg w-full text-lg" />
        <input type="email" placeholder="Parent 2 - Email Address" className="border p-4 rounded-lg w-full text-lg" />
        <input type="text" placeholder="Parent's Residential Address" className="border p-4 rounded-lg w-full text-lg" />
        <input type="text" placeholder="Emergency Contact Person (Full Name)" className="border p-4 rounded-lg w-full text-lg" />
        <input type="tel" placeholder="Emergency Contact Phone Number" className="border p-4 rounded-lg w-full text-lg" />
        <input type="email" placeholder="Emergency Contact Email Address" className="border p-4 rounded-lg w-full text-lg" />
      </div>
    </div>
  );
};

export default Form2;
