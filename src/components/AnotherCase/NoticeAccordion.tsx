import React from 'react';
import { Button } from '@/components/ui/button';

export interface INotice {
    name: string;
    date: string;
}
export default function NoticeAccordion() {
    const eventName: INotice[] = [
        { name: 'SA게임 점검안내 (9/9)', date: '2024-09-09' },
        { name: 'SA게임 점검안내 (9/9)', date: '2024-09-09' },
        { name: 'SA게임 점검안내 (9/9)', date: '2024-09-09' },
    ];

    return (
        <ul className="border-x border-slate-800 w-[100%] h-[220px] px-4">
            {eventName.map((event, index) => (
                <li key={index} className="py-1 text-white hover:bg-[#0c0d0e] flex justify-evenly rounded-none text-sm ">
                    <a href='/'>
                        {event.name}
                    </a>
                    <span>{event.date}</span>
                </li>
            ))}
        </ul>
    );
}
