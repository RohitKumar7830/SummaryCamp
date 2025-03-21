import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type FormProps = {
  formData: Record<string, string | boolean | string[]>;
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: boolean) => void;
};

const Form10: React.FC<FormProps> = ({ formData, onValidityChange, onChange }) => {
  const [acknowledged, setAcknowledged] = useState(
    (formData["parentAcknowledgement_acknowledged"] as boolean) || false
  );
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (acknowledged) {
      setError(false);
      onValidityChange(true);
    } else {
      onValidityChange(false);
    }
  }, [acknowledged, onValidityChange]);

  const handleChange = (value: boolean) => {
    setAcknowledged(value);
    onChange("parentAcknowledgement", "acknowledged", value);
  };

  const handleValidation = () => {
    if (!acknowledged) {
      setError(true);
    }
  };

  const handleSubmit = async () => {
    if (!acknowledged) return;
  
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScEs6QAK5MHxNFzHccWO852uRgqhTD0ACqN9wc9T5fYrPD-Ww/formResponse";

      if (formData["personalInfo_dob"]) {
        const [year, month, day] = (formData["personalInfo_dob"] as string).split("-");
        formData["personalInfo_dob_year"] = year;
        formData["personalInfo_dob_month"] = month;
        formData["personalInfo_dob_day"] = day;
      }
  
    const fieldMap: Record<string, { id: string; fixedValue?: string }> = {
      "personalInfo_firstName": { id: "entry.458354378" },
      "personalInfo_lastName": { id: "entry.2060465553" },
      "personalInfo_dob_month": { id: "entry.1038523381_month" },
      "personalInfo_dob_day": { id: "entry.1038523381_day" },
      "personalInfo_dob_year": { id: "entry.1038523381_year" },
      "personalInfo_gender": { id: "entry.1459862047" },
      "personalInfo_extraCurriculars": { id: "entry.194336221" },
      "emergencyContact_parent1Name": { id: "entry.1661074398" },
      "emergencyContact_parent1Phone": { id: "entry.1047847183" },
      "emergencyContact_parent1Email": { id: "entry.328532069" },
      "emergencyContact_fatherName": { id: "entry.291733429" },
      "emergencyContact_parent2Phone": { id: "entry.1083396667" },
      "emergencyContact_parent2Email": { id: "entry.543027111" },
      "emergencyContact_residentialAddress": { id: "entry.634335051" },
      "emergencyContact_emergencyContactName": { id: "entry.1097474545" },
      "emergencyContact_emergencyContactPhone": { id: "entry.1281847702" },
      "emergencyContact_emergencyContactEmail": { id: "entry.16329962" },
      "healthInformation_foodAllergies": { id: "entry.1187452022" },
      "healthInformation_medicationAllergies": { id: "entry.1521270994" },
      "healthInformation_currentMedications": { id: "entry.647673344" },
      "healthInformation_medicationRequired": { id: "entry.1266375327" },
      "healthInformation_acknowledgeRequirement": {
        id: "entry.1157311674",
        fixedValue: "Acknowledge the requirement",
      },
      "healthInformation_physicianDetails": { id: "entry.1461928959" },
      "healthInformation_physicianPhone": { id: "entry.1845061863" },
      "healthInformation_insuranceProvider": { id: "entry.937415994" },
      "healthInformation_policyNumber": { id: "entry.46923136" },
      "healthInformation_policyOwner": { id: "entry.5409116" },
      "covidInformation_covidVaccine": { id: "entry.1162213755" },
      "medicalDocumentation_acknowledgeRequirement": {
        id: "entry.265056667",
        fixedValue:
          "I have read the Medical Documentation Requirement and will be providing the required documents, which are needed to application to be complete.",
      },
      "medicalAcknowledgement_agreementChecked": {
        id: "entry.1132723103",
        fixedValue: "I have read and agree with the Medical Acknowledgement as stated above.",
      },
      "attendanceAcknowledgement_attendanceChecked": {
        id: "entry.577046399",
        fixedValue: "I have read and agree with the Attendance Acknowledgement as stated above.",
      },
      "attendanceAcknowledgement_permissionChecked": {
        id: "entry.900465198",
        fixedValue: "I give permission to use pictures and/or videos",
      },
      "refundPolicy_refundAcknowledged": {
        id: "entry.722711201",
        fixedValue: "I have read and understand the refund policy",
      },
      "parentAcknowledgement_acknowledged": {
        id: "entry.2022670991",
        fixedValue: "Acknowledged & Signed",
      },
    };
  
    formData["healthInformation_acknowledgeRequirement"] = "Acknowledge the requirement";
  
    const urlEncoded = new URLSearchParams();
  
    Object.entries(formData).forEach(([key, value]) => {
      const field = fieldMap[key];
      if (field) {
        const val = field.fixedValue || String(value);
        urlEncoded.append(field.id, val);
      }
    });
  
    // ✅ Log final data before sending
    console.log("📝 Submitting to Google Form:", googleFormURL);
    console.log("📦 Data:", Object.fromEntries(urlEncoded.entries()));
  
    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncoded.toString(),
      });
  
      alert("Form submitted successfully ✅");
    } catch (err) {
      console.error("Form submission failed:", err);
      alert("Form submission failed ❌");
    }
  };
  

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Acknowledgement by Parent
        </h2>

        <p className="text-gray-700 mb-4">
          By clicking the box below, the parent acknowledges and consents to the following:
        </p>

        <div className="border p-4 rounded-lg bg-gray-100 text-gray-800 text-sm italic mb-4">
          <p>
            <strong>I understand</strong> that I and/or my child may be housed in a tent/cabin
            and no special accommodations/foods will be provided. My child is physically fit to
            carry out all required activities of the camp.
          </p>
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="acknowledge"
            className="mr-2 w-5 h-5"
            checked={acknowledged}
            onChange={(e) => handleChange(e.target.checked)}
            onBlur={handleValidation}
          />
          <label htmlFor="acknowledge" className="text-lg text-gray-800">
            Acknowledged & Signed
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-sm">
            You must acknowledge this statement to proceed.
          </p>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className={`px-6 py-3 text-lg rounded-lg ${
              acknowledged
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!acknowledged}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form10;
