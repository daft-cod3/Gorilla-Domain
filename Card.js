"use client";

import { useRouter } from "next/navigation";

export default function Card({ title, description, route }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="cursor-pointer bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border
       hover:shadow-lg hover:scale-105 hover:border-blue-400 transition-all duration-400 max-w-xs w-full"
    >
      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>
      <p className="text-gray-900 dark:text-white">
        {description}
      </p>
    </div>
  );
}
