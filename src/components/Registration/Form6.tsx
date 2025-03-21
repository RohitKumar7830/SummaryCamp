import React, { useState, useEffect } from "react";

type FormProps = {
  formData: Record<string, string | boolean>;
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: boolean) => void;
};

const Form6: React.FC<FormProps> = ({ formData, onValidityChange, onChange }) => {
  const [agreementChecked, setAgreementChecked] = useState(
    (formData["medicalAcknowledgement_agreementChecked"] as boolean) || false
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (agreementChecked) {
      setError(false);
      onValidityChange(true);
    } else {
      onValidityChange(false);
    }
  }, [agreementChecked, onValidityChange]);

  const handleChange = (value: boolean) => {
    setAgreementChecked(value);
    onChange("medicalAcknowledgement", "agreementChecked", value);
  };

  const handleValidation = () => {
    if (!agreementChecked) {
      setError(true);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-10">
      {/* Step Title */}
      <h2 className="text-3xl font-bold mb-4">Medical Acknowledgement</h2>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        I have read and understand the COVID-19 procedure as stated within this application form.
        The medical health information provided for each Camper in this form is correct and current
        to the best of my knowledge.
      </p>
      <p className="text-gray-700 mb-6">
        Each Camper is able, willing, and has the permission to participate in all Camp activities.
        Each Camper must submit required medical documentation within 2 weeks of application submission.
      </p>
      <p className="text-gray-700 mb-6">
        The Camper will notify the Camp Management if there is any change in Camper’s health from the
        time of form submission until the start of Camp.
      </p>
      <p className="text-gray-700 mb-6">
        Permission is given to Camp Management to:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Hospitalize and/or administer first aid and necessary transportation as deemed necessary.</li>
        <li>Treat minor injuries or illness; administer over-the-counter medication unless otherwise specified in this form.</li>
      </ul>

      {/* Agreement Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          className="mr-2 w-5 h-5"
          id="medicalAgreement"
          checked={agreementChecked}
          onChange={(e) => handleChange(e.target.checked)}
          onBlur={handleValidation}
        />
        <label htmlFor="medicalAgreement" className="text-gray-700">
          I have read and agree with the Medical Acknowledgement as stated above.
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">You must agree to proceed.</p>}
    </div>
  );
};

export default Form6;
