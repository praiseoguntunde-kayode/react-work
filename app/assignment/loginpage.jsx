"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email.trim();
    const fullName = formData.fullName.trim();
    const password = formData.password.trim();

    if (!email || !fullName || !password) {
      console.log("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      console.log("Invalid email");
      return;
    }

    if (password.length < 6) {
      console.log("Password must be at least 6 characters");
      return;
    }

    console.log("Successfully created");

    setFormData({
      email: "",
      fullName: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-[320px] flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}