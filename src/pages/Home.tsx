import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import WhatsIncluded from "../components/Home/WhatsIncluded";
import DailySchedule from "../components/Home/DailySchedule";
import FeaturedPrograms from "../components/Home/FeaturedPrograms";
import Footer from "../components/common/Footer";
import Banner from "../components/Home/Banner";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f2f0] font-sans">
      <Navbar />
      <HeroSection />
      <WhatsIncluded />
      <DailySchedule />
      <FeaturedPrograms />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export default Home;
