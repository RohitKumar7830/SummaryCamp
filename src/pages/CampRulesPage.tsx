import React from "react";
import Header from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { BookOpen, UserCheck, ClipboardCheck } from "lucide-react";

const CampInfoPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="px-6 py-12 bg-gradient-to-br from-[#fdfbf7] to-[#f2ede4] text-gray-800 mt-24 space-y-10">
        {/* Objective */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-500">
            <BookOpen className="mr-2" /> Objective
          </h2>
          <p className="leading-relaxed">
            Dharma Awakening Camp introduces Dharma through discussions, project-based activities, team events, and games. Vegetarian food (Indian, Italian, Mexican) and lodging are included. Many activities are outdoors—campers must plan for weather (warmth, rain, etc.).
          </p>
        </section>

        {/* Camper Responsibilities */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-500">
            <UserCheck className="mr-2" /> Camper Responsibilities
          </h2>
          <p className="leading-relaxed">
            Campers must behave ethically, be in good health, and participate in all activities unless excused by Camp Director or Doctor. No one may leave the camp without permission. Electronic devices will be collected and returned at the end.
          </p>
        </section>

        {/* Required Forms */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-500">
            <ClipboardCheck className="mr-2" /> Required Forms
          </h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>Submit complete application and medical forms.</li>
            <li>Applications must be completed at least 3 weeks prior to camp start.</li>
            <li>Camp Management decides form completeness.</li>
            <li>Applicants must sign to acknowledge agreement with rules and guidelines.</li>
          </ul>
        </section>

        {/* Activities */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">Camp Activities</h2>
          <p className="leading-relaxed">
            Activities include discussions on Hinduism, yoga, physical exercise, arts and crafts, mehendi, swimming, Kho, Kabbadi, hiking, dance, music, drama, and campfire. Campers agree to participate and allow use of photos/videos for camp publicity.
          </p>
        </section>

        {/* Sample Schedule */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Sample Daily Schedule</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>6:00 – 7:00 Wake Up</li>
            <li>7:00 – 7:45 Yoga</li>
            <li>7:45 – 8:30 Breakfast</li>
            <li>8:30 – 11:00 Learning</li>
            <li>11:00 – 12:00 Group Discussions</li>
            <li>12:00 – 1:00 Lunch</li>
            <li>1:00 – 2:00 Arts/Crafts</li>
            <li>2:00 – 3:00 Team Projects</li>
            <li>3:00 – 4:00 Recreation</li>
            <li>4:00 – 4:30 Snacks</li>
            <li>4:30 – 6:00 Games</li>
            <li>6:00 – 6:30 Aarti/Bhajans</li>
            <li>6:30 – 7:00 Evening Activity</li>
            <li>7:00 – 8:00 Dinner</li>
            <li>8:00 – 9:00 Talent Show</li>
            <li>9:00 – 9:45 Campfire/Stories</li>
            <li>9:45 – 10:00 Wrap-up</li>
            <li>10:00 Lights Out</li>
          </ul>
        </section>

        {/* Guidelines */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Camp Guidelines</h2>
          <ul className="list-decimal pl-6 space-y-2 leading-relaxed">
            <li>No abuse, violence, drugs, alcohol, foul language, or theft.</li>
            <li>Tents may be inspected at any time.</li>
            <li>Campers may be dismissed for medical or disciplinary reasons without refund.</li>
            <li>No one may leave camp without permission.</li>
            <li>Electronic devices are collected and returned at the end. Unauthorized use will result in confiscation.</li>
            <li>No food/drinks in cabins.</li>
            <li>Lights out at 10 PM. Silence required.</li>
            <li>Stay in assigned cabins.</li>
            <li>Maintain cleanliness across all camp areas.</li>
            <li>Stay within activity boundaries.</li>
            <li>Participation in all activities is required.</li>
            <li>Follow all safety rules.</li>
            <li>Disclose and manage medical conditions with Camp Management.</li>
            <li>Pass swim test to join swimming activities.</li>
            <li>Wear conservative clothing (no belly shirts or halter tops).</li>
          </ul>
        </section>

        {/* Parent Acknowledgement */}
        <section className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Parent Acknowledgement</h2>
          <p className="leading-relaxed">
            By signing the application, parents agree:
          </p>
          <ul className="list-disc pl-6 leading-relaxed mt-2">
            <li>Their child may stay in tents/cabins without special accommodations.</li>
            <li>They have read and understood the camp guidelines.</li>
            <li>They permit the use of photos/videos for camp promotion.</li>
            <li>They understand and approve of the activities their child will participate in.</li>
            <li>They are responsible for transportation.</li>
            <li>They release camp officials from liability for any injuries or accidents, including during off-site events.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CampInfoPage;
