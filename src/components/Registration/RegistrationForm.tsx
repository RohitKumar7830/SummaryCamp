import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";
import Form8 from "./Form8";
import Form10 from "./Form10"; // Step 9

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
  "Acknowledgement by Parent",
];

type FormData = Record<string, string | boolean>;

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const stepFromURL = searchParams.get("step");
    const paymentStatus = searchParams.get("payment");

    if (stepFromURL) {
      let stepNumber = parseInt(stepFromURL, 10);

      // 🚀 Skip Step 8 (Payment) and go directly to Step 9 for testing
      if (stepNumber === 8) {
        stepNumber = 9;
      }

      if (!isNaN(stepNumber) && stepNumber >= 0 && stepNumber < steps.length) {
        setCurrentStep(stepNumber);
      }
    }

    if (paymentStatus === "success") {
      alert("✅ Payment successful! Redirecting to the final step...");
      setTimeout(() => {
        navigate(`/apply?step=9`);
      }, 2000);
    }
  }, [searchParams, navigate]);

  const handleValidityChange = (valid: boolean) => {
    setIsValid(valid);
  };

  const handleOnChange = (section: string, field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [`${section}_${field}`]: Array.isArray(value) ? value.join(", ") : value, // Convert array to string
    }));
  };

  const nextStep = () => {
    if (isValid) {
      const newStep = Math.min(currentStep + 1, steps.length - 1);
      setCurrentStep(newStep);
      navigate(`/apply?step=${newStep}`);
    }
  };

  const prevStep = () => {
    const newStep = Math.max(currentStep - 1, 0);
    setCurrentStep(newStep);
    navigate(`/apply?step=${newStep}`);
  };

  const submitToGoogleForm = () => {
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScEs6QAK5MHxNFzHccWO852uRgqhTD0ACqN9wc9T5fYrPD-Ww/formResponse";
    
    const fieldMap: Record<string, string> = {
      "personalInfo_firstName": "entry.458354378",
      "personalInfo_lastName": "entry.2060465553",
      "personalInfo_dob": "entry.1038523381",
      "personalInfo_gender": "entry.1459862047",
      "personalInfo_extraCurriculars": "entry.194336221",
      "emergencyContact_parent1Name": "entry.1661074398",
      "emergencyContact_parent1Phone": "entry.1047847183",
      "emergencyContact_parent1Email": "entry.328532069",
      "emergencyContact_fatherName": "entry.291733429",
      "emergencyContact_parent2Phone": "entry.1083396667",
      "emergencyContact_parent2Email": "entry.543027111",
      "emergencyContact_residentialAddress": "entry.634335051",
      "emergencyContact_emergencyContactName": "entry.1097474545",
      "emergencyContact_emergencyContactPhone": "entry.1281847702",
      "emergencyContact_emergencyContactEmail": "entry.16329962",
      "healthInformation_foodAllergies": "entry.1187452022",
      "healthInformation_medicationAllergies": "entry.1521270994",
      "healthInformation_currentMedications": "entry.647673344",
      "healthInformation_medicationRequired": "entry.1266375327",
      "healthInformation_acknowledgeRequirement": "entry.1157311674",
      "healthInformation_physicianDetails": "entry.1461928959",
      "healthInformation_physicianPhone": "entry.1845061863",
      "healthInformation_insuranceProvider": "entry.937415994",
      "healthInformation_policyNumber": "entry.46923136",
      "healthInformation_policyOwner": "entry.5409116",
      "covidInformation_covidVaccine": "entry.1162213755",
      "medicalDocumentation_acknowledgeRequirement": "entry.265056667",
      "medicalAcknowledgement_agreementChecked": "entry.1132723103",
      "attendanceAcknowledgement_attendanceChecked": "entry.577046399",
      "attendanceAcknowledgement_permissionChecked": "entry.900465198",
      "refundPolicy_refundAcknowledged": "entry.722711201",
      "parentAcknowledgement_acknowledged": "entry.2022670991"
    };

    const urlParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      const entryID = fieldMap[key];
      if (entryID) {
        urlParams.append(entryID, String(value));
      }
    });

    console.log("🚀 Submitting Form Data:", formData); // Debugging log
    console.log("🔗 Google Form URL:", `${googleFormURL}?${urlParams.toString()}`);

    fetch(`${googleFormURL}?${urlParams.toString()}`, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => {
        alert("✅ Registration successful! You will receive a confirmation email soon.");
        navigate("/");
      })
      .catch((error) => {
        console.error("❌ Form submission failed:", error);
      });
  };

  type FormProps = {
    formData: Record<string, string | boolean>;
    onValidityChange: (isValid: boolean) => void;
    onChange: (section: string, field: string, value: string | boolean | string[]) => void;
  };

  const renderStep = () => {
    const formProps: FormProps = { formData, onValidityChange: handleValidityChange, onChange: handleOnChange };

    switch (currentStep) {
      case 0: return <Form1 {...formProps} />;
      case 1: return <Form2 {...formProps} />;
      case 2: return <Form3 {...formProps} />;
      case 3: return <Form4 {...formProps} />;
      case 4: return <Form5 {...formProps} />;
      case 5: return <Form6 {...formProps} />;
      case 6: return <Form7 {...formProps} />;
      case 7: return <Form8 {...formProps} />;
      case 9: return <Form10 {...formProps} />;
      default: return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-24">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px]">
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep]}</h2>
        {renderStep()}

        {currentStep !== 9 && (
          <div className="flex justify-between mt-6">
            <button onClick={prevStep} disabled={currentStep === 0} className="bg-gray-600 text-white px-6 py-3 rounded-lg">Back</button>
            <button onClick={nextStep} disabled={!isValid} className="bg-orange-500 text-white px-6 py-3 rounded-lg">Next</button>
          </div>
        )}

        {currentStep === 9 && (
          <button onClick={submitToGoogleForm} className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full">Submit</button>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
