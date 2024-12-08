import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import backgroundImage from "./assets/image.jpg";
import OffersPage from "./navbar/OffersPage";

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
