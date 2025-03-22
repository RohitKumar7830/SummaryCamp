import React from "react";
import Header from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { BookOpen, UserCheck, ClipboardCheck } from 'lucide-react';

const CampInfoPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="px-6 py-12 bg-gradient-to-br from-[#fdfbf7] to-[#f2ede4] text-gray-800 mt-24">
        {/* Objective */}
        <section className="mb-12 shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-500">
            <BookOpen className="mr-2" /> Objective
          </h2>
          <p className="leading-relaxed">
            Dharma Awakening Camp (Camp) hopes to introduce and educate key tenets of Dharma through discussions, project-based activities, team events, and games.
            Food and lodging facilities are provided for the whole week and are included in the application fee. All food is vegetarian and includes Indian, Italian, Mexican cuisine. Many of the activities are conducted in the wonderful outdoors. As such, Camp is bound by natural conditions such as warmth, cool, rain, and humidity. Campers should be aware and plan accordingly.
          </p>
        </section>

        {/* Camper Responsibilities */}
        <section className="mb-12 shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-500">
            <UserCheck className="mr-2" /> Camper Responsibilities
          </h2>
          <p className="leading-relaxed">
            A camper is expected to follow all rules and regulations of Camp and behave in an ethical and moral manner at all times during the Camp. All campers must be in good health and be able to perform all physical and other activities of the Camp.
          </p>
        </section>

        {/* Required Forms */}
        <section className="mb-12 shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-500">
            <ClipboardCheck className="mr-2" /> Required Forms
          </h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>Each applicant must submit an application form with all the requested medical information.</li>
            <li>An application is considered complete if all information in the application form(s) and medical form(s) is provided and fee payment is received by Camp Management. If the application is incomplete prior to three (3) weeks of start of Camp, Camp Management has authority to deny the application and deny entry to Camp.</li>
            <li>Camp Management has final say regarding completeness of the medical form. Any applicant whose application and/or medical form are incomplete is liable to be denied entrance to the Camp. Camp Management will contact the applicant in case the application is incomplete.</li>
            <li>Each applicant (provided he/she is capable) must provide a signature signifying that the applicant has read and agreed to the rules and regulations of the Camp and agrees with respective Signature Statement.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CampInfoPage;
