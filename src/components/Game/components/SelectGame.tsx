'use client';

import React, { } from 'react';
import ObjectGame from './ObjectGame';
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import { useScreen } from '@/lib/hooks/useScreen';

export default function SelectGame({active, onSetActive}) {
  const isMd = useScreen('md');
  const isXl = useScreen('xl'); 
  const {activeGame, setActiveGame} = useGameRuleContext();

  const imageSetCasino = {
    active: '/assets/image/gamezone-title-1.png',
    unactive: '/assets/image/gamezone-title-2.png',
  };
  const imageSetSLot = {
    active: '/assets/image/gamezone-title-3.png',
    unactive: '/assets/image/gamezone-title-4.png',
  };

  const handleSetActive = (gameId: string) => {
    setActiveGame(gameId);    
  };
  
  return (
    <div className="flex w-[50%] h-[60%] justify-evenly">
        <ObjectGame
            gameId="casino"
            isActive={activeGame === 'casino'}
            imageSet={imageSetCasino}
            onSetActive={handleSetActive}
        />
        <ObjectGame
            gameId="slot"
            isActive={activeGame === 'slot'}
            imageSet={imageSetSLot}
            onSetActive={handleSetActive}
        />    
    </div>
    );
}
