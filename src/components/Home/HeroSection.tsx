import React from "react";

const HeroSection: React.FC = () => {
  const scrollToSection = () => {
    document.getElementById("whatsIncluded")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="w-full flex flex-col items-center text-center py-20 bg-cover bg-center min-h-[480px] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://img.freepik.com/free-photo/view-children-practicing-health-wellness-activity_23-2151402019.jpg?t=st=1741205114~exp=1741208714~hmac=11e3d5266bf07c07aae9adeddf2ff12b1f4d842358f880a01377510ac90a94d3&w=2000')",
      }}
    >
      <h1 className="text-5xl font-black leading-tight max-w-3xl">
        Welcome to the Indian Community Summer Camp
      </h1>
      <p className="text-lg font-normal mt-4 max-w-xl">
        Join us for a summer of wellness, cultural enrichment, and fun!
      </p>
      <button
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
        onClick={scrollToSection}
      >
        Learn More
      </button>
    </header>
  );
};

export default HeroSection;
