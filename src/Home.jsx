import React, { useState } from "react";

const Home = () => {
  const [guestDetails, setGuestDetails] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGuestChange = (field, value) => {
    setGuestDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-transparent bg-opacity-50">
      <div className="flex flex-col items-center justify-center h-full w-full px-4 bg-transparent bg-opacity-50">
        <p className="text-white text-5xl font-bold mb-8">
          Welcome to Serene Stays
        </p>
        <div className="flex flex-wrap items-center justify-between bg-white rounded-lg shadow-lg p-6 gap-4 w-full max-w-6xl">
          {/* Destination Search */}
          <div className="flex flex-col">
            <label
              htmlFor="destination"
              className="text-gray-700 font-medium mb-1"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Where are you going?"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label htmlFor="checkin" className="text-gray-700 font-medium mb-1">
              Check-in
            </label>
            <input
              type="date"
              id="checkin"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Check-out Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkout"
              className="text-gray-700 font-medium mb-1"
            >
              Check-out
            </label>
            <input
              type="date"
              id="checkout"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Guests and Rooms Dropdown */}
          <div className="relative">
            <label htmlFor="guests" className="text-gray-700 font-medium mb-1">
              Guests & Rooms
            </label>
            <div
              onClick={toggleDropdown}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {guestDetails.adults} Adults, {guestDetails.children} Children,{" "}
              {guestDetails.rooms} Rooms
            </div>
            {isDropdownOpen && (
              <div className="absolute bg-white border rounded-lg shadow-lg p-4 mt-2 z-10 w-64">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Adults</span>
                  <input
                    type="number"
                    min="1"
                    value={guestDetails.adults}
                    onChange={(e) =>
                      handleGuestChange("adults", +e.target.value)
                    }
                    className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Children</span>
                  <input
                    type="number"
                    min="0"
                    value={guestDetails.children}
                    onChange={(e) =>
                      handleGuestChange("children", +e.target.value)
                    }
                    className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Rooms</span>
                  <input
                    type="number"
                    min="1"
                    value={guestDetails.rooms}
                    onChange={(e) =>
                      handleGuestChange("rooms", +e.target.value)
                    }
                    className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
