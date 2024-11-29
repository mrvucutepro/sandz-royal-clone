import { Gamepad2Icon, Handshake, LaptopMinimal, Shield } from 'lucide-react';
import React from 'react';

interface IMenu{
    icon: JSX.Element; 
    title: string;
}

export default function MenuComponent() {

    const items :IMenu[]= [
        { icon: <Gamepad2Icon className="w-10 h-10" />, title: "게임방법" },
        { icon: <LaptopMinimal className="w-10 h-10" />, title: "1:1원격지원" },
        { icon: <Shield className="w-10 h-10" />, title: "PC안전지킴이" },
        { icon: <Handshake className="w-10 h-10" />, title: "파트너제휴" },
    ];
    return (
        <div className="grid grid-cols-4 px-12 bg-[#c79f5f] h-[160px] w-full items-center justify-items-center">
            {items.map((item, index) => (
                <div key={index} className="grid md:flex hover:bg-[#e7be7b] h-full w-full items-center justify-evenly px-32 overflow-hidden">
                    <div className='border-4 rounded-full p-2 border-black'>
                        {item.icon}
                    </div>
                    <span className='text-[100%]'> {item.title}</span>
                </div>
            ))}
            
        </div>
    );
}
