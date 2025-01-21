'use client'

import { useState } from "react";

const profiles = [
  {
    id: "1",
    name: "Anne Boothman",
    location: "London, England",
    followers: "736K",
    connections: "174",
    interests: "3.3M",
    website1: "www.canva.com",
    website2: "www.qloudai.com",
    avatar: "/assets/profile-icon-9.png", // Replace with your avatar path
    profileImage: "/assets/design.jpg", // Replace with your image path
  },
  {
    id: "2",
    name: "Marwan Al Asadi",
    location: "London, England",
    followers: "222K",
    connections: "249",
    interests: "2.7M",
    website1: "www.canva.com",
    website2: "www.qloudai.com",
    avatar: "/assets/profile-icon-9.png",
    profileImage: "/assets/shoes.jpg",
  },
  // Add more profiles as needed
];

const LinksScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("End of List. You have viewed all profiles.");
    }
  };

  const handlePreviousProfile = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleConnect = (name: string) => {
    alert(`You sent a connection request to ${name}.`);
  };

  const renderProfile = (profile: any) => (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg transition-transform transform hover:scale-105">
      {/* Progress Bar */}
      <div className="flex space-x-2 mb-6">
        <div className="h-1 w-1/4 bg-black rounded-full"></div>
        <div className="h-1 w-1/4 bg-black rounded-full"></div>
        <div className="h-1 w-1/4 bg-gray-300 rounded-full"></div>
        <div className="h-1 w-1/4 bg-gray-300 rounded-full"></div>
      </div>

      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <img
          src={profile.avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-semibold text-black">{profile.name}</h2>
          <p className="text-gray-500">{profile.location}</p>
          <a
            href={`https://${profile.website1}`}
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.website1}
          </a>
          <br />
          <a
            href={`https://${profile.website2}`}
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.website2}
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between mb-6">
        <div className="text-center">
          <p className="text-xl font-bold text-black">{profile.followers}</p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-black">{profile.connections}</p>
          <p className="text-gray-400 text-sm">Connections</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-black">{profile.interests}</p>
          <p className="text-gray-400 text-sm">Interests</p>
        </div>
      </div>

      {/* Profile Image */}
      <img
        src={profile.profileImage}
        alt="profile"
        className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
      />

      {/* Connect Button */}
      <button
        onClick={() => handleConnect(profile.name)}
        className="bg-black text-white w-full py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
      >
        Connect
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center p-4 sm:p-8">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-black">Change Preferences</h1>
        <div className="bg-black text-white px-3 py-1 rounded-full">12</div>
        <button className="text-black text-2xl font-semibold">+</button>
      </div>

      {/* Profile Card */}
      <div className="flex-1 flex justify-center items-center w-full">
        {renderProfile(profiles[currentIndex])}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-xs sm:max-w-sm mb-8">
        <button
          onClick={handlePreviousProfile}
          className="text-3xl text-gray-600 hover:text-black transition-colors"
        >
          ←
        </button>
        <button
          onClick={handleNextProfile}
          className="text-3xl text-gray-600 hover:text-black transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LinksScreen;