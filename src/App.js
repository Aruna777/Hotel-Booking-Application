import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import backgroundImage from "./assets/image.jpg";
import OffersModal from "./navbar/OffersModal";
import MeetingsEvents from "./navbar/MeetingsEvents";
import ExplorePage from "./navbar/ExplorePage";
import MyTripsPage from "./navbar/MyTripsPage";
import Apartments from "./Home/properties/Apartments";
import Cabins from "./Home/properties/Cabins";
import HotelsPage from "./Home/properties/HotelsPage";
import Farmstays from "./Home/properties/FarmStays";
import Resorts from "./Home/properties/Resorts";
import Villas from "./Home/properties/Villas";
import GuestHouses from "./Home/properties/GuestHouses";
import Motels from "./Home/properties/Motels";
import LuxuryTents from "./Home/properties/LuxuruyTents";
import Newyork from "./Home/destinations/Newyork";
import Miami from "./Home/destinations/Miami";
import Lasvegas from "./Home/destinations/Lasvegas";
import Losangeles from "./Home/destinations/Losangeles";
import Chicago from "./Home/destinations/Chicago";

const App = () => {
  const [showOffersModal, setShowOffersModal] = useState(false);
  const [showMeetingsEvents, setMeetingsEvents] = useState(false);
  const [showExplorePage, setExplorePage] = useState(false);
  const [showMyTripsPage, setMyTripsPage] = useState(false);

  return (
    <Router>
      {/* <div className="bg-white"> */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar
          setShowOffersModal={setShowOffersModal}
          setMeetingsEvents={setMeetingsEvents}
          setExplorePage={setExplorePage}
          setMyTripsPage={setMyTripsPage}
        />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotelsPage" element={<HotelsPage />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/motels" element={<Motels />} />
          <Route path="/guesthouses" element={<GuestHouses />} />
          <Route path="/Luxurytents" element={<LuxuryTents />} />
          <Route path="/farmstays" element={<Farmstays />} />
          <Route path="/nyc" element={<Newyork />} />
          <Route path="/miami" element={<Miami />} />
          <Route path="/lasvegas" element={<Lasvegas />} />
          <Route path="/losangeles" element={<Losangeles />} />
          <Route path="/chicago" element={<Chicago />} />
        </Routes>

        {showOffersModal && (
          <OffersModal setShowOffersModal={setShowOffersModal} />
        )}

        {showMeetingsEvents && (
          <MeetingsEvents setMeetingsEvents={setMeetingsEvents} />
        )}
        {showExplorePage && <ExplorePage setExplorePage={setExplorePage} />}
        {showMyTripsPage && <MyTripsPage setMyTripsPage={setMyTripsPage} />}
      </div>
    </Router>
  );
};

export default App;
