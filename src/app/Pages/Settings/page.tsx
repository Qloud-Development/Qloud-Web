'use client'
import { useState } from "react";

const Settings = () => {
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleOptionPress = (option: string) => {
    setExpandedOption((prev) => (prev === option ? null : option));
  };

  const renderOption = (category: string, options: string[]) => (
    <div key={category} className="mb-6">
      <button
        className={`w-full text-left px-6 py-4 rounded-lg border border-gray-300 transition-all duration-300 ${
          expandedOption === category
            ? "bg-black text-white border-black shadow-md"
            : "bg-white text-black hover:bg-gray-100"
        }`}
        onClick={() => handleOptionPress(category)}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{category}</span>
          <span
            className={`transform transition-transform ${
              expandedOption === category ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
      </button>
      {expandedOption === category && (
        <div className="mt-4 space-y-3 pl-6 border-l-2 border-gray-300 animate-fadeIn">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              <span className="text-gray-700">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Settings
        </h1>
        <div className="space-y-6">
          {renderOption("Account Settings", [
            "Change Password",
            "Update Email",
            "Manage Subscriptions",
          ])}
          {renderOption("Notification Preferences", [
            "Email Notifications",
            "Push Notifications",
            "SMS Notifications",
          ])}
          {renderOption("Privacy Settings", [
            "Block/Unblock Users",
            "Manage Data Sharing",
            "Two-Factor Authentication",
          ])}
          {renderOption("Appearance", [
            "Dark Mode",
            "Light Mode",
            "Customize Theme",
          ])}
          {renderOption("Language", ["English", "French", "Spanish", "German"])}
          {renderOption("App Preferences", [
            "Clear Cache",
            "App Version Info",
            "Reset to Default Settings",
          ])}
        </div>
      </div>
    </div>
  );
};

export default Settings;
