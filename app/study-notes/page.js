 "use client";

import { useState, useEffect, useRef } from "react";
import RoadSign from "../components/RoadSign";
import StudyContentBlock from "../components/StudyContentBlock";
import Card from "../components/Card";
import { generalQuestionsStudy } from "../data/generalQuestionsData";
import { vehicleParts } from "../data/vehiclePartsData";
import Image from 'next/image'

export default function StudyNotes() {
  const [selectedPart, setSelectedPart] = useState(null);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    if (selectedPart && imageSectionRef.current) {
      imageSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPart]);

  const selectedPartData = selectedPart ? vehicleParts.find((p) => p.id === selectedPart) : null;
  return (
    <main className="mt-16 p-10 dark:bg-gray-950 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold mb-6">Study Notes</h1>
        <p className="text-lg mb-8">Comprehensive study notes combining general questions and vehicle parts.</p>
      </div>

      
      <section className=" p-10  dark:text-white">
      <div>
        <h1 className="text-4xl font-bold mb-6 flex item-center justify-center">
          General Questions Study
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="General Rules of the Road"
          description="Learn the basic rules for safe driving on the road."
          route="/general-rules-of-the-road"
        />
        <Card
          title="Theory Notes"
          description="Study theoretical concepts related to driving."
          route="/theory-notes"
        />
      </div>
  </section>

      
      <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-6 flex item-center justify-center">
          Road Signs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RoadSign
            signName="Warning Signs"
            signIcon="/general-quiz/warning.jpg"
            route="/road-signs/warning"
          />
          <RoadSign
            signName="Regulatory Signs"
            signIcon="/general-quiz/regulatory.jpg"
            route="/road-signs/regulatory"
          />
          <RoadSign
            signName="Informatory Signs"
            signIcon="/general-quiz/informatory.jpg"
            route="/road-signs/informatory"
          />
        </div>
      </section>




    <section className=" dark:text-white mt-10 p-10   mx-auto">
      <h1 className="text-4xl font-semibold mb-6 py-4 text-center">
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
    </section>
    </main>
  )
}