import React, { useEffect, useState } from "react";
import heroImage from "../../assets/Girl_Meditating.jpg"; // Correct import

const HeroSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="relative w-full min-h-[750px] flex flex-col md:flex-row items-center text-center md:text-left bg-[#FDFDFD] mt-24"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover", // Full background on mobile
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div
        className={`w-full md:w-1/2 p-6 md:pl-16 max-w-2xl text-black pt-32 md:pt-0 transition-all duration-700 ease-in-out ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-[Poppins] tracking-wide">
          Welcome to DharmaAwakening Camp
        </h1>
        <p className="text-lg font-normal mt-4">
          Join us for a summer of wellness, cultural enrichment, and fun!
        </p>
        <button
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
          onClick={() =>
            document.getElementById("whatsIncluded")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
