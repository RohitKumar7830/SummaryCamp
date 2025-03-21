import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const ApplyCounselor: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    education: "",
    phoneNumber: "",
    address: "",
    motivation: "",
    experience: "",
    campPreparationAgreement: "",
    healthInsurance: false,
    acknowledge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg mt-28">
        <h2 className="text-2xl font-bold text-center mb-6">Counselor Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block font-medium">Email *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">First Name *</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Last Name *</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-medium">Date of Birth *</label>
            <input 
              type="date" 
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block font-medium">Education (Most Recent) *</label>
            <textarea 
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Phone Number *</label>
              <input 
                type="text" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Residential Address *</label>
              <textarea 
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Experience & Motivation */}
          <div>
            <label className="block font-medium">What motivates you to apply for this role? *</label>
            <textarea 
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">List prior experiences managing children *</label>
            <textarea 
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Camp Preparation Agreement */}
          <div>
            <label className="block font-medium">
              Preparation for the camp would need the prospective counselors to attend training sessions, develop content as agreed, & be able to lead campers in activities (education, games, projects, etc.). Do you agree? *
            </label>
            <select
              name="campPreparationAgreement"
              value={formData.campPreparationAgreement}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, I agree</option>
              <option value="no">No, I do not</option>
            </select>
          </div>

          {/* Health & Insurance Agreement */}
          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="healthInsurance"
              checked={formData.healthInsurance}
              onChange={handleChange}
              className="mr-2"
            />
            <label>
              I agree to submit health and insurance documents as required. *
            </label>
          </div>

          {/* Acknowledgment Agreement */}
          <div>
            <label className="block font-medium">
              By submitting this application, I acknowledge and agree to the rules & regulations of the camp, including:
            </label>
            <ul className="list-disc ml-6 text-sm">
              <li>I must stay at the camp for the full duration.</li>
              <li>I am physically fit to participate in all activities.</li>
              <li>I allow the camp to use my photos/videos for promotional materials.</li>
              <li>I understand my responsibilities at the camp.</li>
            </ul>
            <select
              name="acknowledge"
              value={formData.acknowledge}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md mt-2"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, I acknowledge & agree</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplyCounselor;
