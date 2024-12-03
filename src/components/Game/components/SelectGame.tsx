'use client';

import React, { useState } from 'react';
import ObjectGame from './ObjectGame';
import { useAuth } from '@/lib/context/AuthContext';

export default function SelectGame({active, onSetActive}) {
//   const [activeGame, setActiveGame] = useState('casino');
const { user, onOpenLogin, setSelectGameRun, selectGameRun } = useAuth();

  const imageSetCasino = {
    active: '/assets/image/gamezone-title-1.png',
    unactive: '/assets/image/gamezone-title-2.png',
  };
  const imageSetSLot = {
    active: '/assets/image/gamezone-title-3.png',
    unactive: '/assets/image/gamezone-title-4.png',
  };

  const handleSetActive = (gameId) => {
    onSetActive(gameId);
  };


  return (
    <div className="flex w-[50%] h-[70%] justify-evenly">
        <ObjectGame
            gameId="casino"
            isActive={active === 'casino'}
            imageSet={imageSetCasino}
            onSetActive={handleSetActive}
        />
        <ObjectGame
            gameId="slot"
            isActive={active === 'slot'}
            imageSet={imageSetSLot}
            onSetActive={handleSetActive}
        />    
    </div>
    );
}
