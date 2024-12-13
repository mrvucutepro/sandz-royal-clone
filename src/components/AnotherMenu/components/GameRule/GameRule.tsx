import React from 'react'
import HeaderGameRule from './HeaderGameRule'
import { useGameRuleContext } from '@/lib/context/GameRuleContext';

export default function GameRule({closeModal}) {
  const { contentGameRule } = useGameRuleContext();
  return (
    <div>
      <div className='flex justify-around'>
        <div className='p-6 pl-10'>
          <p className='text-3xl font-sans text-[#444]'>Game Rule</p>
          <p className='text-[#999] text-sm'>게임방법</p>        
        </div>
        <div><HeaderGameRule/></div>
        <button onClick={closeModal} className='flex items-center justify-items-center pr-14'><img src='/assets/image/tclose.png'/></button>
      </div>
      <div className='h-[500px] p-10 max-w-[100%]'>
        <>
          {contentGameRule.content}
        </>
      </div>
    </div>
  )
}
