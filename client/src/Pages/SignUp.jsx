import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/sign-up", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(formData)
    });
     const data = await res.json()
           console.log(data);
  };
  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SIGN UP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="bg-blue-600 border p-3 rounded-lg hover:opacity-90 text-white">
          sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
