import React, { useState, useEffect } from "react";

type FormProps = {
  formData: Record<string, string | boolean>;
  onChange: (section: string, field: string, value: string | boolean) => void;
};

const Form3: React.FC<FormProps> = ({ formData, onChange }) => {
  const [localData, setLocalData] = useState({
    foodAllergies: (formData["healthInformation_foodAllergies"] as string) || "",
    medicationAllergies: (formData["healthInformation_medicationAllergies"] as string) || "",
    currentMedications: (formData["healthInformation_currentMedications"] as string) || "",
    medicationRequired: (formData["healthInformation_medicationRequired"] as string) || "",
    acknowledgeRequirement: (formData["healthInformation_acknowledgeRequirement"] as boolean) || false,
    physicianDetails: (formData["healthInformation_physicianDetails"] as string) || "",
    physicianPhone: (formData["healthInformation_physicianPhone"] as string) || "",
    insuranceProvider: (formData["healthInformation_insuranceProvider"] as string) || "",
    policyNumber: (formData["healthInformation_policyNumber"] as string) || "",
    policyOwner: (formData["healthInformation_policyOwner"] as string) || "",
  });

  useEffect(() => {
    // Reset fields when "No" is selected
    if (localData.medicationRequired === "No") {
      setLocalData((prev) => ({
        ...prev,
        acknowledgeRequirement: false,
        physicianDetails: "",
        physicianPhone: "",
        insuranceProvider: "",
        policyNumber: "",
        policyOwner: "",
      }));
    }
  }, [localData.medicationRequired]);

  const handleChange = (field: keyof typeof localData, value: string | boolean) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    onChange("healthInformation", field, value);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-[600px] w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Camper's Health Information</h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block font-medium">Does the Camper have any food allergies?</label>
            <textarea
              className="border p-4 rounded-lg w-full text-lg mt-2"
              placeholder="List food allergies..."
              value={localData.foodAllergies}
              onChange={(e) => handleChange("foodAllergies", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium">Does the Camper have any medication allergies?</label>
            <textarea
              className="border p-4 rounded-lg w-full text-lg mt-2"
              placeholder="List medication allergies..."
              value={localData.medicationAllergies}
              onChange={(e) => handleChange("medicationAllergies", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium">Does the Camper take any medication currently?</label>
            <textarea
              className="border p-4 rounded-lg w-full text-lg mt-2"
              placeholder="List current medications..."
              value={localData.currentMedications}
              onChange={(e) => handleChange("currentMedications", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium">Is the Camper on any medications that need to be administered at Camp?</label>
            <div className="mt-2 flex space-x-4">
              {["Yes", "No"].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="medicationRequired"
                    value={option}
                    className="w-5 h-5"
                    checked={localData.medicationRequired === option}
                    onChange={(e) => handleChange("medicationRequired", e.target.value)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {localData.medicationRequired === "Yes" && (
            <>
              <div>
                <label className="block font-medium">Physician's Name / Address</label>
                <textarea
                  className="border p-4 rounded-lg w-full text-lg mt-2"
                  placeholder="Physician details..."
                  value={localData.physicianDetails}
                  onChange={(e) => handleChange("physicianDetails", e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium">Physician's Phone Number</label>
                <input
                  type="text"
                  className="border p-4 rounded-lg w-full text-lg mt-2"
                  placeholder="Phone Number"
                  value={localData.physicianPhone}
                  onChange={(e) => handleChange("physicianPhone", e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium">Health Insurance Provider</label>
                <input
                  type="text"
                  className="border p-4 rounded-lg w-full text-lg mt-2"
                  placeholder="Insurance Provider"
                  value={localData.insuranceProvider}
                  onChange={(e) => handleChange("insuranceProvider", e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium">Health Insurance Policy Number</label>
                <input
                  type="text"
                  className="border p-4 rounded-lg w-full text-lg mt-2"
                  placeholder="Policy Number"
                  value={localData.policyNumber}
                  onChange={(e) => handleChange("policyNumber", e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium">Health Insurance Policy Owner</label>
                <input
                  type="text"
                  className="border p-4 rounded-lg w-full text-lg mt-2"
                  placeholder="Policy Owner"
                  value={localData.policyOwner}
                  onChange={(e) => handleChange("policyOwner", e.target.value)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form3;
