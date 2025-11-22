"use client";

import { useState } from "react";

export default function StudyContentBlock({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-500 rounded-2xl mb-6">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-700 hover:bg-opacity-50 rounded-2xl
        focus:outline-none focus:bg-gray-600 transition-colors duration-300"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
         

        </div>
      </button>
    
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-700 dark:text-white">
          <p className="text-gray-700 dark:text-white">
            {content}
          </p>
        </div>
      )}
      
    </div>

  );
}
