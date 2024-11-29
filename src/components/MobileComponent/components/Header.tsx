'use client';
import { useScreen } from '@/lib/hooks/useScreen';
import {  SquareUser } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SheetMenuGame } from './SheetMenuGame';
import { SheetMenuInfo } from './SheetMenuInfo';
import { Slider } from '@/components/Header/components/Slider';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { DialogTitle  } from '@radix-ui/react-dialog';

export default function Header() {


  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <div className="h-20 w-full flex items-center justify-between bg-[#111316] px-6">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="text-[#c79f5f] text-lg"
              >
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className='!p-0 w-[240px]'>
              <SheetMenuGame/>
            </SheetContent>
          </Sheet>
          <Image
            src="/assets/image/logo_sandz.png"
            width={200}
            height={60}
            alt="Picture of main"
          />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="text-[#c79f5f] text-lg"
              >
                <SquareUser className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className='!p-0 w-[240px]'>
              <SheetMenuInfo/>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <Slider/>
    </>
  );
}
