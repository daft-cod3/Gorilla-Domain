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
    <main className="dark:bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:text-white mt-10 p-10">
      <h1 className="text-3xl font-bold mb-6 py-4">
        Vehicle Parts Study page
      </h1>
      {selectedPart && selectedPartData && (
        <div ref={imageSectionRef} className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-1 justify-center max-w-4xl mx-auto">
          <Image src={selectedPartData.images[0]} alt={selectedPartData.name} 
          width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover" />
          <Image src={selectedPartData.images[1]} alt={selectedPartData.name} 
          width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover" />
          <Image src={selectedPartData.images[2]} alt={selectedPartData.name}
           width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover" />
          <Image src={selectedPartData.images[3]} alt={selectedPartData.name}
           width={200} height={200} className="rounded-lg shadow-md w-full h-full object-cover" />
        </div>
      )}
      {selectedPart && selectedPartData && (
        <div className="p-4 border rounded bg-white dark:bg-gray-800 shadow mb-6">
          <h2 className="text-xl font-bold mb-2 text-blue-700">
            {selectedPartData.name}
          </h2>
          <p className="text-gray-900 dark:text-white">
            {selectedPartData.description}
          </p>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">
          Vehicle Parts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {vehicleParts.map((part) => (
            <div
              key={part.id}
              className="p-4 border rounded cursor-pointer hover:bg-gray-700 mb-6"
              onClick={() => setSelectedPart(part.id)}
            >
              <Image src={part.images[0]} alt={part.name} width={50} height={50}
               className="rounded-full"/>
              <h3 className="font-bold text-blue-500">{part.name}</h3>
              <p className="text-sm text-gray-900 dark:text-white">
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
