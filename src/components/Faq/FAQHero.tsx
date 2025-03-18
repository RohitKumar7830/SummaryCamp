import React, { useState } from "react";
import faqHeroImage from "../../assets/faq_hero.jpg"; // Import local image

interface FAQHeroProps {
  setSearchQuery: (query: string) => void;
}

const FAQHero: React.FC<FAQHeroProps> = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <header
      className="w-full flex flex-col items-center text-center py-24 bg-cover bg-center min-h-[300px] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${faqHeroImage})`,
      }}
    >
      <h1 className="text-4xl font-black leading-tight mt-10">Frequently Asked Questions</h1>
      <p className="text-lg font-normal mt-4 max-w-2xl">
        We've answered some of the most common questions about our summer camp!
      </p>

      {/* Search Bar */}
      <div className="relative flex items-center mt-8 bg-white rounded-full shadow-md px-4 py-2 w-96">
        <input
          type="text"
          placeholder="Search for your question"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
    </header>
  );
};

export default FAQHero;
