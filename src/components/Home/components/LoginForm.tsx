import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react";
import Image from 'next/image';
// import logo from "/assets/image/logo2.png"
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Input  from '../../ui/Input/index';
import { handleLogin } from '@/app/api/login';
import { useAuth } from '@/lib/context/AuthContext';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFIlledIcon';

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});
export type FormLoginType = yup.InferType<typeof schema>;
export default function LoginForm() {
    const { login, isOpenLogin, onOpenChangeLogin } = useAuth();
    const [isVisible, setIsVisible] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { control, handleSubmit, formState: { errors } } = useForm({
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
                toast.success('Login Success');
                onOpenChangeLogin();
            }
            else {
                toast.error(res.message);
            }
            setIsLoading(false);
        }).catch((error) => {
            console.log("error", error);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <Modal  isOpen={isOpenLogin} onOpenChange={onOpenChangeLogin} placement='center'>
                <ModalContent className='rounded bg-[#eee] max-w-md'>
                    {() => (
                        <>
                            <ModalHeader className="flex justify-center mt-[30px]">
                                <div className='relative'>
                                    <img src="/assets/image/logo2.png" alt='logo' className='h-24 w-24' />
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <form className='mb-6' onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        name="username"
                                        control={control}
                                        render={({ field }) => (
                                            <>
                                                <Input
                                                    underline
                                                    className='mb-6'
                                                    classNameInput='bg-transparent focus:bg-transparent'
                                                    {...field}
                                                    placeholder="아이디"
                                                    title='아이디'
                                                    errorMessage={errors.username?.message}
                                                />
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                underline
                                                className='mb-12'
                                                classNameInput='bg-transparent focus:bg-transparent'
                                                {...field}
                                                placeholder="비밀번호"
                                                title='비밀번호'
                                                errorMessage={errors.password?.message}
                                                type={isVisible ? "text" : "password"}
                                                endContext={
                                                    <>
                                                        {!!field.value && (
                                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
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
                                    <Button isLoading={isLoading} className='text-white rounded w-full h-[50px] bg-red-800' type='submit'>
                                        로그인
                                    </Button>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
