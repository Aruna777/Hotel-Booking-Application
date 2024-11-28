import React from "react";
import backgroundImage from "./assets/image.jpg";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">
          Welcome to Serene Stays
        </h1>
      </div>
    </div>
  );
};

export default Home;
