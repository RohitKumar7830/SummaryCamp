import React from "react";

const programs = [
  {
    title: "Yoga & Wellness",
    description: "Start your day with a yoga class or meditation session. We offer classes for all levels and ages.",
    image: "https://img.freepik.com/free-photo/full-shot-women-stretching-indoors_23-2149832819.jpg?t=st=1741212330~exp=1741215930~hmac=0e5269e60c0a82deb1a4da4cd6299c5ca4e53efcd7f79b39998dde402e706eee&w=2000",
  },
  {
    title: "Meditation & Pranayama",
    description: "Calm your mind and body with guided meditation and pranayama techniques. Enhance focus, reduce stress, and rejuvenate your spirit.",
    image: "https://img.freepik.com/free-photo/young-woman-group-people-sitting-sukhasana_1163-5007.jpg?t=st=1741212261~exp=1741215861~hmac=b8e5376f843ed9668e37ac3410d736f13724b5a0718887097df11156473addde&w=2000",
  },
  {
    title: "Team Projects",
    description: "Collaborate, innovate, and create! Engage in exciting team projects that foster leadership, creativity, and problem-solving skills.",
    image: "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149636268.jpg?t=st=1741212113~exp=1741215713~hmac=5635af57e80ebfe1bc7525cd930e77f7fc5bfb88b7aced345ae68f0eef94cb15&w=2000",
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
