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
              hover:bg-opacity-50 border-blue-300 hover:border-blue-500"
              onClick={() => setSelectedZone(zone.id)}
            >
              <h3 className="font-bold">
                {zone.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                {zone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
