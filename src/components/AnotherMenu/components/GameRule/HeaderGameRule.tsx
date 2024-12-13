import { eventTab } from '@/lib/constants';
import React, { useEffect, useRef } from 'react';
import Baccarat from './Baccarat';
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import Blackjack from './Blackjack';
import Roulette from './Roulette';
import DragonTiger from './DragonTiger';
import Sikbo from './Sikbo';
import BullFight from './BullFight';


export default function HeaderGameRule() {
  const { selectModal } = useGameRuleContext();
  const [currentTab, setCurrentTab] = React.useState<number | null>(-1);
  const [hoverTab, setHoverTab] = React.useState<number | null>(null)
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const gameRuleTab = [
    { modal: <Baccarat /> },
    { modal: <Blackjack /> },
    { modal: <Roulette /> },
    { modal: <Sikbo /> },
    { modal: <DragonTiger /> },
    { modal: <BullFight /> },
  ]

  useEffect(() => {
    const refs = itemsRef.current;
    if (refs.length) {
      refs.map((item, index) => {
        item.onmouseenter = () => {
          if (index !== currentTab) {
            setHoverTab(index); 
          }
        };
  
        item.onmouseleave = () => {
          if (index !== currentTab) { 
            setHoverTab(null); 
          }
        };
      });
    }
  }, [currentTab]);

  const handleSelectModal = (index: number) => {
    selectModal(null, 'game');
    setCurrentTab(index)
    setHoverTab(null)
    const selectedEvent = gameRuleTab[index];
    if (selectedEvent?.modal) {
      selectModal(selectedEvent.modal, 'game');
    }   
  };  
 
  return (
    <div className="">
      <div className="flex px-8">
        {eventTab.map((event, index) => (
          <div
            ref={(el) => ((itemsRef.current as any[])[index] = el)}
            key={index}
            onClick={() =>handleSelectModal(index)}
            className={`cursor-pointer max-w-[90px] max-w-[90px] text-black px-6 pt-4 flex flex-col items-center justify-center gap-2`}
            style={{
              backgroundColor: `${ index === currentTab || index === hoverTab ? '#666' : 'transparent'}`,
              color: `${index === currentTab || index === hoverTab ? 'white' : 'black'}`, 
            }}
          >
            <div
              className={`w-[30px] h-[30px] bg-no-repeat] button-img`}
              style={{
                backgroundImage: "url('/assets/image/tab-img.png')",
                backgroundPosition: `${
                  index === currentTab || index === hoverTab ? 'bottom' : 'top'
                } left  ${event.background}`,
              }}
            />
            <p className="text-xs ">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
