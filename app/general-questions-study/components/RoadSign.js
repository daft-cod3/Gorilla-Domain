import Image from 'next/image'

export default function RoadSign({ signName, signDetail, signIcon }) {
    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-105 max-w-xs w-full">
            <div className="relative h-48 overflow-hidden">
               <Image
                src={signIcon}
                alt={signName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-transform duration-700 group-hover:scale-110 object-cover"
                quality={60}
               />
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <h2 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        {signName}
                    </h2>
                </div>
                <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {signDetail}
                    </p>
                </div>
            </div>
        </div>
    );
}
