import React from "react";

const Form8: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Refund Policy</h2>

      {/* Refund Policy Details */}
      <p className="text-gray-700 mb-4">
        Full paid amount minus <strong>$75</strong> for each attendee will be refunded if Camp Management is notified by phone or email at least <strong>5 weeks</strong> prior to the start of Camp.
      </p>
      <p className="text-gray-700 mb-4">
        Full paid amount minus <strong>$150</strong> for each attendee will be refunded if Camp Registrar is notified by phone or email between <strong>5 and 4 weeks</strong> prior to the start of Camp.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>No refund</strong> will be given for any attendee who does not attend Camp or if Camp Registrar is notified by phone or email within <strong>4 weeks</strong> of the start of Camp.
      </p>

      {/* Agreement Checkbox */}
      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-500" />
          <span className="text-gray-700">
            I have read and understand the refund policy.
          </span>
        </label>
      </div>
    </div>
  );
};

export default Form8;
