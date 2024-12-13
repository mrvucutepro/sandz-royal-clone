// import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/context/AuthContext'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExchangeMenu() {
  const {user, onOpenLogin} = useAuth(); 

  const handleLogin = () => {
    if(!user){
      onOpenLogin();
    } 
  }
  return (
    <div className='justify-items-center mx-2 my-4 bg-[#c79f5f] h-[60px] gap-2 flex items-center justify-center rounded-md text-lg font-bold'>
      <FaExternalLinkAlt />
      <button onClick={handleLogin}>로그인</button>
    </div>
  )
}
