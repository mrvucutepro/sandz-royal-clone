"use client"

import { Button, Input, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { handleLogin } from '@/app/api/login';
import { useAuth } from '@/lib/context/AuthContext';

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export type FormLoginType = yup.InferType<typeof schema>;

export default function LoginFormMobile() {
  const { login, isOpenLogin, onOpenChangeLogin } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormLoginType) => {
    setIsLoading(true);
    await handleLogin(data).then((res) => {
        if (res.status === '0') {
            const authUser = JSON.stringify({
              GAME_ALIAS: res.GAME_ALIAS,
              HP_NO: res.HP_NO,
              MEM_ID: res.MEM_ID,
              MEM_LID: res.MEM_LID,
            })
            login(authUser);
            onOpenChangeLogin();
        }
        setIsLoading(false);
    }).catch((error) => {
        console.log("error", error);
        setIsLoading(false);
    });
  };

  return (
    <div className='grid items-center justify-center gap-4'>
      <div className='relative mt-20 justify-items-center'>
          <img src="/assets/image/logo2.png" className='h-36 w-36' />
      </div>        
      <form onSubmit={handleSubmit(onSubmit)} >
        <Controller 
          name='username'
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} placeholder='username' className='border rounded-sm mb-5'/>
            </>
          )}
        />
        <Controller 
          name='password'
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} placeholder='password' className='border rounded-sm mb-5'/>
            </>
          )}
        />
          <Button isLoading={isLoading} className='text-white rounded w-full h-[50px] bg-red-800' type='submit'>
            Click Me</Button>
      </form>
    </div>
  )
}
