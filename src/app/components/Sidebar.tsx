'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdHome, MdFolder, MdCalendarToday, MdGroup, MdSettings, MdHelpOutline, MdCall } from 'react-icons/md';  // Material Icons
import { FaChalkboardTeacher } from 'react-icons/fa';  // FontAwesome Icons
import { FiMic } from 'react-icons/fi';  // Feather Icons
import { BiLink, BiNetworkChart, BiLogIn } from 'react-icons/bi';  // Boxicons

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white text-black w-64 h-screen p-6 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <Link href="/profile">
          <Image
            src="Qloud-Web/assets/profile-icon-9.png"
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
      <div className="flex flex-col space-y-4 flex-grow">
        <Link href="/home" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdHome size={24} />
          <span className="text-lg">Home</span>
        </Link>

        <Link href="/files" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdFolder size={24} />
          <span className="text-lg">Files</span>
        </Link>

        <Link href="/calendar" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdCalendarToday size={24} />
          <span className="text-lg">Calendar</span>
        </Link>

        <Link href="/mentor" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <FaChalkboardTeacher size={24} />
          <span className="text-lg">Mentor</span>
        </Link>

        <Link href="/team" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdGroup size={24} />
          <span className="text-lg">Team</span>
        </Link>

        <Link href="/links" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <BiLink size={24} />
          <span className="text-lg">Links</span>
        </Link>

        <Link href="/speeches" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <FiMic size={24} />
          <span className="text-lg">Speeches</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6" />

      {/* Footer Items */}
      <div className="flex flex-col space-y-4">
        <Link href="/settings" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdSettings size={24} />
          <span className="text-lg">Settings</span>
        </Link>

        <Link href="/help" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdHelpOutline size={24} />
          <span className="text-lg">Help Center</span>
        </Link>

        <Link href="/contact" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <MdCall size={24} />
          <span className="text-lg">Contact</span>
        </Link>

        <Link href="/socialmedia" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <BiNetworkChart size={24} />
          <span className="text-lg">Social Media</span>
        </Link>

        <Link href="/" className="flex items-center space-x-4 hover:bg-black hover:text-white p-2 rounded-md">
          <BiLogIn size={24} />
          <span className="text-lg">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
