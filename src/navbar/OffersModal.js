import React from "react";

const OffersModal = ({ setShowOffersModal }) => {
  const offers = [
    {
      title: "2X Points",
      description: "Earn double Serene Points for each night of your stay.",
    },
    {
      title: "Serene Discount Advance Purchase",
      description: "Save up to 17% off by booking in advance!",
    },
    {
      title: "Breakfast Included",
      description: "Fuel your day with breakfast for every registered guest.",
    },
    { title: "SS Members Save", description: "SS Members, Save up to 10%" },
    {
      title: "Park, Stay, & Go",
      description: "Get parking and shuttle services at select locations.",
    },
    {
      title: "Military Family Rate",
      description: "Special rates for active and retired military families.",
    },
    {
      title: "Senior Rate",
      description: "Save up to 7% when traveling with family.",
    },
    {
      title: "Earn Points with Lyft",
      description: "Link your account to earn or redeem SS Points on rides.",
    },
    {
      title: "Credit Card Bonus",
      description: "Reveal your mystery Points offer today!",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={() => setShowOffersModal(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Serene Stays Special Offers
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg shadow-md w-56 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersModal;
