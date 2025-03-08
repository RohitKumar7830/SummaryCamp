import React from "react";

const HeroSection: React.FC = () => {
  const scrollToSection = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="w-full flex flex-col items-center text-center py-24 bg-cover bg-center min-h-[500px] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-exercise_1163-4940.jpg?t=st=1741216310~exp=1741219910~hmac=5cecb50d5ae1f959878d089ab8b6f24539e15a03dbe3e46aa4e465f5159073b7&w=2000')",
      }}
    >
      <h1 className="text-4xl font-black leading-tight max-w-3xl mt-20">
        Experience the Magic of India
      </h1>
      <p className="text-lg font-normal mt-6 max-w-xl">
      We are excited to bring a sleepaway camp for children aged between 10 – 14 years of age, here in Connecticut. This August 2025, a 5 day camp is being organized from Aug 10 to Aug 15.
      </p>
      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600" onClick={scrollToSection}>
        Know More
      </button>
    </header>
  );
};

export default HeroSection;
