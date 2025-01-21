"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdHome,
  MdFolder,
  MdCalendarToday,
  MdGroup,
  MdSettings,
  MdHelpOutline,
  MdCall,
} from "react-icons/md"; // Material Icons
import {BiNetworkChart, BiLogIn, BiMap } from "react-icons/bi"; // Boxicons
import { AiOutlineMenu } from "react-icons/ai"; // Menu Icon for mobile

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      // Close the sidebar for mobile devices
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button (Visible on Mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-md"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-black w-64 p-6 flex flex-col z-40 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/profile" onClick={handleLinkClick}>
            <Image
              src="/assets/profile-icon-9.png"
              alt="Profile Image"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
          </Link>
          <p className="text-xl font-semibold">Marwan Al Asadi</p>
          <p className="text-sm text-gray-400">@hisroyalfreshness</p>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-3 flex-grow mb-4">
          <Link
            href="/Pages/Home"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <MdHome size={24} />
            <span className="text-lg">Home</span>
          </Link>

          <Link
            href="/Pages/Files"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <MdFolder size={24} />
            <span className="text-lg">Files</span>
          </Link>

          <Link
            href="/Pages/Calendar"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <MdCalendarToday size={24} />
            <span className="text-lg">Calendar</span>
          </Link>

          <Link
            href="/Pages/Team"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <MdGroup size={24} />
            <span className="text-lg">Team</span>
          </Link>

          <Link
            href="/Pages/Maps"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <BiMap size={24} />
            <span className="text-lg">Maps</span>
          </Link>
          <Link
            href="/Pages/Portfolio"
            className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
            onClick={handleLinkClick}
          >
            <BiMap size={24} />
            <span className="text-lg">Portfolio</span>
          </Link>
          <div className="border-t border-gray-600 my-4" />

          {/* Footer Items */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/Pages/Settings"
              className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
              onClick={handleLinkClick}
            >
              <MdSettings size={24} />
              <span className="text-lg">Settings</span>
            </Link>

            <Link
              href="/Pages/Help"
              className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
              onClick={handleLinkClick}
            >
              <MdHelpOutline size={24} />
              <span className="text-lg">Help Center</span>
            </Link>

            <Link
              href="/Pages/Contact"
              className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
              onClick={handleLinkClick}
            >
              <MdCall size={24} />
              <span className="text-lg">Contact</span>
            </Link>

            <Link
              href="/Pages/Socialmedia"
              className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
              onClick={handleLinkClick}
            >
              <BiNetworkChart size={24} />
              <span className="text-lg">Social Media</span>
            </Link>

            <Link
              href="/"
              className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md"
              onClick={handleLinkClick}
            >
              <BiLogIn size={24} />
              <span className="text-lg">Logout</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
