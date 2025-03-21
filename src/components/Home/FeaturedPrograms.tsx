import React from "react";
import yoga from "../../assets/yoga.jpg";
import meditation from "../../assets/YoungKid_Meditating.jpg";
import teamProjects from "../../assets/teamproject.jpg";

const programs = [
  {
    title: "Yoga & Wellness",
    description: "Start your day with a yoga class or meditation session. We offer classes for all levels and ages.",
    image: yoga,
  },
  {
    title: "Meditation & Pranayama",
    description: "Calm your mind and body with guided meditation and pranayama techniques. Enhance focus, reduce stress, and rejuvenate your spirit.",
    image: meditation,
  },
  {
    title: "Team Projects",
    description: "Principles of Dharma, Gita, Ramayana and essential History will learnt through activities and projects.",
    image: teamProjects,
  },
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="px-10 py-10">
      <h2 className="text-[#181411] text-4xl font-black leading-tight">
        Featured Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {programs.map((program, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${program.image})` }}
            ></div>
            <div>
              <p className="text-[#181411] text-lg font-medium">{program.title}</p>
              <p className="text-[#8a7560] text-sm font-normal">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrograms;
