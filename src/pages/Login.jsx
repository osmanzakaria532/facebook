import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          facebook
        </h1>
        <h2 className="text-lg text-center mb-4">Log in to Facebook</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="border p-3 rounded-md text-sm"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border p-3 rounded-md text-sm w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
          <button className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">
            Log in
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to="/findaccount"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgotten account?
          </Link>
          ·{" "}
          <Link
            to="/signup"
            className="text-sm text-blue-500 hover:underline"
          >
            Sign up for Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
