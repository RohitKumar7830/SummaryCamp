import React from "react";

const Form9: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      {/* Payment Gateway Placeholder */}
      <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg mb-6">
        <p className="text-gray-500">[Payment Gateway Integration Here]</p>
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form9;
