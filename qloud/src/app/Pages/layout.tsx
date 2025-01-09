import React, { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar';
import Recommended from '../components/Recommended';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/8 bg-white shadow-md">
        <Sidebar />
      </aside>
      
      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100 h-screen overflow-y-auto">
        {children}
      </main>

      {/* Recommended Section */}
      <aside className="w-1/4 bg-white shadow-md p-6">
        <Recommended />
      </aside>
    </div>
  );
};

export default Layout;
