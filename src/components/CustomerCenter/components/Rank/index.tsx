import React from 'react'
import RankBox from './RankBox'

export default function Rank() {
  return (
    <div>
        <div className=' h-[400px] flex justify-center items-center rounded-l-lg'>
            <RankBox />
            <RankBox />
        </div>
    </div>
  )
}
