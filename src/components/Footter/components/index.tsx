import React from 'react'

export default function Footer() {
  const footerIndex = [
    "입금신청","출금신청","머니이동신청","체험머니신청"
  ]

  return (
    <div className='bg-[#111316] grid gap-3 max-h-[300px]'>
        <div>
          <ul className='flex justify-evenly gap-16 w-full'>
            {footerIndex.map((value) => 
              <li key={value} className='text-[#888] p-4'>
                {value}
              </li>
            )}
          </ul>
        </div>
        <div className='flex justify-center'>
          <img src='/assets/image/footer-gamelogo.png'/>
        </div>
        <div className='text-[#888] p-16 flex justify-center'>
          Copyright® SANDS CASINO. ALL RIGHT RESERVED.
        </div>
    </div>
  )
}
