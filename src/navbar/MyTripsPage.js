import React, { useState } from "react";
import useLogin from "../useLogin";

const MyTripsPage = ({ setMyTripsPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={() => setMyTripsPage(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          My Trips
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Look Up a Reservation */}
          <div className="flex-1 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Look Up a Reservation
            </h3>
            <p className="text-gray-600 mb-4">
              Complete this form to review, modify, or cancel a reservation. All
              fields are required.
            </p>
            {/* Reservation Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Confirmation Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  First Name on Reservation
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Last Name on Reservation
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
              >
                Find Reservation
              </button>
            </form>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="h-[90%] w-px bg-gray-300"></div>
          </div>
          {/* Sign In Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Sign In
            </h3>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
            <div className="mt-4 flex justify-between items-center">
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTripsPage;
