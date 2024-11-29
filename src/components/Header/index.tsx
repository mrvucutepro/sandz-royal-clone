'use client';

import NavBar from './components/NavBar';
import HeroBar from './components/HeroBar';
import { Slider } from './components/Slider';
import { useScreen } from '@/lib/hooks/useScreen';

export default function Header() {
 
  const isXl = useScreen('xl');

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="relative z-10 h-full">
        {isXl && (
        <div className="absolute z-30 w-full">
          <HeroBar />
        </div>
        )}
          <div className="w-full">
            <Slider />
          </div>
      </div>
    </div>
  );
}
