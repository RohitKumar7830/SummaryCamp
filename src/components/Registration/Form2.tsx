import React, { useState, useEffect, useCallback } from "react";

type FormProps = {
  formData: Record<string, string | boolean>;
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: string) => void;
};

const Form2: React.FC<FormProps> = ({ formData, onValidityChange, onChange }) => {
  const [localData, setLocalData] = useState({
    parent1Name: (formData["emergencyContact_parent1Name"] as string) || "",
    parent1Phone: (formData["emergencyContact_parent1Phone"] as string) || "",
    parent1Email: (formData["emergencyContact_parent1Email"] as string) || "",
    fatherName: (formData["emergencyContact_fatherName"] as string) || "",
    parent2Phone: (formData["emergencyContact_parent2Phone"] as string) || "",
    parent2Email: (formData["emergencyContact_parent2Email"] as string) || "",
    residentialAddress: (formData["emergencyContact_residentialAddress"] as string) || "",
    emergencyContactName: (formData["emergencyContact_emergencyContactName"] as string) || "",
    emergencyContactPhone: (formData["emergencyContact_emergencyContactPhone"] as string) || "",
    emergencyContactEmail: (formData["emergencyContact_emergencyContactEmail"] as string) || "",
  });

  const [errors, setErrors] = useState({
    parent1Name: false,
    parent1Phone: false,
    parent1Email: false,
    fatherName: false,
    parent2Phone: false,
    parent2Email: false,
    residentialAddress: false,
    emergencyContactName: false,
    emergencyContactPhone: false,
    emergencyContactEmail: false,
  });

  const validateForm = useCallback(() => {
    const newErrors = {
      parent1Name: !localData.parent1Name,
      parent1Phone: !/^\d{10,}$/.test(localData.parent1Phone),
      parent1Email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.parent1Email),
      fatherName: !localData.fatherName,
      parent2Phone: !/^\d{10,}$/.test(localData.parent2Phone),
      parent2Email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.parent2Email),
      residentialAddress: !localData.residentialAddress,
      emergencyContactName: !localData.emergencyContactName,
      emergencyContactPhone: !/^\d{10,}$/.test(localData.emergencyContactPhone),
      emergencyContactEmail: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.emergencyContactEmail),
    };

    setErrors(newErrors);
    onValidityChange(!Object.values(newErrors).includes(true));
  }, [localData, onValidityChange]);

  useEffect(() => {
    validateForm();
  }, [localData, validateForm]);

  const handleChange = (field: keyof typeof localData, value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange("emergencyContact", field, value);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-[600px] w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Parents / Emergency Contact Information
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(localData).map(([key, value]) => (
            <div key={key}>
              <input
                type="text"
                placeholder={key.replace(/([A-Z])/g, " $1")}
                className="border p-4 rounded-lg w-full text-lg"
                value={value}
                onChange={(e) => handleChange(key as keyof typeof localData, e.target.value)}
                onBlur={validateForm}
              />
              {errors[key as keyof typeof errors] && (
                <p className="text-red-500 text-sm">Required / Invalid</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form2;
