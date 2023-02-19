import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/api/login", { username, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="flex flex-col  mx-auto bg-white shadow-lg rounded-lg py-4 px-12">
      <a href="register" className=" decoration-gray-200 text-gray-500 text-xs mb-4 flex align-middle">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Signup{" "}
        </a>
        <h1 className="text-3xl font-bold text-center mb-10 ">Login</h1>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-400 rounded-md p-2 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-10">
          <input
            type="password"
            className="border border-gray-400 rounded-md p-2 w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center align-middle">
        <button
          className="w-40 text-center  bg-red-500  text-white font-medium py-2 px-4 rounded "
          onClick={handleLogin}
        >
          Login
        </button>
        </div>
      </div>
    </div>
  );
}
