import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_dR6bMs1bfanv0GQfYY"; // Replace with actual Stripe link

type FormProps = {
  onValidityChange: (isValid: boolean) => void;
};

const Form9: React.FC<FormProps> = ({ onValidityChange }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate(); // ✅ React Router navigation

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.get("payment") === "success") {
      setPaymentSuccess(true);
      onValidityChange(true); // ✅ Unlock Next button

      // ✅ Show alert immediately
      alert("✅ Payment successful! Redirecting to the final step...");

      // ✅ Auto-redirect after 1.5 sec
      setTimeout(() => {
        navigate("/apply?step=10"); // ✅ Redirect to Form10
      }, 1500);
    }
  }, [onValidityChange, navigate]);

  const handlePayment = () => {
    window.location.href = STRIPE_PAYMENT_LINK; // Redirect user to Stripe checkout
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl text-center">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      {!paymentSuccess ? (
        <>
          <button
            onClick={handlePayment}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 w-full"
          >
            Proceed to Payment
          </button>
          <p className="text-sm text-gray-500 mt-4">
            You will be redirected to a secure payment page.
          </p>
        </>
      ) : (
        <div className="text-green-600 text-lg font-semibold mt-4">
          ✅ Payment Successful! Redirecting...
        </div>
      )}
    </div>
  );
};

export default Form9;
