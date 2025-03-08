import React from "react";

const Form1: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Date of Birth */}
      <div>
        <label className="block text-lg font-medium text-gray-700">Date of Birth *</label>
        <input
          type="date"
          className="border p-4 rounded-lg w-full text-lg"
          required
        />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">Camper's First Name *</label>
          <input
            type="text"
            placeholder="First Name"
            className="border p-4 rounded-lg w-full text-lg"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Camper's Last Name *</label>
          <input
            type="text"
            placeholder="Last Name"
            className="border p-4 rounded-lg w-full text-lg"
            required
          />
        </div>
      </div>

      {/* Gender Selection */}
      <div>
        <label className="block text-lg font-medium text-gray-700">Gender *</label>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Male" className="w-5 h-5" required />
            <span className="text-lg">Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Female" className="w-5 h-5" required />
            <span className="text-lg">Female</span>
          </label>
        </div>
      </div>

      {/* Extra Curricular Activities */}
      <div>
        <label className="block text-lg font-medium text-gray-700">Current Extra Curriculars *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {["Sports", "Music - Instrument", "Music - Vocals", "Theater", "Arts & Crafts", "Other"].map((activity) => (
            <label key={activity} className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg">{activity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form1;
