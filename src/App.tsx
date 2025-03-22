import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
// import Activities from "./pages/Activities";
// import Instructors from "./pages/Instructors";
import FAQ from "./pages/FAQ";
import Contact from "./pages/ContactUs";
import ApplyCounselor from "./pages/ApplyCounselor";
import CampRulesPage from "./pages/CampRulesPage";
import ScrollToTop from './components/common/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* 👈 Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Register />} />
        <Route path="/apply-counselor" element={<ApplyCounselor />} />
        <Route path="/camp-rules" element={<CampRulesPage />} />
      </Routes>
    </>
  );
};

export default App;
