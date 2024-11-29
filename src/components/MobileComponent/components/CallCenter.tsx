import React from 'react'

export default function CallCenter() {
  return (
        <div className='mx-4 mt-8 '>
            <div className='h-[400px] rounded-lg grid border justify-items-center'>
                <div className='flex h-[80px] items-center'>
                    <img src='/assets/image/callcenter.png'/>
                </div>
                <div className='grid justify-items-center items-center w-full h-[80px]'>
                    <span className='font-bold text-2xl '>신규가입상담</span>
                    <span className='font-extrabold text-3xl'>070 7893 1363</span>      
                </div>
                <div className='justify-items-center items-center grid gap-2 h-[150px]'>
                    <img src='/assets/image/livechat.gif'/>
                    <img src='/assets/image/partner.gif'/>
                </div>
            </div>
        </div>
  )
}
