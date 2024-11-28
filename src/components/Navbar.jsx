import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-24 mr-2" />
          <h1 className="text-white text-4xl font-extrabold font-serif italic">
            Serene Stays
          </h1>
        </div>
        <div className="flex space-x-4 mb-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="bg-blue-900 py-1 mt-1">
        <div className="container mx-auto flex justify-center space-x-12 text-xl ">
          <Link
            to="/offers"
            className="px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            Explore
          </Link>
          <Link
            to="/meetings-events"
            className="px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            Meetings & Events
          </Link>
          <Link
            to="/explore"
            className="px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            Offers
          </Link>
          <Link
            to="/explore"
            className="px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition font-sans"
          >
            My Trips
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
