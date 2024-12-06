'use client';

import React, { useState } from 'react';
import { CardGame } from './components/CardGame';
import SelectGame from './components/SelectGame';
import { useScreen } from '@/lib/hooks/useScreen';
import GamezoneBorder from './components/GamezoneBorder';
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';
import { handleGameRun } from '@/app/api/game';
import { BRAND_ID, listGames, listGameSlot } from '@/lib/constants';
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';


export default function Game() {
    const isMd = useScreen('md');
    const isXl = useScreen('xl'); 
    const [activeGame, setActiveGame] = useState('casino');
    const { user, onOpenLogin} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
  
    const cardGameList = activeGame === 'casino' ? listGames : listGameSlot;
    const openPopup = (popupUrl: string) => {
        const width = 1440;
        const height = 810;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
      
        window.open(
          popupUrl,
          "_blank",
          `top=${top},left=${left},width=${width},height=${height},menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=no,location=no`
        );
    };

    const handlePlayGame = async (gameID: string) => {
        setIsLoading(true);
        if (!user) {
          onOpenLogin();
          return;
        }
        try {
            await handleGameRun({
              username: user.MEM_LID,
              brand_id: BRAND_ID,
              game_id: gameID,
              mobile: "0",
            }).then((res) => {
                setIsLoading(false);  
              if (res.status === "0") {
                openPopup(res.popupUrl);
              } else {
                toast.error(res.message);
              }
            })    
            console.log(gameID);
        } catch (error) {
            setIsLoading(false);
            console.error('Error starting game:', error);
        }
    }
    
    return (
        <>  
            <div
                style={{
                    backgroundImage: 'url(/assets/image/background.png)',
                }}
                >
                {isLoading && (
                    <Dialog open={isLoading}>
                        <DialogContent>
                            <DialogHeader>
                                <div className="loading-overlay">
                                    <img src="/assets/image/loading.png" />
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )}    
                <GamezoneBorder/>
                <div className="bg-black/0 h-full grid grid-rows-[auto_1fr] justify-center place-items-center py-10 px-24 ">
                    <SelectGame active={activeGame} onSetActive={setActiveGame}/>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 md:px-8 xl:px-40 ">
                    {cardGameList.map((card, index) => (
                        <div key={index} className='w-full h-auto max-w-xs md:max-w-sm xl:max-w-none'>
                            <CardGame handlePlayGame={() => handlePlayGame(card.key)} cardTitle={card.label} cardImage={card.image} gameLogo={card.logo} gameID={card.key}/>
                        </div>
                    ))}
                    </div>
                </div>
                <GamezoneBorder/>
            </div>
        </>
    );
}
