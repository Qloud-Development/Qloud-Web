'use client'
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-8">Follow Us</h1>

      {/* Social Media Options */}
      <div className="space-y-4 w-full max-w-md">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaFacebook size={28} className="text-[#4267B2]" />
          <span className="ml-4 text-lg font-medium text-black">Facebook</span>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaTwitter size={28} className="text-[#1DA1F2]" />
          <span className="ml-4 text-lg font-medium text-black">Twitter</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaInstagram size={28} className="text-[#C13584]" />
          <span className="ml-4 text-lg font-medium text-black">Instagram</span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaLinkedin size={28} className="text-[#0077B5]" />
          <span className="ml-4 text-lg font-medium text-black">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
