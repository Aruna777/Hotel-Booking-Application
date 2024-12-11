import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = ({
  setShowOffersModal,
  setMeetingsEvents,
  setExplorePage,
  setMyTripsPage,
}) => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="bg-transparent py-4 border-b border-gray-100">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-24 mr-2" />
          <h1 className="text-white text-2xl sm:text-4xl font-extrabold font-serif italic">
            Serene Stays
          </h1>
        </div>
        {/* Sign In and Register links */}
        {!isAuthPage && (
          <div className="flex space-x-2 sm:space-x-4">
            <Link
              to="/login"
              className="px-2 sm:px-4 py-1 sm:py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-2 sm:px-4 py-1 sm:py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Navbar buttons */}
      {!isAuthPage && (
        <div className="bg-transparent mt-2 ">
          <div className="container mx-auto flex sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-12 text-xl">
            <button
              onClick={() => setExplorePage(true)}
              className="px-4 py-2bg-transparent text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              Explore
            </button>
            <button
              onClick={() => setMeetingsEvents(true)}
              className="px-4 py-2 bg-transparent text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              Meetings & Events
            </button>
            <button
              onClick={() => setShowOffersModal(true)}
              className="px-4 py-2 bg-transparent text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              Offers
            </button>
            <button
              onClick={() => setMyTripsPage(true)}
              className="px-4 py-2 bg-transparent text-white rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition font-sans"
            >
              My Trips
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
