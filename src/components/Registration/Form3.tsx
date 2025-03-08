import React from "react";

const Form3: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Camper's Health Information</h2>

      <label className="block">
        <span className="text-gray-700">Does the Camper have any food allergies? If Yes - please mention them below.</span>
        <textarea className="mt-2 block w-full p-3 border rounded-lg" placeholder="List food allergies..."></textarea>
      </label>

      <label className="block">
        <span className="text-gray-700">Does the Camper have any medication allergies? If Yes - please mention them below.</span>
        <textarea className="mt-2 block w-full p-3 border rounded-lg" placeholder="List medication allergies..."></textarea>
      </label>

      <label className="block">
        <span className="text-gray-700">Does the Camper take any medication currently? If Yes - please list the medications they are on.</span>
        <textarea className="mt-2 block w-full p-3 border rounded-lg" placeholder="List current medications..."></textarea>
      </label>

      <label className="block">
        <span className="text-gray-700">Is the Camper on any medications that need to be administered during the Camp?</span>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="medication" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="medication" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </label>

      <label className="block">
        <span className="text-gray-700">If Yes, please acknowledge that you will send a copy of a signed letter from a physician confirming the Camper can self-administer the medications.</span>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Acknowledge the requirement</span>
          </label>
        </div>
      </label>

      <label className="block">
        <span className="text-gray-700">Physician's Name / Address</span>
        <textarea className="mt-2 block w-full p-3 border rounded-lg" placeholder="Physician details..."></textarea>
      </label>

      <label className="block">
        <span className="text-gray-700">Physician's Phone Number</span>
        <input type="text" className="mt-2 block w-full p-3 border rounded-lg" placeholder="Phone number" />
      </label>

      <label className="block">
        <span className="text-gray-700">Health Insurance Provider</span>
        <input type="text" className="mt-2 block w-full p-3 border rounded-lg" placeholder="Insurance provider" />
      </label>

      <label className="block">
        <span className="text-gray-700">Health Insurance Policy #</span>
        <input type="text" className="mt-2 block w-full p-3 border rounded-lg" placeholder="Policy number" />
      </label>

      <label className="block">
        <span className="text-gray-700">Health Insurance Policy Owner</span>
        <textarea className="mt-2 block w-full p-3 border rounded-lg" placeholder="Policy owner details..."></textarea>
      </label>
    </div>
  );
};

export default Form3;
