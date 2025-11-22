"use client";

import { useRouter } from "next/navigation";

export default function Card({ title, description, route }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="card-component group cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 max-w-xs w-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/60 to-blue-950/60" />
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
        {description}
      </p>
      <span className="block h-0.5 w-8 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-4 rounded-full" />
    </div>
  );
}
