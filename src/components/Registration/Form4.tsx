import React from "react";

const Form4 = () => {
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
        Has the Camper received required Covid vaccination? *
      </label>
      <div className="flex items-center space-x-6">
        <label className="inline-flex items-center">
          <input type="radio" name="covid_vaccine" className="form-radio" value="yes" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="covid_vaccine" className="form-radio" value="no" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  );
};

export default Form4;
