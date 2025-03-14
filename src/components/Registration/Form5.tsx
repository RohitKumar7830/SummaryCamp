import React from "react";

const Form5 = () => {
  return (
    <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-lg">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-4">Medical Documentation Information</h2>
      
      {/* Instructions */}
      <p className="text-gray-600 mb-4">
        For all campers attending, the following medical documentation is required within 2 weeks of registration. Failure to do so might result in canceling the registration for the camp.
      </p>
      
      {/* Requirements List */}
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Photo copies of the applicable health insurance card (both sides).</li>
        <li>Camper’s most recent Immunization Record.</li>
        <li>Camper’s Covid-19 vaccination documentation.</li>
        <li>Signed statement from a physician confirming the camper is in good physical condition to participate in camp activities.</li>
      </ul>
      
      {/* Submission Instructions */}
      <p className="text-gray-700 font-semibold mb-2">Please submit the document:</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Email electronic copies to: <a href="mailto:dharmarawakeningcamp@gmail.com" className="text-blue-600 underline">dharmarawakeningcamp@gmail.com</a></li>
        <li>Mail paper copies to: Dharma Awakening LLC, 2 Long Ridge Court, Unionville CT - 06085</li>
      </ul>
      
      {/* Acknowledgment Checkbox */}
      <div className="flex items-center mt-4">
        <input type="checkbox" id="acknowledge" className="w-5 h-5 text-orange-500" />
        <label htmlFor="acknowledge" className="ml-2 text-gray-700">
          I have read the Medical Documentation Requirement and will provide the required documents.
        </label>
      </div>
    </div>
  );
};

export default Form5;