import React from "react";

const OffersPage = () => {
  const offers = [
    {
      title: "2X Points",
      description: "Earn double Serene Points for each night of your stay.",
      category: "Earn Points",
    },
    {
      title: "Serene Discount Advance Purchase",
      description:
        "Save up to 17% off our Best Available Rate* by booking in advance. It pays to plan ahead!",
      category: "Discount",
    },
    {
      title: "Breakfast Included",
      description:
        "Fuel your day with breakfast included for every registered guest, each night of your stay.",
      category: "Kids and family",
    },
    {
      title: "SS Members Save",
      description: "SS Members, Save up to 10%",
      category: "Membership",
    },
    {
      title: "Park, Stay, & Go",
      description:
        "Get parking plus shuttle service to and from select airports and cruise ports with the Park, Stay, & Go offer. Available at participating hotels.",
      category: "Hotel credit",
    },
    {
      title: "Military Family Rate",
      description:
        "Active and retired military, veterans, and their families enjoy exclusive savings at participating hotels.",
      category: "Discount",
    },
    {
      title: "Senior Rate",
      description:
        "Seniors and their families can save up to 7% off our Best Available Rate* when traveling together.",
      category: "Discount",
    },
    {
      title: "Earn Points with Lyft",
      description:
        "Link your Serene Stays and Lyft accounts to earn Points on every ride or redeem SS Points for Lyft ride credits.",
      category: "Earn Points",
    },
    {
      title: "Credit Card Bonus",
      description:
        "Reveal your mystery Points offer and receive up to 100% more Bonus Points for free when you purchase today.",
      category: "Credit Card",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          Serene Stays Special Offers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-800">{offer.title}</h2>
              <p className="text-gray-600 mt-2">{offer.description}</p>
              <span className="text-sm text-blue-600 mt-4 inline-block">
                {offer.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
