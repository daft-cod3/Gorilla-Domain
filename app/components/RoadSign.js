import Link from 'next/link';

export default function RoadSign({ signName, signDetail, signIcon, route }) {
    const content = (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
                backgroundImage: signIcon ? `url(${signIcon})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '200px'
            }}
        >
            <div className="flex flex-col items-center justify-center space-y-4 h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 px-2 py-1 rounded">
                    {signName}
                </h3>
                {signDetail && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 px-2 py-1 rounded">
                        {signDetail}
                    </p>
                )}
            </div>
        </div>
    );

    if (route) {
        return (
            <Link href={route}>
                {content}
            </Link>
        );
    }

    return content;
}
