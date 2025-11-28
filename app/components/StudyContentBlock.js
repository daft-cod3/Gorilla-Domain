"use client";

import { useState } from "react";

export default function StudyContentBlock({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative border border-blue-500 rounded-2xl">

      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full text-left p-4 bg-gray-700 hover:bg-opacity-50 rounded-2xl
        focus:outline-none focus:bg-gray-600 transition-colors duration-300"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>


        </div>
      </button>

      <div className={`absolute top-full left-0 w-full p-4 bg-white dark:bg-gray-700 dark:text-white rounded-2xl shadow-lg transition-opacity duration-300 ease-in-out z-10 pointer-events-none ${isOpen || isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-gray-700 dark:text-white">
          {content}
        </p>
      </div>

    </div>

  );
}
