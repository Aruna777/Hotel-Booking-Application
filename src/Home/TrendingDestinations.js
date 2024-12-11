import React from "react";
import Miami from "../assets/Miami.jpg";
import NewYork from "../assets/newyork.jpg";
import Chicago from "../assets/chicago.jpg";
import LosAngeles from "../assets/losangeles.jpg";
import LasVegas from "../assets/lasvegas.jpg";

const TrendingDestinations = () => {
  const destinations = [
    {
      name: "New York City",
      image: NewYork,
    },
    {
      name: "Miami",
      image: Miami,
    },

    {
      name: "Las Vegas",
      image: LasVegas,
    },
    {
      name: "Los Angeles",
      image: LosAngeles,
    },
    {
      name: "Chicago",
      image: Chicago,
    },
  ];

  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Trending Destinations
        </h2>
        <p className="text-white text-center text-2xl mb-10">
          Most popular choices for travelers from the United States
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.slice(0, 2).map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {destinations.slice(2).map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
