"use client";

import Image from 'next/image';

export default function RegulatorySigns() {
  const regulatorySigns = [
    {
      name: "Speed Limit",
      image: "/general-quiz/speed-limit.jpg",
      description: "Indicates the maximum speed allowed on the road."
    },
    {
      name: "No Parking",
      image: "/general-quiz/no-parking.jpg",
      description: "Prohibits parking in the designated area."
    },
    {
      name: "One Way",
      image: "/general-quiz/one-way.jpg",
      description: "Indicates traffic flow in one direction only."
    },
    // Add more regulatory signs as needed
  ];

  return (
    <main className="mt-16 p-10 dark:bg-gray-950 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold mb-6">Regulatory Signs</h1>
        <p className="text-lg mb-8">Learn about regulatory signs that control traffic behavior.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regulatorySigns.map((sign, index) => (
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
