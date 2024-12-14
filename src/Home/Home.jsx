import React, { useState } from "react";
import TrendingDestinations from "./TrendingDestinations";
import SearchByProperty from "./SearchByProperty";
import SearchForm from "./SearchForm";

const Home = () => {
  const [guestDetails, setGuestDetails] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [dates, setDates] = useState({ checkin: "", checkout: "" });
  const [error, setError] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="flex flex-col items-center justify-center pt-24">
      {/* <div
        className=" justify-center w-full max-w-full h-screen rounded-lg overflow-hidden bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      > */}
      <p className="text-blue-950 text-4xl sm:text-3xl md:text-5xl lg:text-4xl mb-6 font-bold text-center">
        Search Your Stays
      </p>
      <p className="text-blue-950 text-center text-2xl mb-10">
        From cozy bed & breakfast to luxury hotels
      </p>
      <div className="p-6 sm:p-8 md:p-10">
        <SearchForm
          guestDetails={guestDetails}
          setGuestDetails={setGuestDetails}
          dates={dates}
          setDates={setDates}
          destination={destination}
          setDestination={setDestination}
          error={error}
          setError={setError}
        />
      </div>
      {/* </div> */}

      {/* Trending Destinations Section */}
      <TrendingDestinations />

      {/* Search By Property Section */}
      <SearchByProperty />

      {/* Additional Content */}
      <div className="bg-gray-800 text-white w-full py-10 mt-64">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Company</h3>
              <ul className="space-y-2">
                <li>About Serene Stays</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>News</li>
                <li>CEO's Blog</li>
                <li>Our Stories</li>
                <li>Digital Accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Find Help</h3>
              <ul className="space-y-2">
                <li>Help & Contact Us</li>
                <li>Look Up Reservation</li>
                <li>Global Reservation Phone Numbers</li>
                <li>Book Here, Benefit Now</li>
                <li>Best Rate Guarantee Form</li>
                <li>Missing Stay Form</li>
                <li>Site Map</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Top Destinations</h3>
              <ul className="space-y-2">
                <li>Bahamas Hotels</li>
                <li>Boston Hotels</li>
                <li>Charleston Hotels</li>
                <li>Chicago Hotels</li>
                <li>Denver Hotels</li>
                <li>Island of Hawaii Hotels</li>
                <li>Las Vegas Hotels</li>
              </ul>
              <p className="mt-4 underline">View All Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
