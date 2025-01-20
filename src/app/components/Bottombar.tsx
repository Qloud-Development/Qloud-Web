import React from 'react';
import Image from 'next/image';

const BottomTabBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center p-4 rounded-t-lg border-t-2 border-gray-300">
      <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
        <Image src="/assets/email.png" alt="Email" width={50} height={50} />
      </button>
      <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
        <Image src="/assets/marketplace.png" alt="Marketplace" width={50} height={50} />
      </button>
      <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
        <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
      </button>
      <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
        <Image src="/assets/connections.png" alt="Connections" width={50} height={50} />
      </button>
      <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
        <Image src="/assets/myra.png" alt="Myra" width={50} height={50} />
      </button>
    </div>
  );
};

export default BottomTabBar;
