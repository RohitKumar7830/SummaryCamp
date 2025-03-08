import React from "react";

const Form7: React.FC = () => {
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
          <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-500" />
          <span className="text-gray-700">
            I have read and agree with the Attendance Acknowledgement as stated above.
          </span>
        </label>
      </div>

      {/* Permission Checkbox */}
      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-500" />
          <span className="text-gray-700">
            I give permission to Camp staff and/or persons authorized by Camp Management to use pictures and/or videos that may include attendees in this application for Camp promotional purposes.
          </span>
        </label>
      </div>
    </div>
  );
};

export default Form7;
