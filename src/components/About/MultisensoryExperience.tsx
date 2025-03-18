import React from "react";
import yogaMeditation from "../../assets/yoga.jpg";
import teamProjects from "../../assets/teamproject.jpg";
import artCrafts from "../../assets/art.jpg";
import talentShow from "../../assets/skits.jpg";

const activities = [
  { title: "Yoga & Meditation", img: yogaMeditation },
  { title: "Team Projects", img: teamProjects },
  { title: "Art & Crafts", img: artCrafts },
  { title: "Talent Shows", img: talentShow },
];

const MultisensoryExperience: React.FC = () => {
  return (
    <section className="px-10 py-16 text-center bg-[#f9f8f6]">
      <h2 className="text-3xl font-bold">A Multisensory Journey Through India</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Our curriculum is a vibrant blend of ancient wisdom and modern expression. Kids will experience the magic of India through a kaleidoscope of activities.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-48 h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${activity.img})` }}
            ></div>
            <p className="text-lg font-medium mt-2">{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultisensoryExperience;
