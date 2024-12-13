'use client'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import React, { useEffect, useState } from 'react';

export default function PopupDeposit() {

    const [isOpen, setIsOpen] = useState(true);

    const notification_1 = [
        '[입금시 주의사항]',
        '신속한 충전을 위해서는 올바른 입금정보를 입력해 주셔야 합니다.',
        '회원님들의 안전과 보안을 위해 입금계좌는 수시변경 될 수 있으니 반드시 입금신청 후',
        '발송되는 문자를 확인하신 후 입금해주시기 바랍니다.',
    ]
    const notification_2 = [
        '※ 입금명과 출금명이 다를시엔 입금처리 불가 ※',
        '※ 수표입금시 입금처리 불가 ※',
        '※ 여러사람 이름으로 입금시 출금불가 ※',
        '※ 이전계좌 입금시에 처리되지 않을 수 있습니다 ※',
    ]

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
                <div className={`bg-black bg-opacity-90 w-[700px] h-[300px] rounded-xl absolute z-40 top-14 left-52 right-0 bottom-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <DialogContent>
                    <DialogTitle></DialogTitle>
                        <div className='justify-items-center pt-6'>
                            {
                                notification_1.map((item, index) => (
                                    <p className='text-white font-bold' key={index}>{item}</p>
                                ))
                            }
                            {
                                notification_2.map((item, index) => (
                                    <p className='font-bold text-xl text-red-700' key={index}>{item}</p>
                                ))
                            }
                            <button onClick={handleClose} className='bg-[white] h-10 w-20 rounded-sm hover:bg-[#ccc]'>Close</button>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    );
}
