import { Button } from '@/components/ui/button'
import React from 'react'

export default function ExchangeMenu() {
    const menu = [
          "입금신청",
          "출금신청",
          "게임머니이동",
          "쿠폰사용"
    ]
  return (
    <div className='justify-items-center'>
        <div className='grid grid-cols-2 gap-2 pt-2 w-[90%]'>
          {menu.map((value) => 
            <Button key={value} className='bg-gradient-to-t from-[#a3a3a3] to-[#fff] text-black font-bold text-lg drop-shadow-md border-b-2 border h-16'>{value}</Button>
          )}
        </div>
    </div>
  )
}
