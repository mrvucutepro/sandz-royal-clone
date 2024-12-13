import { dragonTiger } from '@/lib/constants/GameRule';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

export default function DragonTiger() {
  console.log(dragonTiger[3]);

  return (
    <div className="text-[#666]">
      <p className="font-bold text-2xl pb-2">식보 게임방법</p>
      <ScrollArea className="bg-white h-[400px] overflow-y-auto rounded-sm p-4">
        {dragonTiger.map((item, keyItem) => (
            <div key={keyItem} className='text-sm'>
                {keyItem === 3 ? (
                    <p className='font-bold mb-4'>{item}</p>
                ) : (
                    <p className='mb-4'>
                        {item}
                    </p>
                )}
            </div>
        ))}
      </ScrollArea>
    </div>
  );
}
