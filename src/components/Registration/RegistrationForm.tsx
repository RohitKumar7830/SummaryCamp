import { useRef, useState, useEffect } from "react";

const RegistrationForm = () => {
  const section9Ref = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    dob: "",
    firstName: "",
    lastName: "",
    gender: "",
    extracurricular: [] as string[],
    parent1Name: "",
    parent1Phone: "",
    parent1Email: "",
    fatherName: "",
    parent2Phone: "",
    parent2Email: "",
    residentialAddress: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactEmail: "",
    foodAllergies: "",
    medicationAllergies: "",
    currentMedications: "",
    administerMedications: "",
    acknowledgeRequirement: false,
    physicianPhone: "",
    insuranceProvider: "",
    policyNumber: "",
    policyOwner: "",
    covidVaccinationStatus: "",
    medicalDocsAcknowledged: false,
    medicalAcknowledgement: false,
    attendanceAcknowledgement: false,
    mediaPermission: false,
    refundAcknowledgement: false,
    parentAcknowledgement: false,
  });

  const [showFinalSection, setShowFinalSection] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status === "success") {
      const savedFormData = localStorage.getItem("camp_form_data");

      if (savedFormData) {
        try {
          setFormData(JSON.parse(savedFormData));
        } catch (error) {
          console.error("Error parsing saved form data:", error);
        }
      }

      setShowFinalSection(true);

      setTimeout(() => {
        section9Ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && name === "extracurricular") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => {
        const updated = checked
          ? [...prev.extracurricular, value]
          : prev.extracurricular.filter((item) => item !== value);
        const newData = { ...prev, extracurricular: updated };
        localStorage.setItem("camp_form_data", JSON.stringify(newData));
        return newData;
      });
    } else if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => {
        const newData = { ...prev, [name]: checked };
        localStorage.setItem("camp_form_data", JSON.stringify(newData));
        return newData;
      });
    } else {
      const newData = { ...formData, [name]: value };
      setFormData(newData);
      localStorage.setItem("camp_form_data", JSON.stringify(newData));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const [year, month, day] = formData.dob.split("-");
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdO9Do58YRUjebFV9HP4woHmmqj2fS7h1-g2NhybGztcScrpQ/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.457207849", formData.firstName);
    formBody.append("entry.489985544", formData.lastName);
    formBody.append("entry.1928371109_year", year);
    formBody.append("entry.1928371109_month", month);
    formBody.append("entry.1928371109_day", day);
    formBody.append("entry.1178981820", formData.gender);
    formData.extracurricular.forEach((activity) => {
      formBody.append("entry.1519562635", activity);
    });
    formBody.append("entry.1925921878", formData.parent1Name);
    formBody.append("entry.626618148", formData.parent1Phone);
    formBody.append("entry.214445044", formData.parent1Email);
    formBody.append("entry.1173586050", formData.fatherName);
    formBody.append("entry.2087785261", formData.parent2Phone);
    formBody.append("entry.1556920090", formData.parent2Email);
    formBody.append("entry.365756023", formData.residentialAddress);
    formBody.append("entry.149614621", formData.emergencyContactName);
    formBody.append("entry.869631731", formData.emergencyContactPhone);
    formBody.append("entry.541574744", formData.emergencyContactEmail);
    formBody.append("entry.1188009512", formData.foodAllergies);
    formBody.append("entry.1906061773", formData.medicationAllergies);
    formBody.append("entry.1668211296", formData.currentMedications);
    formBody.append("entry.1943835313", formData.administerMedications);

    if (formData.administerMedications === "Yes") {
      formBody.append(
        "entry.1544653987",
        formData.acknowledgeRequirement ? "Acknowledge the requirement" : ""
      );
      formBody.append("entry.361042341", formData.physicianPhone);
      formBody.append("entry.351344490", formData.insuranceProvider);
      formBody.append("entry.1488444021", formData.policyNumber);
      formBody.append("entry.1988400090", formData.policyOwner);
    }

    formBody.append("entry.228925216", formData.covidVaccinationStatus);
    formBody.append(
      "entry.51846642",
      formData.medicalDocsAcknowledged
        ? "I have read the Medical Documentation Requirement and will be providing the required documents, which are needed to application to be complete."
        : ""
    );
    formBody.append(
      "entry.1338649280",
      formData.medicalAcknowledgement
        ? "I have read and agree with the Medical Acknowledgement as stated above."
        : ""
    );
    formBody.append(
      "entry.1560491231",
      formData.attendanceAcknowledgement
        ? "I have read and agree with the Attendance Acknowledgement as stated above."
        : ""
    );
    formBody.append(
      "entry.72645557",
      formData.mediaPermission ? "I give permission to use pictures and/or videos" : ""
    );
    formBody.append(
      "entry.1290849768",
      formData.refundAcknowledgement ? "I have read and understand the refund policy" : ""
    );
    formBody.append(
      "entry.2018220198",
      formData.parentAcknowledgement ? "Acknowledged & Signed" : ""
    );

    await fetch(formUrl, {
      method: "POST",
      body: formBody,
      mode: "no-cors",
    });

    alert("Thank you! Your form has been submitted successfully. Please do not submit it again. You will receive a confirmation email shortly.");

    window.location.href = "/";
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 mt-12">
      <form onSubmit={handleSubmit} className="space-y-12">
        {!showFinalSection && (
          <>
             {/* Section 1 */}
         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 1: Camper's Personal Information
  </h2>

  <div className="space-y-6">
    <div>
      <label className="block mb-1 font-medium">First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Last Name</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Gender</label>
      <div className="flex gap-4">
        {["Male", "Female"].map((gender) => (
          <label key={gender} className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={formData.gender === gender}
              onChange={handleChange}
              className="accent-blue-600"
              required
            />
            {gender}
          </label>
        ))}
      </div>
    </div>

    <div>
      <label className="block mb-1 font-medium">Extracurricular Interests</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          "Sports",
          "Music - Instrument",
          "Music - Vocals",
          "Theater",
          "Arts & Crafts",
          "Other",
        ].map((activity) => (
          <label key={activity} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="extracurricular"
              value={activity}
              checked={formData.extracurricular.includes(activity)}
              onChange={handleChange}
              className="accent-blue-600"
              required
            />
            {activity}
          </label>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 2: Parents / Emergency Contact Info
  </h2>

  <div className="space-y-6">
    <div>
      <label className="block mb-1 font-medium">Parent 1 Full Name</label>
      <input
        type="text"
        name="parent1Name"
        placeholder="Parent 1 Full Name"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Parent 1 Phone</label>
      <input
        type="tel"
        name="parent1Phone"
        placeholder="Parent 1 Phone"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Parent 1 Email</label>
      <input
        type="email"
        name="parent1Email"
        placeholder="Parent 1 Email"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Father's Name</label>
      <input
        type="text"
        name="fatherName"
        placeholder="Father's Name"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Parent 2 Phone</label>
      <input
        type="tel"
        name="parent2Phone"
        placeholder="Parent 2 Phone"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Parent 2 Email</label>
      <input
        type="email"
        name="parent2Email"
        placeholder="Parent 2 Email"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Residential Address</label>
      <textarea
        name="residentialAddress"
        placeholder="Residential Address"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Emergency Contact Name</label>
      <input
        type="text"
        name="emergencyContactName"
        placeholder="Emergency Contact Name"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Emergency Contact Phone</label>
      <input
        type="tel"
        name="emergencyContactPhone"
        placeholder="Emergency Contact Phone"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">Emergency Contact Email</label>
      <input
        type="email"
        name="emergencyContactEmail"
        placeholder="Emergency Contact Email"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>
  </div>
</div>


        {/* Section 3 */}
        {/* --- Section 3 Card --- */}
{/* --- Section 3 Card --- */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 3: Camper’s Health Information
  </h2>

  <div className="space-y-6">
    <div>
      <label className="block mb-1 font-medium">
        Does the Camper have any food allergies? If Yes – please mention below.
      </label>
      <input
        type="text"
        name="foodAllergies"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
        required
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">
        Does the Camper have any medication allergies? If Yes – please mention below.
      </label>
      <input
        type="text"
        name="medicationAllergies"
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">
        Does the Camper take any medication currently? If Yes – list them below.
      </label>
      <textarea
        name="currentMedications"
        rows={3}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded-md"
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">
        Is the Camper on any medications that need to be administered during the Camp?
      </label>
      <div className="flex gap-6">
  {["Yes", "No"].map((option) => (
    <label key={option} className="flex items-center gap-2">
      <input
        type="radio"
        name="administerMedications"
        value={option}
        checked={formData.administerMedications === option}
        onChange={handleChange}
        required // 👈 this makes sure one option is selected
        className="accent-blue-600"
      />
      {option}
    </label>
  ))}
</div>

    </div>

    {formData.administerMedications === "Yes" && (
      <>
        <p className="text-sm text-gray-700 bg-yellow-50 border border-yellow-300 rounded-md p-4">
          <strong>Note:</strong> If Yes to the above question, please acknowledge that you will send a copy of a signed letter from a physician confirming the Camper will be able to self-administer the medications.
        </p>

        <div>
  <label className="flex items-center gap-2 font-medium">
    <input
      type="checkbox"
      name="acknowledgeRequirement"
      checked={formData.acknowledgeRequirement}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          acknowledgeRequirement: e.target.checked,
        }))
      }
      className="accent-blue-600"
    />
    Acknowledge the requirement
  </label>
</div>


        <div>
          <label className="block mb-1 font-medium">Physician's Phone Number</label>
          <input
            type="tel"
            name="physicianPhone"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Health Insurance Provider</label>
          <input
            type="text"
            name="insuranceProvider"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Health Insurance Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Health Insurance Policy Owner</label>
          <input
            type="text"
            name="policyOwner"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-md"
          />
        </div>
      </>
    )}
  </div>
</div>

       {/* Section 4 */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 4: COVID-19 Information
  </h2>

  <div className="space-y-6">
    <p className="text-gray-700 text-sm">
      <strong>IMPORTANT INFORMATION</strong>
      <br />
      COVID-19 guidelines as recommended/set by CDC and State of Connecticut at the time of Camp will be followed.
      <br /><br />
      We <strong>strongly recommend</strong> that each attendee receive full vaccination prior to attending Camp.
      <br /><br />
      If the attendee has not received vaccination, we will contact you to discuss the circumstances. At the discretion of Camp management, application to attend Camp may be denied.
      <br /><br />
      We may require more information at a later time prior to start of Camp, depending upon the information/guidelines per CDC / State of Connecticut.
      <br /><br />
      Please note that if an attendee tests positive for COVID-19 and/or shows symptoms during Camp, the attendee will be asked to go home immediately.
    </p>

    <div>
      <label className="block mb-1 font-medium">
        Has the Camper received required Covid vaccination?
      </label>
      <div className="flex gap-6">
        {["Yes", "No"].map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="covidVaccinationStatus"
              value={option}
              checked={formData.covidVaccinationStatus === option}
              onChange={handleChange}
              required
              className="accent-blue-600"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  </div>
</div>

{/* Section 5 */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 5: Medical Documentation Information
  </h2>

  <div className="space-y-6 text-sm text-gray-700">
    <p>
      For all the Camper's attending – the following medical documentation is required within 2 weeks of registration.
      <br /><br />
      Failure to do so might result in canceling the registration for the Camp.
      <br /><br />
      Photo Copies of:
      <ul className="list-disc list-inside ml-4">
        <li>Applicable health insurance card (both sides)</li>
        <li>Camper's most recent Immunization Record</li>
        <li>Camper's Covid-19 vaccination documentation</li>
        <li>Signed statement from physician that attendee is in good physical condition to participate in all Camp activities</li>
      </ul>
      <br />
      <strong>Please submit the document:</strong>
      <br />
      Email electronic copies: <code>dharmaawakeningcamp@gmail.com</code><br />
      Mail paper copies: Dharma Awakening LLC, 2 Long Ridge Court, Unionville CT - 06085
    </p>

    <label className="flex items-start gap-2 font-medium">
      <input
        type="checkbox"
        name="medicalDocsAcknowledged"
        checked={formData.medicalDocsAcknowledged}
        onChange={handleChange}
        className="accent-blue-600 mt-1"
        required
      />
      I have read the Medical Documentation Requirement and will be providing the required documents, which are needed to application to be complete.
    </label>
  </div>
</div>

{/* Section 6 */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 6: Medical Acknowledgement
  </h2>

  <div className="space-y-6 text-sm text-gray-700">
    <p>
      I have read and understand the COVID-19 procedure as stated within this application form.
      <br /><br />
      The medical health information that is provided for each Camper in this form is correct and current to the best of my knowledge.
      <br /><br />
      Each Camper is able, willing, and has the permission to participate in all Camp activities.
      <br /><br />
      Each Camper must submit to Camp Management required medical documentation within 2 weeks of this application submission.
      <br /><br />
      The Camper will notify the Camp Management if there is any change in Camper’s health from time of form submission until start of Camp.
      <br /><br />
      <strong>Permission is given to Camp Management to:</strong>
      <ul className="list-disc list-inside ml-4 mt-2">
        <li>Hospitalize and/or administer first aid and any necessary transportation as deemed necessary.</li>
        <li>Treat minor injuries or illness; administer over-the-counter medication unless otherwise specified in this form.</li>
      </ul>
    </p>

    <label className="flex items-start gap-2 font-medium">
      <input
        type="checkbox"
        name="medicalAcknowledgement"
        checked={formData.medicalAcknowledgement}
        onChange={handleChange}
        className="accent-blue-600 mt-1"
        required
      />
      I have read and agree with the Medical Acknowledgement as stated above.
    </label>
  </div>
</div>

{/* Section 7 */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 7: Attendance Acknowledgement
  </h2>

  <div className="space-y-6 text-sm text-gray-700">
    <p>
      Each Camper has read the <a href="/camp-rules" className="text-red-500 hover:text-blue-500 font-semibold"><strong>rules & regulations of Camp</strong></a> and will adhere to said rules and regulations for duration of Camp.
      <br /><br />
      The Camp begins on Sunday and ends on the following Friday. Camp is organized for all the 5 days. Each Camper must stay at Camp for the duration of Camp.
      <br /><br />
      If it is necessary to be absent from Camp for part of the week, Camp Management must be notified and obtain permission.
    </p>

    <label className="flex items-start gap-2 font-medium">
      <input
        type="checkbox"
        name="attendanceAcknowledgement"
        checked={formData.attendanceAcknowledgement}
        onChange={handleChange}
        className="accent-blue-600 mt-1"
        required
      />
      I have read and agree with the Attendance Acknowledgement as stated above.
    </label>

    <label className="flex items-start gap-2 font-medium">
      <input
        type="checkbox"
        name="mediaPermission"
        checked={formData.mediaPermission}
        onChange={handleChange}
        required
        className="accent-blue-600 mt-1"
      />
      I give permission to Camp staff and/or persons authorized by Camp Management to use pictures and/or videos that may include attendees in this application for Camp promotional purposes.
    </label>
  </div>
</div>

{/* Section 8 */}
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8">
  <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
    Section 8: Refund Policy
  </h2>

  <div className="space-y-6 text-sm text-gray-700">
    <p>
      Full paid amount minus $75 for each attendee will be refunded if Camp Management is notified by phone or email at least 5 weeks prior to start of Camp.
      <br /><br />
      Full paid amount minus $150 for each attendee will be refunded if Camp Registrar is notified by phone or email between 5 and 4 weeks prior to start of Camp.
      <br /><br />
      No refund will be given for any attendee who does not attend Camp or if Camp Registrar is notified by phone or email within 4 weeks of start of Camp.
    </p>

    <label className="flex items-start gap-2 font-medium">
      <input
        type="checkbox"
        name="refundAcknowledgement"
        checked={formData.refundAcknowledgement}
        onChange={handleChange}
        required
        className="accent-blue-600 mt-1"
      />
      I have read and understand the refund policy
    </label>
  </div>
</div>

 {/* Payment Button Section */}
{!showFinalSection && (
  <div className="text-center">
    <button
      type="button"
      onClick={() => {
        const requiredFields: (keyof typeof formData)[] = [
          "dob", "firstName", "lastName", "gender",
          "parent1Name", "parent1Phone", "parent1Email", "fatherName",
          "parent2Phone", "parent2Email", "residentialAddress",
          "emergencyContactName", "emergencyContactPhone", "emergencyContactEmail",
          "foodAllergies", "medicationAllergies", "currentMedications",
          "administerMedications", "covidVaccinationStatus"
        ];

        for (const field of requiredFields) {
          if (!formData[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')} field.`);
            return;
          }
        }

        if (formData.extracurricular.length === 0) {
          alert("Please select at least one extracurricular activity.");
          return;
        }

        if (formData.administerMedications === "Yes") {
          if (
            !formData.acknowledgeRequirement ||
            !formData.physicianPhone ||
            !formData.insuranceProvider ||
            !formData.policyNumber ||
            !formData.policyOwner
          ) {
            alert("Please complete all medication-related fields.");
            return;
          }
        }

        if (
          !formData.medicalDocsAcknowledged ||
          !formData.medicalAcknowledgement ||
          !formData.attendanceAcknowledgement ||
          !formData.refundAcknowledgement
        ) {
          alert("Please check all acknowledgement boxes.");
          return;
        }

        localStorage.setItem("camp_form_data", JSON.stringify(formData));
        window.location.href = "https://buy.stripe.com/eVaaFy7wz8O47kc4gh";
      }}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      Continue to Payment
    </button>
  </div>
)}


          </>
        )}

        {showFinalSection && (
          <>
            {/* Section 9 */}
            <div
              ref={section9Ref}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all p-8"
            >
              <h2 className="text-3xl font-semibold mb-6 text-blue-900 text-center">
                Section 9: Acknowledgement by Parent
              </h2>
              <div className="space-y-6 text-sm text-gray-700">
                <p>
                  By clicking the box below, the parent acknowledges and consents to the following:
                  <br />
                  <em>
                    I understand that I and/or my child may be housed in a tent/cabin and no
                    special accommodations/foods will be provided. My Child is physically fit to
                    carry out all required activities of Camp.
                    <br />
                    I have read the Camp Guidelines.
                    <br />
                    I give permission to use pictures and/or videos in which my child appears for
                    Camp articles, website, and other promotional materials.
                    <br />
                    I am fully aware of Camp activities in which my son/daughter/ward will be
                    participating. I attest that he/she is capable of participating in those
                    activities and give permission to him/her to participate in those activities. I
                    will be responsible for transportation of my child to and from Camp.
                    <br />
                    I hereby release Dharma Awakening LLC, its employees, agents, volunteers, and
                    Camp officials or participants from any and all liability arising from any
                    accident and/or injuries that I and/or my child may incur at Camp including
                    off-site activities such as, but not limited to, hiking, sight-seeing, etc.
                  </em>
                </p>
                <label className="flex items-start gap-2 font-medium">
                  <input
                    type="checkbox"
                    name="parentAcknowledgement"
                    checked={formData.parentAcknowledgement}
                    onChange={handleChange}
                    className="accent-blue-600 mt-1"
                    required
                  />
                  Acknowledged & Signed
                </label>
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
