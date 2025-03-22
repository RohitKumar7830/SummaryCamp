import React, { useState } from "react";
import Header from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const ApplyCounselor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    education: "",
    phone: "",
    address: "",
    motivation: "",
    priorExperience: "",
    canCommitToCampPrep: "",
    healthInfoAgreement: false,
    attendanceAcknowledgement: "",
  });

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSe3f0a-D8Pwm9Ul6NefxN9szfkJcKIXg3Upt9CpWxWNzzsF5Q/formResponse";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [year, month, day] = formData.dob.split("-");

    const formBody = new FormData();
    formBody.append("entry.1949198417", formData.firstName);
    formBody.append("entry.1892926670", formData.lastName);
    formBody.append("entry.1570280139_year", year);
    formBody.append("entry.1570280139_month", month);
    formBody.append("entry.1570280139_day", day);
    formBody.append("entry.244248838", formData.education);
    formBody.append("entry.1462627907", formData.phone);
    formBody.append("entry.1737072746", formData.address);
    formBody.append("entry.1597959990", formData.motivation);
    formBody.append("entry.900686160", formData.priorExperience);
    formBody.append("entry.579301108", formData.canCommitToCampPrep);
    formBody.append("entry.1639665402", formData.healthInfoAgreement ? "Yes, I agree  to this requirement." : "");
    formBody.append("entry.1307766565", formData.attendanceAcknowledgement);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    })
      .then(() => {
        alert("Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          education: "",
          phone: "",
          address: "",
          motivation: "",
          priorExperience: "",
          canCommitToCampPrep: "",
          healthInfoAgreement: false,
          attendanceAcknowledgement: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Submission failed!");
      });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16 mt-24">
          <form onSubmit={handleSubmit} className="space-y-12">
            {[1, 2, 3, 4].map((section) => (
              <div
                key={section}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] transition duration-300 ease-in-out p-8"
              >
                {section === 1 && (
                  <>
                  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
                    Section 1: Personal Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">First Name</label>
                      <input id="firstName" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">Last Name</label>
                      <input id="lastName" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                
                    <div>
                      <label htmlFor="dob" className="block mb-2 font-medium">Date of Birth</label>
                      <input id="dob" type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                
                    <div>
                      <label htmlFor="education" className="block mb-2 font-medium">Education</label>
                      <textarea id="education" name="education" placeholder="Education (e.g., B.A. in Psychology, 2022)" value={formData.education} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                      <input id="phone" type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                
                    <div>
                      <label htmlFor="address" className="block mb-2 font-medium">Residential Address</label>
                      <textarea id="address" name="address" placeholder="Residential Address" value={formData.address} onChange={handleChange} className="w-full border px-4 py-3 rounded-md" />
                    </div>
                  </div>
                </>
                
                )}
                {section === 2 && (
                 <>
                 <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
                   Section 2: Experience & Background
                 </h2>
                 <div className="space-y-6">
                   <div>
                     <label className="block mb-1 font-medium">
                       What motivates you to apply for this Counselor Role?
                     </label>
                     <textarea
                       name="motivation"
                       placeholder="Your motivation"
                       value={formData.motivation}
                       onChange={handleChange}
                       className="w-full border px-4 py-3 rounded-md"
                     />
                   </div>
               
                   <div>
                     <label className="block mb-1 font-medium">
                       List prior experiences where you had to engage, lead, or manage children.
                     </label>
                     <textarea
                       name="priorExperience"
                       placeholder="E.g., school clubs, tutoring, etc."
                       value={formData.priorExperience}
                       onChange={handleChange}
                       className="w-full border px-4 py-3 rounded-md"
                     />
                   </div>
               
                   <div>
                     <p className="mb-2 font-medium">
                       Are you able to attend training, create content, and lead campers?
                     </p>
                     <div className="flex gap-6">
                       {["Yes", "No"].map((option) => (
                         <label key={option} className="flex items-center gap-2">
                           <input
                             type="radio"
                             name="canCommitToCampPrep"
                             value={option}
                             checked={formData.canCommitToCampPrep === option}
                             onChange={handleRadioChange}
                             className="accent-orange-600"
                           />
                           {option}
                         </label>
                       ))}
                     </div>
                   </div>
                 </div>
               </>
               
                )}
                {section === 3 && (
                  <>
                    <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
                      Section 3: Health & Insurance Agreement
                    </h2>
                    <p className="text-sm text-gray-700 mb-4">
                      Once selected, please submit within 3 weeks:
                      <br />1. Health insurance card (both sides)
                      <br />2. Immunization Record
                      <br />3. Covid-19 Vaccination
                      <br />4. Physician statement of physical ability
                      <br /><br />Email: dharmaawakeningcamp@gmail.com
                      <br />Mail: Dharma Awakening LLC, 2 Long Ridge Court, Unionville CT - 06085
                    </p>
                    <label className="flex items-start gap-2 font-medium">
                      <input type="checkbox" name="healthInfoAgreement" checked={formData.healthInfoAgreement} onChange={handleChange} className="accent-orange-600 mt-1" />
                      Yes, I agree to this requirement.
                    </label>
                  </>
                )}
                {section === 4 && (
                  <>
                    <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
                      Section 4: Attendance Acknowledgement
                    </h2>
                    <p className="text-sm text-gray-700 mb-4">
                      Applicant has read the <a href="/camp-rules" className="text-red-500 hover:text-blue-500 font-semibold"> rules & regulations of Camp </a> and will adhere.
                      <br /><br />Camp runs Sunday to Friday. Full attendance is mandatory. No special accommodations/foods will be provided. The applicant must be fit to participate and agrees to use of photos/videos for promotional purposes.
                      <br /><br />Applicant takes full responsibility and releases Dharma Awakening LLC from liability.
                    </p>
                    <div className="flex gap-6">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center gap-2">
                          <input type="radio" name="attendanceAcknowledgement" value={option} checked={formData.attendanceAcknowledgement === option} onChange={handleRadioChange} className="accent-orange-600" />
                          {option}
                        </label>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Submit */}
            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyCounselor;
