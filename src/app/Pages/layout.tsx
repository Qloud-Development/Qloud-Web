'use client'
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "../components/Sidebar";
import Recommended from "../components/Recommended"; // Assuming you have a component for recommended stories
import BottomTabBar from "../components/Bottombar";
import { FiMenu, FiX } from "react-icons/fi"; // For the hamburger menu icon

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isRecommendedStoriesOpen, setRecommendedStoriesOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleRecommendedStories = () => {
    setRecommendedStoriesOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 bg-white shadow-md h-screen transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:w-1/5 z-50`}
        >
          <Sidebar />
        </aside>

        {/* Rectangular Mobile Hamburger Menu */}
        <div className="lg:hidden fixed top-6 left-6 z-50">
          <button
            className="flex items-center justify-center w-16 h-10 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 lg:ml-1/5">
          {children}
        </main>

        {/* Recommended Section */}
        <aside
          className={`fixed inset-y-0 right-0 bg-white shadow-md p-6 h-screen transition-transform transform ${
            isRecommendedStoriesOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:relative lg:w-1/4 z-50`}
        >
          <Recommended />
        </aside>
      </div>

      {/* Bottom Tab Bar */}
      <div className="w-full h-16 bg-white shadow-md sticky bottom-0">
        <BottomTabBar />
      </div>
    </div>
  );
};

export default Layout;
