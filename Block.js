"use client";


import {useRouter} from 'next/navigation';

export default function Block({luckyHeader, luckyPara}){
    const router = useRouter();

    return(
        <div
        className="border border-blue-400 rounded-lg p-4 m-2 shadow-md hover:shadow-lg
         hover:scale-105 transition-all duration-300 max-w-sm w-full"
        >
            <div>
                <h3 className="font-bold text-3xl p-4">
                    {luckyHeader}
                </h3>
            </div>
            <span>
                <p className="text-sm p-2">
                    {luckyPara}
                </p>
            </span>
            <div>
          <button
          onClick = {() => router.push(route)}
          className="border bg-blue-600 p-2 rounded-lg  border-gray-300 m-6
           font-bold hover:bg-blue-700 transition duration-400 hover:cursor-pointer hover:shadow-lg">
            Get started
          </button>
        </div>

        </div>
    )
}