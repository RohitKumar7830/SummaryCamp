import React, { useState, useEffect } from "react";

type FormProps = {
  formData: Record<string, string | boolean>;
  onValidityChange: (isValid: boolean) => void;
  onChange: (section: string, field: string, value: boolean) => void;
};

const Form7: React.FC<FormProps> = ({ formData, onValidityChange, onChange }) => {
  const [attendanceChecked, setAttendanceChecked] = useState(
    (formData["attendanceAcknowledgement_attendanceChecked"] as boolean) || false
  );
  const [permissionChecked, setPermissionChecked] = useState(
    (formData["attendanceAcknowledgement_permissionChecked"] as boolean) || false
  );
  const [errors, setErrors] = useState({ attendance: false, permission: false });

  useEffect(() => {
    const isValid = attendanceChecked && permissionChecked;
    onValidityChange(isValid);
  }, [attendanceChecked, permissionChecked, onValidityChange]);

  const handleValidation = () => {
    setErrors({
      attendance: !attendanceChecked,
      permission: !permissionChecked,
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Attendance Acknowledgement Section</h2>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        Each Camper has read the <strong>rules & regulations of Camp</strong> and will adhere to said rules and regulations for the duration of Camp.
      </p>
      <p className="text-gray-700 mb-4">
        The Camp begins on Sunday and ends on the following Friday. Camp is organized for all the 5 days. Each Camper must stay at Camp for the duration of Camp.
      </p>
      <p className="text-gray-700 mb-4">
        If it is necessary to be absent from Camp for part of the week, Camp Management must be notified and obtain permission.
      </p>

      {/* Agreement Checkbox */}
      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-orange-500"
            checked={attendanceChecked}
            onChange={(e) => {
              setAttendanceChecked(e.target.checked);
              onChange("attendanceAcknowledgement", "attendanceChecked", e.target.checked);
            }}
            onBlur={handleValidation}
          />
          <span className="text-gray-700">
            I have read and agree with the Attendance Acknowledgement as stated above.
          </span>
        </label>
        {errors.attendance && <p className="text-red-500 text-sm">You must agree to proceed.</p>}
      </div>

      {/* Permission Checkbox */}
      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-orange-500"
            checked={permissionChecked}
            onChange={(e) => {
              setPermissionChecked(e.target.checked);
              onChange("attendanceAcknowledgement", "permissionChecked", e.target.checked);
            }}
            onBlur={handleValidation}
          />
          <span className="text-gray-700">
            I give permission to Camp staff and/or persons authorized by Camp Management to use pictures and/or videos that may include attendees in this application for Camp promotional purposes.
          </span>
        </label>
        {errors.permission && <p className="text-red-500 text-sm">You must give permission to proceed.</p>}
      </div>
    </div>
  );
};

export default Form7;
