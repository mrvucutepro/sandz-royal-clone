import React from 'react'
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import HeaderSupportRule from './HeaderSupportRule';
export default function Support({closeModal}) {
  const { contentSupportRule } = useGameRuleContext();
  return (
    <div>
      <div className='flex justify-around'>
        <div className='p-6 pl-10'>
          <p className='text-3xl font-sans text-[#444]'>Support</p>
          <p  className='text-[#999] text-sm'>고객지원</p>        
        </div>
        <div><HeaderSupportRule/></div>
        <button onClick={closeModal} className='flex items-center justify-items-center pr-14'><img src='/assets/image/tclose.png'/></button>
      </div>
      <div className='h-[500px] p-10 max-w-[100%]'>
        <>
          {contentSupportRule.content}
        </>
      </div>
    </div>
  )
}
