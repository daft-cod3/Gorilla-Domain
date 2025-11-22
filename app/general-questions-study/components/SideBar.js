"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



    const menuItems = [
        {
            name:"Dashboard",
            //add the svg icons here= icon:"",
            path:"/"
        },
        {
            name:"Messages",
            //add the svg icons here= icon:"",
            path:"/messages"
        },
        {
            name:"Analytics",
            //add the svg icons here= icon:"",
            path:"/analytics"
        },
    ];


    export default function SideBar(){

        const [open, setOpen] = useState(true);
        
    return(
        <div className={`text-gray-200 h-90 border border-blue-500 rounded-lg
         p-4 flex flex-col justify-between transition-all duration-300
         ${open ? "w-64" : "w-20"}`}>
            <div>
                <button onClick={() => setOpen(!open)} className="mb-6">
                    {/*<Menu/>*/}
                </button>
                
                {open && (<div className="relative mb-6">
                    {/*add the svg button*/}
                    <input type="text" placeholder="Search..."
                    className="w-full bg-gray-800 pl-9 pr-3 py-2
                    rounded-md text-sm focus:outline-none"/>
                </div>)}
            
                <nav>
                    <p className={`uppercase text-xs text-white mb-2 ${!open && "hidden"}`}>
                        Navigation
                    </p>
                    <ul>
                        
                        {menuItems.map((item) => (
                            <li key={item.name}className="mb-2">
                                <Link href={item.path} className="flex items-center gap-3
                                 hover:bg-blue-600 p-2 rounded-lg transition-all">
                                    {item.icon}
                                    {open && <span>{item.name}</span>}
                                </Link>
                        </li>))}
                        
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-3">
                <Image
                    src="/profile.jpeg"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                {open && (
                    <div>
                        <p className="text-white text-sm">
                            Badluck Day
                        </p>
                        <p className="font-semibold text-white">
                            Major Marquis Warren
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}