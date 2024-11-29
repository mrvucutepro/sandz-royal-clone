import { Phone } from 'lucide-react';
import React from 'react';

export default function CallCenter() {
  return (
    <div className=" grid gap-3 h-[340px] w-[100%] mx-10 bg-white/30 rounded-lg content-center justify-items-center">
        <img src="/assets/image/callcenter.png" />
        <p className='text-sm '>24시간 고객서비스 센터입니다.</p>
        <p className='text-sm '>불편한 점이나 기타 문의사항은 언제든지</p>
        <p className='text-sm '>문의 주시기 바랍니다</p>
  
        <div className='w-full flex items-center justify-evenly'>
          <p className='text-lg font-bold'>문의전화</p>
          <p className='text-4xl font-bold'>070 7893 1363</p>
        </div>
    </div>
  );
}
