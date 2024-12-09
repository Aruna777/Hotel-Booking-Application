import React from "react";

const ExplorePage = ({ setExplorePage }) => {
  const Explore = [
    {
      title: "Hotel Stays",
      description: "Earn points for nights spent in hotels and homes & villas",
    },
    {
      title: "Tours & Activities",
      description:
        "Enhance your travel and earn points for activities everyone will love",
    },
    {
      title: "Travel Partners",
      description: "Earn on the go and while you spend",
    },

    {
      title: "Hotel nights & more",
      description: "Use points for dining, golf, spas, and more during a stay.",
    },
    {
      title: "Flights, cars & Rentals",
      description: "Go further with our partner loyalty programs",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={() => setExplorePage(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Explore Serene Stays
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {Explore.map((Explore, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg shadow-md w-56 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {Explore.title}
              </h3>
              <p className="text-gray-600">{Explore.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
