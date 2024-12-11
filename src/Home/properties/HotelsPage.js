import React, { useState } from "react";
import SearchForm from "../Home";

const HotelsPage = () => {
  const [guestDetails, setGuestDetails] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [dates, setDates] = useState({
    checkin: "",
    checkout: "",
  });
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      {/* This is the SearchForm added to the Hotels page */}
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
      <h1>Hotels</h1>
      {/* Render the hotels data here */}
    </div>
  );
};

export default HotelsPage;
