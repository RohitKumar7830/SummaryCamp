import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";
import Form8 from "./Form8";
import Form9 from "./Form9";
import Form10 from "./Form10";

const steps = [
  "Camper's Personal Information",
  "Camper's Health Information",
  "Parents / Emergency Contact Information",
  "Medical Information",
  "Covid-19 Information",
  "Medical Documentation Information",
  "Medical Acknowledgement",
  "Attendance Acknowledgement",
  "Refund Policy",
  "Payment",
  "Acknowledgement by Parent",
];

// Define type for formData
type FormDataType = {
  [key: string]: { [key: string]: string | boolean };
};

const RegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({}); // Store all form data with proper typing

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (section: string, field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}), // Ensure section exists before spreading
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep]}</h2>

        {/* Form Sections */}
        <div className="space-y-8">
          {currentStep === 0 && <Form1 />}
          {currentStep === 1 && <Form2 />}
          {currentStep === 2 && <Form3 />}
          {currentStep === 3 && <Form4 />}
          {currentStep === 4 && <Form5 />}
          {currentStep === 5 && <Form6 />}
          {currentStep === 6 && <Form7 />}
          {currentStep === 7 && <Form8 />}
          {currentStep === 8 && <Form9 />}
          {currentStep === 9 && <Form10 />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 text-lg rounded-lg ${
              currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Back
          </button>
          {currentStep === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="px-6 py-3 text-lg bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
