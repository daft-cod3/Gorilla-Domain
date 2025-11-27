"use client";

import { useState, useEffect, useRef } from "react";
import { vehicleParts } from "../data/vehiclePartsData";
import Image from 'next/image'

export default function VehiclePartsStudy() {
  const [selectedPart, setSelectedPart] = useState(null);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    if (selectedPart && imageSectionRef.current) {
      imageSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPart]);

  const selectedPartData = selectedPart ? vehicleParts.find((p) => p.id === selectedPart) : null;

  return (
    <main className="dark:bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:text-white mt-10 p-10   mx-auto">
      <h1 className="text-3xl font-semibold mb-6 py-4 text-center">
        Vehicle Parts Study page
      </h1>
      <div ref={imageSectionRef} className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center max-w-4xl mx-auto min-h-[220px]">
        {selectedPart && selectedPartData ? (
          <>
            <Image src={selectedPartData.images[0]} 
            alt={selectedPartData.name} 
            width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
            <Image src={selectedPartData.images[1]} 
            alt={selectedPartData.name} 
            width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
            <Image src={selectedPartData.images[2]} 
            alt={selectedPartData.name}
              width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
            <Image src={selectedPartData.images[3]} 
            alt={selectedPartData.name}
              width={200} height={200} 
              className="rounded-lg shadow-md w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
          </>
        ) : (
          <div className="col-span-2 md:col-span-4 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-500 dark:border-gray-400 bg-transparent text-gray-500 dark:text-gray-400 text-lg font-light">
            Please select a vehicle part to view images
          </div>
        )}
      </div>
      {selectedPart && selectedPartData && (
        <div className="p-4 border rounded bg-white dark:bg-gray-800 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
            {selectedPartData.name}
          </h2>
          <p className="text-gray-900 dark:text-white">
            {selectedPartData.description}
          </p>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Vehicle Parts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {vehicleParts.map((part) => (
            <div
              key={part.id}
              className="p-4 border rounded cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col items-center text-center space-y-2"
              onClick={() => setSelectedPart(part.id)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key==='Enter') setSelectedPart(part.id)}}
              role="button"
            >
              <Image src={part.images[0]} 
              alt={part.name} 
              width={60} 
              height={60}
              className="rounded-full transition-transform duration-300 hover:scale-110" />
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                {part.name}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
