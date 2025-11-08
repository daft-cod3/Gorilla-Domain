import Image from 'next/image'

export default function RoadSign({signName, signDetail, signIcon}){
    return(
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-blue-800
             transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="aspect-w-16 aspect-h-9 relative h-30 overflow-hidden">
               <Image
                src={signIcon}
                alt={signName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-transform duration-700 group-hover:scale-110 rounded-b-lg"
                quality={60}
               />
               
            </div>
            <div className="p-4 relative">
                <h2 className="font-bold text-2xl leading-relaxed">
                    {signName}
                </h2>
                <p className="p-4 m-2 text-sm dark:text-white">
                    {signDetail}
                </p>
            </div>
        </div>
    );
}