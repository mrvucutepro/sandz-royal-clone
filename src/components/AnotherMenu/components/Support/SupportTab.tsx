import { support } from '@/lib/constants/SupportRule'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import { HiChevronRight } from "react-icons/hi";

export default function SupportTab() {
  return (
    <div>
      <h3 className='text-[#666] text-lg font-bold'>PC안전지킴이</h3>
      <ScrollArea>
        {support.map((value, index) => (
          <>
            {value.title === '안녕하세요!' && (
              <div key={index}>
                <h3 className='text-[#bc4747] font-bold py-4'>{value.title}</h3>
                {value.content.map((content) =>(
                    <p key={content} className='text-[#bc4747] text-sm py-1 font-bold'>{content}</p>
                ))}
              </div>
            )}
            {value.title === '백신프로그램' && (
              <>
              <div className='flex items-center text-[#666] text-lg'>
                <HiChevronRight />
                <h3 className='font-bold py-2 ' >{value.title}</h3>
              </div>
                <div key={index} className='grid grid-cols-3'>
                  {value.content.map((content, contentIndex) =>(
                    <div key={contentIndex} className='w-[270px]'>
                      <img src={content.image} className='pb-1'/>
                      <p className='text-xs'>{content.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        ))}
      </ScrollArea>
    </div>
  )
}
