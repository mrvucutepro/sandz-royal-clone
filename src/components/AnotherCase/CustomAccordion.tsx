import React from 'react'
import { Button } from '@/components/ui/button'
export default function CustomAccordion() {
  const event = [
    "[한가위 이벤트] 풍성하게 즐기는 추석 EV...",
    "[UNION 게임] 런칭기념 실시간 올인쿠폰 5% ...",
    "두근두근 전화데이트 EVENT"
  ]

  return (
    <div className='flex flex-col space-y-2'>
        {event.map((eventName, index) => (
        <Button key={index} className='bg-[#191c21] text-white hover:bg-slate-700 h-[70px] w-[100%] rounded-none'>{eventName}</Button>
    ))}
    </div>

  )
}
