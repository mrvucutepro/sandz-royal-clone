import React from 'react'
import { ScrollBoard } from './ScrollBoard'

export default function BoardComponent({ title }) {
  return (
    <div className='px-4 pt-8'>
        <div className='bg-[#bc4747] justify-items-center'>
          <div className='text-white text-2xl font-semibold'>{title}</div>
        </div>
          <ScrollBoard/>
    </div>
  )
}
