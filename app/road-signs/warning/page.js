"use client";

import Image from 'next/image';

export default function WarningSigns() {
  const warningSigns = [
    {
      name: "Stop Sign",
      image: "/general-quiz/stop-sign.jpg",
      description: "A red octagonal sign that requires vehicles to come to a complete stop."
    },
    {
      name: "Yield Sign",
      image: "/general-quiz/yield-sign.jpg",
      description: "A triangular sign that indicates vehicles must yield the right-of-way."
    },
    {
      name: "No Entry",
      image: "/general-quiz/no-entry.jpg",
      description: "A sign that prohibits entry into a road or area."
    },
    // Add more warning signs as needed
  ];

  return (
    <main className="mt-16 p-10 dark:bg-gray-950 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold mb-6">Warning Signs</h1>
        <p className="text-lg mb-8">Learn about various warning signs and their meanings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warningSigns.map((sign, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={sign.image}
                alt={sign.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{sign.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{sign.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
