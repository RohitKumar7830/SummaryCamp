import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
// import Activities from "./pages/Activities";
// import Instructors from "./pages/Instructors";
import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";
// import Apply from "./pages/Apply";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/activities" element={<Activities />} />
        <Route path="/instructors" element={<Instructors />} /> */}
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/apply" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
