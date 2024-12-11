import React, { useState } from "react";
import { cities } from "./cities";

const SearchForm = ({
  guestDetails,
  setGuestDetails,
  dates,
  setDates,
  destination,
  setDestination,
  error,
  setError,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  const handleGuestChange = (field, value) => {
    setGuestDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDateChange = (field, value) => {
    setDates((prev) => {
      const newDates = { ...prev, [field]: value };

      if (
        newDates.checkin &&
        newDates.checkout &&
        new Date(newDates.checkout) <= new Date(newDates.checkin)
      ) {
        setError("Check-out date must be after check-in date.");
      } else {
        setError("");
      }

      return newDates;
    });
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (value) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (city) => {
    setDestination(city);
    setFilteredCities([]);
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-50 mt-auto m-4 shadow-lg shadow-gray p-6 gap-4 w-full max-w-6xl border border-gray-800 rounded-xl">
      {/* Destination Search */}
      <div className="flex flex-col relative w-full sm:w-1/2 lg:w-1/3">
        <label htmlFor="destination" className="text-black font-medium mb-1 ">
          Destination
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          placeholder="Where are you going?"
          className="border border-gray-300 rounded-lg px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        {filteredCities.length > 0 && (
          <div className="absolute top-full left-0 mt-1 text-black bg-white border rounded-lg shadow-lg w-full max-w-xs z-50 overflow-y-auto">
            {filteredCities.map((city, index) => (
              <div
                key={index}
                onClick={() => handleCitySelect(city)}
                className="cursor-pointer p-2 hover:bg-blue-100"
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Check-in and Check-out Dates */}
      <div className="flex flex-wrap gap-4 w-full sm:w-auto">
        <div className="flex flex-col">
          <label htmlFor="checkin" className="text-black font-medium mb-1">
            Check-in
          </label>
          <input
            type="date"
            id="checkin"
            value={dates.checkin}
            onChange={(e) => handleDateChange("checkin", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkout" className="text-black font-medium mb-1">
            Check-out
          </label>
          <input
            type="date"
            id="checkout"
            value={dates.checkout}
            onChange={(e) => handleDateChange("checkout", e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Guests and Rooms Dropdown */}
      <div className="relative dropdown w-full sm:w-auto">
        <label htmlFor="guests" className="text-black font-medium mb-1">
          Guests & Rooms
        </label>
        <div
          onClick={toggleDropdown}
          className="border text-black bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          {guestDetails.adults} Adults, {guestDetails.children} Children,{" "}
          {guestDetails.rooms} Rooms
        </div>
        {isDropdownOpen && (
          <div className="absolute bg-white border rounded-lg shadow-lg p-4 mt-2 z-50 w-64">
            <div className="flex justify-between items-center mb-2">
              <span className="text-black">Adults</span>
              <input
                type="number"
                min="1"
                value={guestDetails.adults}
                onChange={(e) => handleGuestChange("adults", +e.target.value)}
                className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-black">Children</span>
              <input
                type="number"
                min="0"
                value={guestDetails.children}
                onChange={(e) => handleGuestChange("children", +e.target.value)}
                className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black">Rooms</span>
              <input
                type="number"
                min="1"
                value={guestDetails.rooms}
                onChange={(e) => handleGuestChange("rooms", +e.target.value)}
                className="border border-gray-300 rounded-lg w-16 px-2 py-1 text-center focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex w-full sm:w-auto">
        {error && (
          <p className=" bg-white text-red-500 text-sm mb-2">{error}</p>
        )}
        <button
          className="bg-gray-700 text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition "
          disabled={
            !!error || !dates.checkin || !dates.checkout || !destination
          }
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
