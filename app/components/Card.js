"use client";

import { useRouter } from "next/navigation";

export default function Card({ title, description, route }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl p-6 border border-gray-200 dark:border-gray-700 max-w-xs w-full transition-all duration-500 ease-out hover:scale-105"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="block h-0.5 w-8 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
      </div>
    </div>
  );
}
