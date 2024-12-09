import React from "react";

const MeetingsEvents = ({ setMeetingsEvents }) => {
  const Meetings = [
    {
      title: "Meetings & Events Overview",
      description:
        "Great events start with a shared vision and careful planning.",
    },
    {
      title: "Business Meetings",
      description: "Collaboration is the foundation of innovation and success.",
    },
    {
      title: "Weddings",
      description:
        "Every love story is beautiful, but yours is our favorite to celebrate.",
    },
    {
      title: "Social Events",
      description: "Memories are made when friends and laughter come together.",
    },
    {
      title: "Group Travel",
      description:
        "The journey is as rewarding as the destination when shared with others.",
    },
    {
      title: "Conference Room",
      description: "A room filled with ideas is a room full of possibilities.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={() => setMeetingsEvents(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Serene Stays Meetings & Events
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {Meetings.map((Meetings, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg shadow-md w-56 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {Meetings.title}
              </h3>
              <p className="text-gray-600">{Meetings.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetingsEvents;
