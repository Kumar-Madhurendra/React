// src/components/RazorpayButton.js
import React, { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_PvQP8ZApq0vn3k");  
    script.async = true;
    document.getElementById("razorpay-button-container").appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form id="razorpay-button-container"></form>
    </div>
  );
};

export default RazorpayButton;