import React, { useContext } from 'react'
import HeaderGameRule from './HeaderGameRule'
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import Baccarat from './Baccarat';
export default function GameRule({closeModal}) {
  const { contentGameRule } = useGameRuleContext();
  
  return (
    <div>
    <div className='flex'>
      <div className='p-4'>
        <p className='text-3xl font-sans text-[#444]'>Game Rule</p>
        <p  className='text-[#999] text-sm'>게임방법</p>        
      </div>
      <div><HeaderGameRule/></div>
      <button onClick={closeModal} className='flex items-center justify-items-center'><img src='/assets/image/tclose.png'/></button>
    </div>
    <div className='h-[100%] p-10 max-w-[100%]'>
      <>
        {contentGameRule.content}
      </>
    </div>
  </div>
  )
}
