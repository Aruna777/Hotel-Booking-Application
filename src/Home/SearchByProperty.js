import React, { useRef } from "react";
import { Link } from "react-router-dom";
import apartments from "../assets/apartments.jpg";
import cabins from "../assets/cabins.jpg";
import hotels from "../assets/hotels.jpg";
import guesthouses from "../assets/guesthouses.jpg";
import farmstays from "../assets/farmstays.jpg";
import villas from "../assets/villas.jpg";
import resorts from "../assets/resorts.jpg";
import luxurytents from "../assets/luxurytents.jpg";
import motels from "../assets/motels.jpg";

const SearchByProperty = () => {
  const propertyTypes = [
    { name: "Hotels", image: hotels, link: "/hotelsPage" },
    {
      name: "Apartments",
      image: apartments,
      link: "/apartments",
    },
    { name: "Resorts", image: resorts, link: "/resorts" },
    { name: "Cabins", image: cabins, link: "/cabins" },
    { name: "Villas", image: villas, link: "/villas" },
    {
      name: "Guest Houses",
      image: guesthouses,
      link: "/guesthouses",
    },
    { name: "Motels", image: motels, link: "/motels" },
    {
      name: "Luxury Tents",
      image: luxurytents,
      link: "/luxurytents",
    },
    {
      name: "Farm Stays",
      image: farmstays,
      link: "/farmstays",
    },
  ];

  const scrollRef = useRef();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className=" container my-8">
      <h2 className=" text-white text-center text-4xl font-bold mb-4">
        Search by Property Type
      </h2>
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 hover:bg-gray-600 z-10"
        >
          &lt;
        </button>

        {/* Property Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 py-4"
        >
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex-none w-56 h-72 bg-gray-100 rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform duration-200"
            >
              <Link to={type.link} className="block w-full h-full">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-56 object-cover"
                />
                <div className="text-center text-lg font-semibold text-gray-800 p-2">
                  {type.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SearchByProperty;
