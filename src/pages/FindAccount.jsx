import React, { useState } from "react";

import { Link } from "react-router-dom";

import LoginHorizontal from "../components/section-layout/Login_horizontal";

const FindAccount = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      setError(false);
      // You can add search logic here
      console.log("Searching for:", inputValue);
    }
  };
  return (
    <>
      <LoginHorizontal />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="">
          <div className="bg-white p-4 pb-2 rounded-t-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Find Your Account</h2>
          </div>
          <hr className="text-[#ccc]" />
          <div className="bg-white px-4 pt-4 pb-1 shadow-md w-full max-w-lg">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong className="font-bold">
                  Please fill in at least one field
                </strong>
                <p className="text-sm">
                  Fill in at least one field to search for your account
                </p>
              </div>
            )}

            <p className="mb-4 text-gray-700">
              Please enter your email address or mobile number to search for
              your account.
            </p>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 bg-white shadow-md w-full max-w-lg"
          >
            <div className="px-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Email address or mobile number"
                className="border border-[#cccccc] p-3 rounded-md text-sm w-full"
              />
            </div>

            <div className="border-t border-[#ccc] pt-4">
              <div className="flex justify-end gap-2 px-4 pb-4">
                <Link
                  to="/login"
                  className="bg-gray-300 text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-400"
                  onClick={() => setInputValue("")}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-1 px-4 rounded-md font-semibold hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindAccount;
