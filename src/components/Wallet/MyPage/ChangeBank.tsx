"use client"

import {  handleGetBankInfo } from '@/app/api/user';
import { BRAND_ID } from '@/lib/constants';
import { useAuth } from '@/lib/context/AuthContext';
import React, {useState } from 'react';




export default function ChangeBank() {
  const [bankList, setBankList] = useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  const {user} = useAuth();
  const getBankList = async () => {  
    try {
        await handleGetBankInfo({
          brand_id: BRAND_ID,
          username: user?.MEM_LID,
        }).then((res) => {
          if (res.status === '0') {
            alert('비밀번호가 성공적으로 변경되었습니다');
            console.log(res.data);
          }
        });
    } catch (error) {
      alert('비밀번호 변경에 실패했습니다!');
      console.log(error);
    }
  };

  return (
    <div className='w-[80%] grid grid-rows-3 gap-4'>
      <DropdownMenu value={}></DropdownMenu>
    </div>
  );
}
