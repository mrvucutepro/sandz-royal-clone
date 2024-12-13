import { blackJack } from '@/lib/constants/GameRule';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

export default function Blackjack() {
  return (
    <div className="text-[#666]">
      <p className="font-bold text-2xl pb-2">블랙잭 게임방법</p>
      <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm p-4">
        <div>
          {blackJack.map((item, keyItem) =>(
            item.title === '용어 설명' ||  item.title === '카드의 값' ||  item.title === '플레이어의 선택' ? (
              <div key={keyItem}>
                <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                {Array.isArray(item.content) &&  item.content.map((content, contentIndex) => (
                  <div key={contentIndex} className='mx-10 mb-2'>
                    <li className='text-sm'>{content}</li>
                  </div>
                ))}
              </div>  
            ):(
              <div key={keyItem}>
                <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                <p className='text-sm mb-2'>{item.content}</p>
              </div>
            )
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
