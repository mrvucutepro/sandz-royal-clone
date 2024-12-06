"use client"

import { handleChangePassword } from '@/app/api/user';
import { BRAND_ID } from '@/lib/constants';
import { useAuth } from '@/lib/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFIlledIcon';
import { Input } from '@nextui-org/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password length should be at least 4 characters')
        .max(12, 'Password cannot exceed more than 12 characters'),
    newPassword: Yup.string()
        .required('Password is required')
        .min(8, 'Password length should be at least 4 characters')
        .max(12, 'Password cannot exceed more than 12 characters'),
    newConfirmPassword: Yup.string()
        .required('Confirm Password is required')
        .min(8, 'Password length should be at least 4 characters')
        .max(12, 'Password cannot exceed more than 12 characters')
        .oneOf([Yup.ref('newPassword')], 'Passwords do not match'),
});
export type FormChangePassType = Yup.InferType<typeof formSchema>;

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [visibility, setVisibility] = React.useState({
    password: false,
    newPassword: false,
    newConfirmPassword: false,
  });

  const toggleVisibility = (field: "password" | "newPassword" | "newConfirmPassword") => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field], 
    }));  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const {user} = useAuth();
  const changePassword = async (data: FormChangePassType) => {  
    try {
        await handleChangePassword({
          brand_id: BRAND_ID,
          username: user?.MEM_LID,
          current_password: password,
          password: newPassword,
        }).then((res) => {
          if (res.message === '비밀번호가 변경되었습니다.') {
            toast.success("W비밀번호가 성공적으로 변경되었습니다");
            console.log(res.data);
            setPassword('');
            setNewPassword('');
            setNewConfirmPassword('');
          }
        });
    } catch (error) {
      toast.error("비밀번호 변경에 실패했습니다!");
      console.log(error);
    }
  };

  return (
    <div className='w-[80%] grid grid-rows-3 gap-4'>
      <form onSubmit={handleSubmit(changePassword)}>
      <ToastContainer position="top-center" autoClose={3000} />
        <div className='flex gap-20 p-6 items-center'>
            <label className='text-lg font-bold'>현재비밀번호</label>
            <div className='gap-4'>
              <Input
                {...register('password')}
                value={password}
                type={visibility.password ? "password": "text" }
                placeholder='현재비밀번호'
                onChange={(e) => setPassword(e.target.value)}
                endContent={
                  <button
                    type="button"
                    onClick={() =>toggleVisibility("password")}
                    className="text-gray-600">
                      {visibility.password  ? (
                        <EyeSlashFilledIcon className="h-5 w-5" />
                      ) : (
                        <EyeFilledIcon className="h-5 w-5" />
                      )}
                  </button>
                }
              />
              {<p className="text-red-500">{errors.password?.message}</p>}
            </div>
            <p>* 현재 사용하고 계시는 비밀번호를 입력하세요</p>
        </div>
        <div className='flex gap-16 p-6 items-center'>
            <label className='text-lg font-bold'>새로운 비밀번호</label>
            <div className='gap-4'>
              <Input
                {...register('newPassword')} 
                value={newPassword}
                type={visibility.newPassword ? "password": "text" }
                placeholder='새로운 비밀번호'
                onChange={(e) => setNewPassword(e.target.value)}
                className='border h-10 rounded-sm p-2 my-2'
                endContent={
                  <button
                    type="button"
                    onClick={() =>toggleVisibility("newPassword")}
                    className="text-gray-600">
                      {visibility.newPassword  ? (
                        <EyeSlashFilledIcon className="h-5 w-5" />
                      ) : (
                        <EyeFilledIcon className="h-5 w-5" />
                      )}
                  </button>
                }/>
              {<p className="text-red-500">{errors.newPassword?.message}</p>}
            </div>
            <p> * 새로운 비밀번호를 입력하세요.</p>
        </div>
        <div className='flex gap-8 p-6 items-center'>
            <label className='text-lg font-bold'>새로운비밀번호 확인</label>
            <div>
              <Input 
                {...register('newConfirmPassword')} 
                value={newConfirmPassword}
                type={visibility.newConfirmPassword ? "password": "text" }
                placeholder='새로운비밀번호 확인'
                onChange={(e) => setNewConfirmPassword(e.target.value)}
                className='border h-10 rounded-sm p-2 my-2'
                endContent={
                  <button
                    type="button"
                    onClick={() => toggleVisibility("newConfirmPassword")}
                    className="text-gray-600">
                      {visibility.newConfirmPassword ? (
                        <EyeSlashFilledIcon className="h-5 w-5" />
                      ) : (
                        <EyeFilledIcon className="h-5 w-5" />
                      )}
                  </button>
                }/>
              {<p className="text-red-500">{errors.newConfirmPassword?.message}</p>}
            </div>
            <p>* 새로운 비밀번호를 다시 한번 입력하세요.</p>
        </div>
        <div className='flex gap-8 p-6 items-center'>
          <p>추천인 아이디</p>
        </div>
        <button type='submit' className='bg-red-700 w-40 block mx-[50%] text-white p-4'>개인정보 변경하기</button>
      </form>
    </div>
  );
}
