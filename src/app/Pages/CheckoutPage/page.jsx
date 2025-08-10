"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function CheckoutPage() {
  const publicKey = "pk_test_245edf35f548e8aaf461b5df0d3501fc88793322";
  const amount = 5000 * 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Payment Failed! Try again!"),
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="number"
          id="number"
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <PaystackButton
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        {...componentProps}
      />
    </div>
  );
}
