"use client";

import { useState } from "react";
import { FaGithub, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      console.log("Login Data", formData);
      alert("Login successful");
    }
  };

  return (
    <div>
      {/* nav */}
      <nav className="w-full h-60 bg-blue-50 p-3">
        {/* logo */}
        <div className="flex justify-between ">
          <img
            src="/image.png"
            alt=""
            width={100}
            height={30}
            className="p-3"
          />
          <button className="w-40 h-10 border rounded-full border-blue-500 mr-5 bg-white ">
            👋 We are here to help
          </button>
        </div>
        <header>
          <h4 className="text-[16px] font-bold text-center mt-15">
            {" "}
            Sign in to your account.
          </h4>
          <h4 className="text-xs text-center mt-6">
            Sign in to your GoMyCode Learn account to continue <br /> your
            learning experience.
          </h4>
        </header>
      </nav>

      <div className="flex flex-col items-center mt-7">
        <div className="mr-46 text-sm p-2 text-gray-400">Email Address</div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="text-sm p-1 rounded w-70 bg-blue-50"
        />

        <p className="mr-54 text-sm p-2 mt-2 text-gray-400">Password</p>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="text-sm p-1 rounded w-70 bg-blue-50"
        />
      </div>

      <div className="flex  space-x-19 mt-2 justify-center text-[11px]">
        <div className="flex ">
          <input type="checkbox" name="" id="" />
          <span className="m-2">Remember me</span>
        </div>
        <a href="" className="m-2 text-blue-500 hover:underline">
          Forget password?
        </a>
      </div>

      <button className=" ml-110 w-70 p-1  mt-6 bg-blue-500 text-white rounded hover:bg-blue-600 text-[11px]">
        Sign In
      </button>
      <div className="w-80   mx-auto py-4 p-4 text-gray-500">
        <div className="w-full flex gap-2 items-center">
          <hr className="flex-1" />
          <p>or continue with</p>
          <hr className="flex-1" />
        </div>
      </div>

      <div className="w-100 mx-auto flex gap-6">
        <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
          <FcGoogle className="text-3xl" />
        </button>
        <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
          <FaGithub className="text-3xl" />
        </button>
        <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
          <FaMicrosoft className="text-3xl" />
        </button>
      </div>
    </div>
  );
}