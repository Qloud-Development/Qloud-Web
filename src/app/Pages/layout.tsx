'use client';
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "../components/Sidebar";
import Recommended from "../components/Recommended"; // Assuming you have a component for recommended stories
import BottomTabBar from "../components/Bottombar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen] = useState(false);
  const [isRecommendedStoriesOpen] = useState(false);



  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow relative">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 bg-white shadow-md transition-transform transform h-[calc(100vh-4rem)] ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:w-1/5 z-40`}
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 lg:ml-1/5 h-[calc(100vh-4rem)] overflow-auto">
          {children}
        </main>

        {/* Recommended Section */}
        <aside
          className={`fixed inset-y-0 right-0 bg-white shadow-md p-6 transition-transform transform h-[calc(100vh-4rem)] ${
            isRecommendedStoriesOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:relative lg:w-1/4 z-40`}
        >
          <Recommended />
        </aside>
      </div>

      {/* Bottom Tab Bar */}
      <div className="w-full h-16 bg-white shadow-md sticky bottom-0 z-50">
        <BottomTabBar />
      </div>
    </div>
  );
};

export default Layout;
