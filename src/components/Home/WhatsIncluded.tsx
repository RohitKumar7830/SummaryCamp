import React from "react";
import yoga from "../../assets/yoga.jpg";
import meditation from "../../assets/meditation.jpg";
import teamProjects from "../../assets/teamproject.jpg";
import games from "../../assets/games.jpg";
import talentShow from "../../assets/skits.jpg";
import artsCrafts from "../../assets/art.jpg";
import cooking from "../../assets/cooking.jpg";

const activities = [
  {
    title: "Yoga & Wellness",
    description: "Start your day with a yoga class or meditation session. We offer classes for all levels and ages.",
    image: yoga,
  },
  {
    title: "Meditation/Pranayama",
    description: "Calm your mind and body with guided meditation and pranayama techniques.",
    image: meditation,
  },
  {
    title: "Team Projects",
    description: "Collaborate, innovate, and create! Engage in exciting team projects that foster leadership and creativity.",
    image: teamProjects,
  },
  {
    title: "Games",
    description: "Stay active and energized with fun outdoor and indoor games!",
    image: games,
  },
  {
    title: "Skits & Talent Shows",
    description: "Showcase your creativity on stage! Participate in skits, talent performances, and storytelling.",
    image: talentShow,
  },
  {
    title: "Arts & Crafts",
    description: "Unleash your creativity with hands-on arts and crafts sessions.",
    image: artsCrafts,
  },
  {
    title: "Cooking",
    description: "Discover the joy of cooking! Learn to prepare delicious meals and traditional dishes.",
    image: cooking,
  },
];

const WhatsIncluded: React.FC = () => {
  return (
    <section id="whatsIncluded" className="px-10 py-10">
      <h1 className="text-[#181411] text-4xl font-black leading-tight">What's Included</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${activity.image})` }}
            ></div>
            <div>
              <p className="text-[#181411] text-lg font-medium">{activity.title}</p>
              <p className="text-[#8a7560] text-sm font-normal">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsIncluded;
