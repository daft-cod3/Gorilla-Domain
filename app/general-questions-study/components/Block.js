"use client";

import { useRouter } from 'next/navigation';

export default function Block({ luckyHeader, luckyPara, route }) {
    const router = useRouter();

    return (
        <div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out max-w-sm w-full cursor-pointer group"
            onClick={() => router.push(route)}
        >
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {luckyHeader}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {luckyPara}
                </p>
            </div>
            <div className="mt-4 text-center">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                    Get started
                </button>
            </div>
        </div>
    );
}
