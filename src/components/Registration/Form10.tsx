import React from "react";

const Form10: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">Acknowledgement by Parent</h2>

      {/* Instructions */}
      <p className="text-gray-700 mb-4">
        By clicking the box below, the parent acknowledges and consents to the following:
      </p>

      <div className="border p-4 rounded-lg bg-gray-100 text-gray-800 text-sm italic mb-4">
        <p>
          <strong>I understand</strong> that I and/or my child may be housed in a tent/cabin and no
          special accommodations/foods will be provided. My child is physically fit to carry out all
          required activities of the camp.
        </p>
        <p className="mt-2"><strong>I have read</strong> the Camp Guidelines.</p>
        <p className="mt-2">
          I give permission to use pictures and/or videos in which my child appears for camp articles,
          website, and other promotional materials.
        </p>
        <p className="mt-2">
          I am fully aware of camp activities in which my child will be participating. I attest that
          they are capable of participating and give permission to them to participate. I will be
          responsible for transportation of my child to and from camp.
        </p>
        <p className="mt-2">
          <strong>I hereby release</strong> Dharma Awakening LLC, its employees, agents, volunteers,
          and camp officials from any and all liability arising from accidents or injuries that my
          child may incur at the camp, including activities such as hiking, sightseeing, etc.
        </p>
      </div>

      {/* Acknowledgement Checkbox */}
      <div className="mb-6 flex items-center">
        <input type="checkbox" id="acknowledge" className="mr-2 w-5 h-5" />
        <label htmlFor="acknowledge" className="text-lg text-gray-800">
          Acknowledged & Signed
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 text-lg bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form10;
