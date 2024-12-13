'use client';

import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../ui/Input/index';
import { handleLogin } from '@/app/api/login';
import { useAuth } from '@/lib/context/AuthContext';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFIlledIcon';
import { useScreen } from '@/lib/hooks/useScreen';
import LoginFormMobile from '@/components/MobileComponent/components/LoginFormMobile';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  username: yup.string().required('사용자 이름이 필요합니다'),
  password: yup.string().required('비밀번호가 필요합니다'),
});

export type FormLoginType = yup.InferType<typeof schema>;
export default function LoginForm() {
  const { login, isOpenLogin, onOpenChangeLogin } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const isLg = useScreen('lg');
  const { onClose } = useDisclosure();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });
  const onSubmit = async (data: FormLoginType) => {
    setIsLoading(true);
    await handleLogin(data)
      .then((res) => {
        if (res.status === '0') {
          const authUser = JSON.stringify({
            GAME_ALIAS: res.GAME_ALIAS,
            HP_NO: res.HP_NO,
            MEM_ID: res.MEM_ID,
            MEM_LID: res.MEM_LID,
          });
          login(authUser);
          toast.success('로그인 성공');
          onOpenChangeLogin();
        } else {
          toast.error(res.message);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {isLg ? (
        <Modal
          isOpen={isOpenLogin}
          onOpenChange={onOpenChangeLogin}
          onClose={onClose}
          placement="center"
        >
          <ModalContent className="rounded bg-[#eee] max-w-md">
            {() => (
              <>
                <ModalHeader className="flex justify-center mt-[30px]">
                  <div className="relative">
                    <img
                      src="/assets/image/logo2.png"
                      alt="logo"
                      className="h-24 w-24"
                    />
                  </div>
                </ModalHeader>
                <ModalBody>
                  <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="username"
                      defaultValue=""
                      control={control}
                      render={({ field }) => (
                        <>
                          <Input
                            underline
                            className="mb-6"
                            classNameInput="bg-transparent focus:bg-transparent"
                            {...field}
                            placeholder="아이디"
                            title="아이디"
                            errorMessage={errors.username?.message}
                          />
                        </>
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          underline
                          className="mb-12"
                          classNameInput="bg-transparent focus:bg-transparent"
                          {...field}
                          placeholder="비밀번호"
                          title="비밀번호"
                          errorMessage={errors.password?.message}
                          type={isVisible ? 'text' : 'password'}
                          endContext={
                            <>
                              {!!field.value && (
                                <button
                                  className="focus:outline-none"
                                  type="button"
                                  onClick={toggleVisibility}
                                  aria-label="toggle password visibility"
                                >
                                  {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  )}
                                </button>
                              )}
                            </>
                          }
                        />
                      )}
                    />
                    <Button
                      isLoading={isLoading}
                      className="text-white rounded w-full h-[50px] bg-red-800"
                      type="submit"
                    >
                      로그인
                    </Button>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          isOpen={isOpenLogin}
          placement="top"
          className="bg-[#eee] mt-20 w-[100%] h-[100%]"
        >
          <ModalContent>
            <ModalBody>
              <LoginFormMobile />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
