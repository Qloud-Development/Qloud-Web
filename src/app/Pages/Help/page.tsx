'use client'
import { useState } from "react";

const HelpCenter = () => {
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleOptionPress = (option: string) => {
    setExpandedOption((prev) => (prev === option ? null : option));
  };

  const renderOption = (option: string, answer: string) => (
    <div key={option} className="mb-6">
      <button
        className={`w-full text-left px-6 py-5 bg-black border border-gray-700 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 ${
          expandedOption === option ? "bg-gray-900 text-white" : "text-gray-300"
        }`}
        onClick={() => handleOptionPress(option)}
      >
        <span className="text-lg font-semibold">{option}</span>
      </button>
      {expandedOption === option && (
        <div className="mt-3 p-6 bg-black border-l-4 border-white rounded-lg shadow-inner">
          <p className="text-sm font-bold text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-300 p-10">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Help Center
      </h1>

      <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl bg-white">
        {/* Section: FAQs */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-8 border-b border-gray-700 pb-2">
            FAQs
          </h2>
          {renderOption(
            "What is Qloud?",
            "Qloud is a platform designed to connect professionals and provide access to communities, tools, and mentorship opportunities."
          )}
          {renderOption(
            "How to use Qloud?",
            "Using Qloud is simple: sign up, join communities, and connect with like-minded individuals to collaborate and grow."
          )}
          {renderOption(
            "Subscription and Pricing",
            "Qloud offers various subscription plans tailored to meet individual and business needs. Visit our pricing page for more details."
          )}
        </div>

        {/* Section: Support */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-8 border-b border-gray-700 pb-2">
            Support
          </h2>
          {renderOption(
            "Report a Problem",
            "If you encounter any issues, please report them through our support form or contact our team directly."
          )}
          {renderOption(
            "Contact Support",
            "Our support team is available 24/7 to assist you. You can reach out to us via email or through the in-app chat feature."
          )}
        </div>

        {/* Section: Legal */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-8 border-b border-gray-700 pb-2">
            Legal
          </h2>
          {renderOption(
            "Terms of Service",
            "Our Terms of Service outline the rules and guidelines for using the Qloud platform. Please review them carefully."
          )}
          {renderOption(
            "Privacy Policy",
            "Qloud values your privacy. Read our Privacy Policy to understand how we collect, use, and protect your data."
          )}
          {renderOption(
            "Cookie Policy",
            "We use cookies to improve your experience on our platform. Learn more about our cookie usage in our Cookie Policy."
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
