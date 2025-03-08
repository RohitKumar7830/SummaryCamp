import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/About/HeroSection";
import MissionStatement from "../components/About/MissionStatement";
import MultisensoryExperience from "../components/About/MultisensoryExperience";
import ImpactSection from "../components/About/ImpactSection";
import Footer from "../components/common/Footer";

const About: React.FC = () => {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <HeroSection />
      <MissionStatement />
      <MultisensoryExperience />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default About;
