"use client";

import { useState } from "react";
import { modelTownBoardZones } from "../data/modelTownBoardData";
import Image from 'next/image';

export default function ModelTownBoardStudy() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <main className="p-10 mt-10 dark:bg-gray-900 dark:text-white">

      <h1 className="text-2xl font-bold mb-6 p-4 text-gray-900 dark:text-white">
        Model Town Board Study
      </h1>

      <div className="relative w-84 h-64 bg-gray-300 rounded-lg m-auto mb-10 bg-[url(/model-town/model.png)] bg-no-repeat bg-center bg-cover">
        {/* Placeholder for town board SVG diagram */}
       
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full "
          xmlns="http://www.w3.org/2000/svg"
        >
         
          {modelTownBoardZones.map((zone) => (
            zone.position && typeof zone.position.x === 'number' && typeof zone.position.y === 'number' ? (
              <circle
                key={zone.id}
                cx={zone.position.x}
                cy={zone.position.y}
                r={2}
                fill={selectedZone === zone.id ? "blue" : "gray"}
                className="cursor-pointer text-white"
                onClick={() => setSelectedZone(zone.id)}
              />
            ) : null
          ))}
          
        </svg>
        
      </div>

      {selectedZone && (
        <div className="p-4 border rounded bg-white dark:bg-gray-800
         dark:text-white shadow border-blue-700">
          <h2 className="text-xl font-bold mb-2">
            {modelTownBoardZones.find((z) => z.id === selectedZone).name}
          </h2>
          <p className="text-gray-900 dark:text-white font-semibold">
            {modelTownBoardZones.find((z) => z.id === selectedZone).description}
          </p>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">
          All Town Board Features
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {modelTownBoardZones.map((zone, index) => (
            <div
              key={zone.id ?? index}
              className="p-4 border rounded cursor-pointer
              hover:bg-opacity-50 border-blue-300 hover:border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
              onClick={() => setSelectedZone(zone.id)}
            >
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {zone.name}
                </h3>
              </div>
              <div className="flex items-start">
                {zone.id === 1 && (
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-5 5a1 1 0 001.414 1.414L5 7.414V15a1 1 0 001 1h4a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h1a1 1 0 001-1V7.414l.293.293a1 1 0 001.414-1.414l-5-5z" />
                  </svg>
                )}
                {zone.id === 2 && (
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                )}
                {zone.id === 3 && (
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                )}
                {zone.id === 4 && (
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                )}
                <p className="text-sm text-gray-600 dark:text-white">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
