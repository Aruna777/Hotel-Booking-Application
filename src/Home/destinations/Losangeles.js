import React from "react";
import { useState } from "react";
import SearchForm from "../SearchForm";

const Losangeles = () => {
  const [guestDetails, setGuestDetails] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [dates, setDates] = useState({ checkin: "", checkout: "" });
  const [error, setError] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="flex flex-col items-center justify-center  bg-transparent h-full px-4 pt-16 sm:pt-20 md:pt-24">
      <p className=" text-white text-4xl sm:text-3xl md:text-5xl lg:text-4xl mb-6 font-bold text-center">
        Search Your Stays
      </p>
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
  );
};

export default Losangeles;
