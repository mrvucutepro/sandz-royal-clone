"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Gamepad2Icon, Handshake, LaptopMinimal, Shield } from 'lucide-react';
import React, { useState } from 'react';
import GameRule from './GameRule/GameRule';
import SupportComponent from './SupportComponent';
import { DialogHeader } from '@/components/ui/dialog';
import { ModalProvider } from '@/lib/context/GameRuleContext';

interface IMenu{
    icon: JSX.Element; 
    title: string;
    modal: JSX.Element; 
}

export default function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };
    const items :IMenu[]= [
        { icon: <Gamepad2Icon className="w-10 h-10" />, title: "게임방법" , modal: <GameRule closeModal={closeModal} />},
        { icon: <LaptopMinimal className="w-10 h-10" />, title: "1:1원격지원", modal: <GameRule closeModal={closeModal}/> },
        { icon: <Shield className="w-10 h-10" />, title: "PC안전지킴이", modal: <GameRule closeModal={closeModal}/> },
        { icon: <Handshake className="w-10 h-10" />, title: "파트너제휴", modal: <GameRule closeModal={closeModal}/> },
    ];
    return (
        <div className="grid grid-cols-4 px-12 bg-[#c79f5f] h-[160px] w-full items-center justify-items-center">
            {items.map((item, index) => (
                <Dialog key={index} open = {isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <button 
                            className="grid md:flex hover:bg-[#e7be7b] h-full w-full items-center justify-center px-36 overflow-hidden">
                            <div className='border-4 rounded-full p-2 border-black'>
                                {item.icon}
                            </div>
                            <span className='text-[100%] text-xl font-bold'>{item.title}</span>
                        </button>
                    </DialogTrigger>
                    <ModalProvider>
                        <DialogContent className='absolute z-20 bg-[#eeeeee] max-h-[1000px] max-w-[1000px] '> 
                            <DialogHeader>
                                <DialogTitle>
                                </DialogTitle>
                            </DialogHeader>
                            {item.modal}
                        </DialogContent>
                    </ModalProvider>
                </Dialog>
            ))}
        </div>
    );
}
