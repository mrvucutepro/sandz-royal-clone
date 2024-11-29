'use client';

import React, { useState } from 'react';
import { CardGame } from './components/CardGame';
import SelectGame from './components/SelectGame';
import { useScreen } from '@/lib/hooks/useScreen';
import GamezoneBorder from './components/GamezoneBorder';

interface ICard {
    cardTitle: string;
    cardImage: string;
    gameLogo:string;
}

export default function Game() {
    const isMd = useScreen('md');
    const isXl = useScreen('xl'); 
    const [activeGame, setActiveGame] = useState('casino');

    const cardGameCasino : ICard[]=[
      {cardTitle: 'DB CASINO',cardImage: '/assets/image/play-game-1.jpg', gameLogo: '/assets/image/game-logo/logo-game-ho.png'},
      {cardTitle: 'EVOLUTION CASINO',cardImage: '/assets/image/play-game-2.jpg',gameLogo: '/assets/image/game-logo/logo-game-tiger.png'},
      {cardTitle: 'PRAGMATIC CASINO',cardImage: '/assets/image/play-game-1.jpg',gameLogo: '/assets/image/game-logo/logo-game-vl.png'},
      {cardTitle: 'SEXY CASINO',cardImage: '/assets/image/play-game-2.jpg', gameLogo: '/assets/image/game-logo/logo-game-ebet.png'},
      {cardTitle: 'HO CASINO',cardImage: '/assets/image/play-game-2.jpg', gameLogo: '/assets/image/game-logo/logo-game-microgaming.png'},
      {cardTitle: 'SALON CASINO',cardImage: '/assets/image/play-game-1.jpg', gameLogo: '/assets/image/game-logo/logo-game-ho.png'},
      {cardTitle: 'MICRO CASINO',cardImage: '/assets/image/play-game-2.jpg', gameLogo: '/assets/image/game-logo/logo-game-ebet.png'},
      {cardTitle: 'UNION CASINO',cardImage: '/assets/image/play-game-1.jpg', gameLogo: '/assets/image/game-logo/logo-game-vl.png'},
    ]
    const cardGameSlot : ICard[]=[
        {cardTitle: 'DB CASINO',cardImage: '/assets/image/play-game-2.jpg', gameLogo: '/assets/image/game-logo/logo-game-ho.png'},
        {cardTitle: 'EVOLUTION CASINO',cardImage: '/assets/image/play-game-2.jpg',gameLogo: '/assets/image/game-logo/logo-game-tiger.png'},
        {cardTitle: 'PRAGMATIC CASINO',cardImage: '/assets/image/play-game-1.jpg',gameLogo: '/assets/image/game-logo/logo-game-vl.png'},
        {cardTitle: 'SEXY CASINO',cardImage: '/assets/image/play-game-1.jpg', gameLogo: '/assets/image/game-logo/logo-game-ebet.png'},
    ]
  
    const cardGameList = activeGame === 'casino' ? cardGameCasino : cardGameSlot;

    return (
        <>  
            <div
                style={{
                    backgroundImage: 'url(/assets/image/background.png)',
                }}
                >
                <GamezoneBorder/>
                <div className="bg-black/0 h-full grid grid-rows-[auto_1fr] justify-center place-items-center py-10 ">
                    <SelectGame active={activeGame} onSetActive={setActiveGame}/>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 md:px-8 xl:px-40 ">
                        {cardGameList.map((card, index) => (
                            <div key={index} className='w-full h-auto max-w-xs md:max-w-sm xl:max-w-none'>
                                <CardGame  cardTitle={card.cardTitle} cardImage={card.cardImage} gameLogo={card.gameLogo} />
                            </div>
                        ))}
                    </div>
                </div>
                <GamezoneBorder/>
            </div>
        </>
    );
}
