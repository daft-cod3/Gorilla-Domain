"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 fixed
     w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700 mb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="text-xl font-bold">
          <Link href="/">
            Gorilla Domain
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`sm:flex sm:items-center sm:static absolute border border-gray-200 dark:border-gray-700 sm:rounded-full
             bg-white dark:bg-gray-800 w-full left-0 sm:w-auto sm:py-0 py-4 text-sm font-serif
             sm:opacity-100 transition-all duration-300 ease-in ${
            isOpen ? "top-14 opacity-100" : "top-[-490px] opacity-0"
          }`}
        >
          <li className="mx-4 my-2 sm:my-0 p-3">
            <Link href="/" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              Home
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/vehicle-parts-study" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              Vehicle Parts Notes
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/vehicle-parts-quiz" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              Vehicle Parts Quiz
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/general-questions-study" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              General Questions Notes
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/general-questions-quiz" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              General Questions Quiz
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/driving-simulation" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              Driving Simulation
            </Link>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <Link href="/model-town-board-study" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-400">
              Model Town Board Study
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
