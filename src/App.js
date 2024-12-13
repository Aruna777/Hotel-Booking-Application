import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import backgroundImage from "./assets/image.jpg";
import OffersModal from "./navbar/OffersModal";
import MeetingsEvents from "./navbar/MeetingsEvents";
import ExplorePage from "./navbar/ExplorePage";
import MyTripsPage from "./navbar/MyTripsPage";
import { routes } from "./Home/RoutesConfig";

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
          {" "}
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
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
