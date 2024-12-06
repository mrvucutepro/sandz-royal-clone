import { eventTab } from '@/lib/constants';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Baccarat from './Baccarat';
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import Blackjack from './Blackjack';

export default function HeaderGameRule() {
  const { selectModal , contentGameRule} = useGameRuleContext();
  const [currentTab, setCurrentTab] = React.useState(-1);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const gameRuleTab = [
    { modal: <Baccarat /> },
    { modal: <Blackjack /> },
  ]

  useEffect(() => {
    const refs = itemsRef.current;
    if (refs.length) {
      refs.map((item, index) => {
        item.onmouseover = () => {
          setCurrentTab(index);
        };
        item.onmouseleave = () => {
          setCurrentTab(-1);
        };
      });
    }
  }, []);

  const handleSelectModal = (index) => {
    const selectedEvent = gameRuleTab[index];
    selectModal(null);
    if (selectedEvent?.modal) {
      selectModal(selectedEvent.modal);
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
            className="cursor-pointer max-w-[90px] max-w-[90px] hover:bg-[#666] hover:text-white px-6 pt-4 flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`w-[30px] h-[30px] bg-no-repeat] button-img`}
              style={{
                backgroundImage: "url('/assets/image/tab-img.png')",
                backgroundPosition: `${
                  index === currentTab ? 'bottom' : 'top'
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
