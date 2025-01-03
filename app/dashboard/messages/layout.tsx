"use client";

import { useState } from "react";
import MessageLinks from "@/app/ui/dashboard/message-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isChildVisible, setIsChildVisible] = useState(false);

  const handleLinkClick = () => {
    setIsChildVisible(true);
  };

  const handleBackClick = () => {
    setIsChildVisible(false);
  };

  return (
    <div className="flex flex-grow h-full p-2 md:flex-row md:overflow-hidden">
      {/* Sidebar for medium and larger screens */}

      <div className="flex flex-row h-full w-full flex-none lg:w-52 hidden lg:block">
        <MessageLinks onLinkClick={handleLinkClick} />
      </div>

      {/* Sidebar for small screens */}
      <div className="flex  h-4/5 w-full flex-none lg:w-52 block lg:hidden">
        {!isChildVisible ? (
          <div className="flex flex-col p-16">
          <MessageLinks onLinkClick={handleLinkClick} />
          </div>
        ) : (
          <div className="p-6">
            <button
              onClick={handleBackClick}
              className="mb-4 text-white p-2 overflow-y-auto rounded-md bg-green-500 hover:text-yellow-500 focus:outline-none"
            >
              Back
            </button>
            <div className="flex h-full">
              <div className="flex-grow flex-col shadow-md overflow-y-auto bg-white rounded-md">
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Main content area for medium and larger screens */}
      
      <div className="flex-col flex-grow hidden lg:block md:overflow-y-auto md:px-12 bg-gray-50">
        {children}
      </div>
      
    </div>
  );
}
