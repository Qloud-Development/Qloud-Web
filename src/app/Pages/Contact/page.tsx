'use client'
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 bg-gray-100 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">Contact Us</h1>

        {/* Contact Credentials */}
        <div className="mb-8 text-center">
          <p className="text-lg font-semibold text-black mb-2">
            📍 Address: <span className="font-normal">123 Main Street, London, UK</span>
          </p>
          <p className="text-lg font-semibold text-black mb-2">
            📧 Email: <span className="font-normal">support@qloud.com</span>
          </p>
          <p className="text-lg font-semibold text-black">
            📞 Phone: <span className="font-normal">+44 123 456 7890</span>
          </p>
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-black focus:outline-none transition duration-200 bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-black focus:outline-none transition duration-200 bg-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-black focus:outline-none transition duration-200 bg-white h-32"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
