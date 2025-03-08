import React, { useState } from "react";
import Navbar from "../components/common/Navbar"; // Existing Navbar
import Footer from "../components/common/Footer";// Existing Footer
import FAQHero from "../components/Faq/FAQHero";
import FAQAccordion from "../components/Faq/FAQAccordion";

const FAQ: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar />
      <main>
        <FAQHero setSearchQuery={setSearchQuery}/>
        <FAQAccordion searchQuery={searchQuery}/>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
