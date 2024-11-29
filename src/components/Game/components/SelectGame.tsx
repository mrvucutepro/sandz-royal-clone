'use client';

import React, { useState } from 'react';
import ObjectGame from './ObjectGame';

export default function SelectGame({active, onSetActive}) {
//   const [activeGame, setActiveGame] = useState('casino');

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
