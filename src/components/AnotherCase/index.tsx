import React from 'react'
import EventComponent from './EventComponent'
import FAQComponent from './FAQComponent'
import NoticeComponent from './NoticeComponent'

export default function AnotherCaseComponent() {
  return (
    <div className='grid grid-cols-3 justify-items-center bg-[#111316] py-16 px-36'>
        <EventComponent/>
        <NoticeComponent/>
        <FAQComponent/>
    </div>
  )
}
