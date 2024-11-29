import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Crown } from 'lucide-react'
import React from 'react'

export default function RankBox() {
  return (
    <div className='bg-white/5 w-[440px] h-[340px] rounded-lg'>
        <div className='flex justify-center text-2xl font-bold items-center gradient-text p-4'>
            <Crown className='h-8 w-8 text-white'/>
            <span>출금랭킹TOP</span>
        </div>
        <div className='px-4'>
            <Button className='w-full h-[260px] bg-black/30'>게시물이 없습니다."</Button>
        </div>
    </div>
  )
}
