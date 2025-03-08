import React from "react";
import Navbar from "../components/common/Navbar"; // ✅ Existing Navbar
import Footer from "../components/common/Footer"; // ✅ Existing Footer
import RegistrationForm from "../components/Registration/RegistrationForm"; // ✅ Multi-step form

const Register: React.FC = () => {
  return (
    <>
      <Navbar /> {/* ✅ Use existing Navbar */}
      <div className="min-h-screen bg-gray-100 px-4 py-10 flex">
        <RegistrationForm /> {/* ✅ Multi-step registration form */}
      </div>
      <Footer /> {/* ✅ Use existing Footer */}
    </>
  );
};

export default Register;
