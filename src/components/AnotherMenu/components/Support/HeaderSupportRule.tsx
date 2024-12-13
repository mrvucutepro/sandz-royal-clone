import { eventTab, supportTab } from '@/lib/constants';
import React, { useContext, useEffect, useRef } from 'react';
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import SupportTab from './SupportTab';

export default function HeaderSupportRule() {
  const { selectModal} = useGameRuleContext();
  // const [currentTab, setCurrentTab] = React.useState(-1);
  const [currentTab, setCurrentTab] = React.useState<number | null>(-1);
  const [hoverTab, setHoverTab] = React.useState<number | null>(null)

  const itemsRef = useRef<HTMLDivElement[]>([]);

  const supportRuleTab = [
    { modal: <SupportTab /> },
  ]
  
  useEffect(() => {
    const refs = itemsRef.current;
    if (refs.length) {
      refs.map((item, index) => {
        // item.onmouseover = () => {
        //   setCurrentTab(index);
        // };
        // item.onmouseleave = () => {
        //   setCurrentTab(-1);
        // };
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

  const handleSelectModal = (index) => {
    const selectedEvent = supportRuleTab[index];
    selectModal(null,'support');
    setCurrentTab(index)
    setHoverTab(null)
    if (selectedEvent?.modal) {
      selectModal(selectedEvent.modal, 'support');
    }   
  };  

  return (
    <div className="">
      <div className="flex px-8">
        {supportTab.map((event, index) => (
          <div
            ref={(el) => ((itemsRef.current as any[])[index] = el)}
            key={index}
            onClick={() =>handleSelectModal(index)}
            className="cursor-pointer max-w-[100px] max-w-[100px] hover:text-white px-6 pt-4 flex flex-col items-center justify-center gap-2"
            style={{
              // backgroundColor: `${index === currentTab ? '#666' : ''}`
              backgroundColor: `${ index === currentTab || index === hoverTab ? '#666' : 'transparent'}`,
              color: `${index === currentTab || index === hoverTab ? 'white' : 'black'}`,
            }}
          >
          <div
            className={`w-[30px] h-[30px] bg-no-repeat button-img`}
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
