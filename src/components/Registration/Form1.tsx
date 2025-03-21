import React, { useState, useEffect } from "react";

type FormProps = {
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: string | boolean | string[]) => void;
};

const Form1: React.FC<FormProps> = ({ onValidityChange, onChange }) => {
  const [dob, setDob] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [extraCurriculars, setExtraCurriculars] = useState<string[]>([]);

  // Validation state
  const [errors, setErrors] = useState({
    dob: false,
    firstName: false,
    lastName: false,
    gender: false,
  });

  useEffect(() => {
    const isValid = !!(dob && firstName && lastName && gender);
    onValidityChange(isValid);
  }, [dob, firstName, lastName, gender, extraCurriculars, onValidityChange]);

  const validateForm = () => {
    setErrors({
      dob: !dob,
      firstName: !firstName,
      lastName: !lastName,
      gender: !gender,
    });

    return dob && firstName && lastName && gender;
  };

  const handleExtraCurricularChange = (activity: string) => {
    const updatedList = extraCurriculars.includes(activity)
      ? extraCurriculars.filter((item) => item !== activity)
      : [...extraCurriculars, activity];

    setExtraCurriculars(updatedList);
    onChange("personalInfo", "extraCurriculars", updatedList);
  };

  return (
    <div className="space-y-6">
      {/* Date of Birth */}
      <div>
        <label className="block text-lg font-medium">Date of Birth *</label>
        <input
          type="date"
          className="border p-4 rounded-lg w-full"
          name={dob}
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            onChange("personalInfo", "dob", e.target.value);
          }}
          onBlur={validateForm}
        />
        {errors.dob && <p className="text-red-500 text-sm">Date of Birth is required.</p>}
      </div>

      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="border p-4 rounded-lg w-full"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              onChange("personalInfo", "firstName", e.target.value);
            }}
            onBlur={validateForm}
          />
          {errors.firstName && <p className="text-red-500 text-sm">First Name is required.</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="border p-4 rounded-lg w-full"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              onChange("personalInfo", "lastName", e.target.value);
            }}
            onBlur={validateForm}
          />
          {errors.lastName && <p className="text-red-500 text-sm">Last Name is required.</p>}
        </div>
      </div>

      {/* Gender Selection */}
      <div>
        <label className="block text-lg font-medium">Gender *</label>
        <div className="flex space-x-4">
          {["Male", "Female"].map((g) => (
            <label key={g} className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value={g}
                className="w-5 h-5"
                checked={gender === g}
                onChange={(e) => {
                  setGender(e.target.value);
                  onChange("personalInfo", "gender", e.target.value);
                }}
                onBlur={validateForm}
              />
              <span>{g}</span>
            </label>
          ))}
        </div>
        {errors.gender && <p className="text-red-500 text-sm">Gender selection is required.</p>}
      </div>

      {/* Current Extra Curriculars */}
      <div>
        <label className="block text-lg font-medium">Current Extra Curriculars *</label>
        {["Sports", "Music - Instrument", "Music - Vocals", "Theater", "Arts & Crafts", "Other"].map((activity) => (
          <label key={activity} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={activity}
              className="w-5 h-5"
              checked={extraCurriculars.includes(activity)}
              onChange={() => handleExtraCurricularChange(activity)}
            />
            <span>{activity}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Form1;
