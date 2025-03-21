import React, { useState, useEffect } from "react";

type FormProps = {
  formData: Record<string, string | boolean>;
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: string) => void;
};

const Form4: React.FC<FormProps> = ({ formData, onValidityChange, onChange }) => {
  const [covidVaccine, setCovidVaccine] = useState<string>(
    (formData["covidInformation_covidVaccine"] as string) || ""
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (covidVaccine) {
      setError(false);
      onValidityChange(true);
    } else {
      onValidityChange(false);
    }
  }, [covidVaccine, onValidityChange]);

  const handleChange = (value: string) => {
    setCovidVaccine(value);
    onChange("covidInformation", "covidVaccine", value);
  };

  const handleValidation = () => {
    if (!covidVaccine) {
      setError(true);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">COVID-19 Information</h2>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        <strong>IMPORTANT INFORMATION</strong>
      </p>
      <p className="text-gray-600 mb-4">
        COVID-19 guidelines as recommended/set by CDC and the State of Connecticut at the time of Camp will be followed.
      </p>
      <p className="text-gray-600 mb-4">
        We <strong>strongly recommend</strong> that each attendee receive full vaccination prior to attending Camp. If the attendee has not received vaccination, we will contact you to discuss the circumstances.
      </p>
      <p className="text-gray-600 mb-4">
        Please note that if an attendee tests positive for COVID-19 and/or shows symptoms during Camp, the attendee will be asked to go home immediately.
      </p>

      {/* Question */}
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Has the Camper received required Covid vaccination? <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center space-x-6">
        {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              name="covid_vaccine"
              className="w-5 h-5"
              value={option}
              checked={covidVaccine === option}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleValidation}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">Please select an option.</p>}
    </div>
  );
};

export default Form4;
