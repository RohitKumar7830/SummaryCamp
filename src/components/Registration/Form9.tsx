import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// Load Stripe with a test key
const stripePromise = loadStripe("pk_test_51Jxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      console.error("Payment Error:", error);
      alert(error.message);
    } else {
      console.log("Payment Successful, PaymentMethod ID:", paymentMethod.id);
      alert("Payment successful! (Dummy Payment)");
      // Normally, you'd send `paymentMethod.id` to your backend here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-4 rounded-lg" />
      <button
        type="submit"
        disabled={!stripe}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 w-full"
      >
        Pay Now (Test Mode)
      </button>
    </form>
  );
};

const Form9: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6">Payment</h2>

        {/* Payment Gateway */}
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Form9;
