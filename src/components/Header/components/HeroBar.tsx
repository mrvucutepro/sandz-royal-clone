'use client';

import Link from 'next/link';
import React from 'react';
import { useScreen } from '@/lib/hooks/useScreen';
import { FaMoneyCheck } from "react-icons/fa";
import { useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import WalletComponent from '@/components/Wallet';

interface ITitleItem {
  title: string;
  icon: JSX.Element;
}

export default function HeroBar() {
  const isMd = useScreen('md');
  const isXl = useScreen('xl');
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const titles: ITitleItem[] = [
    {
      title: '입금신청',
      icon: <FaMoneyCheck className='size-8'/>     
    },
    {
      title: '출금신청',
      icon: <FaMoneyCheck className='size-8'/>     
      
    },
    {
      title: '머니이동신청',
      icon: <FaMoneyCheck className='size-8'/>     
      
    },
    {
      title: '체험머니신청',
      icon: <FaMoneyCheck className='size-8'/>     
    },
    {
      title: '',
      icon: <></>,
    },
  ];

  return (
    <div>
      <div className="sticky top-0 w-full">
        <div className=" h-24 w-full flex items-center justify-around bg-[#111316]/50 px-40 relative z-10">
          {titles.map((value, index) => (
            <Button
              key={index}
              onPress={onOpen}
              className="text-[#fff] text-2xl font-bold flex-1 text-center transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-2">
                <div className="icon-wrapper">{value.icon}</div>
                {value.title}
              </div>
              <style jsx>{`
                a:hover {
                  text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                    0 0 30px rgba(255, 255, 255, 1);
                }
              `}</style>
            </Button>
          ))}
          <div className="flex items-center absolute top-0 right-40">
            <Link href="/">
              <img
                className="h-[96px] w-[350px] object-cover"
                src="/assets/image/game.png"
                alt={'image'}
              />
            </Link>
          </div>
        </div>
      </div>
      <WalletComponent isOpen={isOpen} onOpenChange={onOpenChange}/>
    </div>
  );
}
