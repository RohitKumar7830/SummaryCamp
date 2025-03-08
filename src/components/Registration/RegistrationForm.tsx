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

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <Form1 />;
      case 1: return <Form2 />;
      case 2: return <Form3 />;
      case 3: return <Form4 />;
      case 4: return <Form5 />;
      case 5: return <Form6 />;
      case 6: return <Form7 />;
      case 7: return <Form8 />;
      case 8: return <Form9 />;
      case 9: return <Form10 />;
      default: return <Form1 />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px]">
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep]}</h2>
        {renderStep()}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 text-lg rounded-lg ${currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-700"}`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-3 text-lg bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
