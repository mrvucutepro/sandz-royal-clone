'use client'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

export default function PopupWithdraw() {

    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }
    const notification = [
        '[출금공지사항]',
        '★ 신규가입쿠폰 3만원(10만원만 출금가능) ★',
        '[출금시 주의사항] <br/> 출금 최소 금액은 50,000원이며 24시간 출금이 언제든지 가능하나, <br/> 은행 및 금융감독원 점검시간 및 전산장애시에는 지연될 수 있습니다.',
        '- 두개의 아이디로 크로스배팅하는 회원 - <br/> - 친구와 크로스배팅하는 회원 - <br/> - 타 사이트와 크로스배팅하는 회원 - <br/> - 적발시 적발자와 관련된 모든 회원 몰수조치 -',
        '※ 이와 같은 행위 적발시 엄중처벌! ※'
    ]
    

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
            <div className={`bg-black bg-opacity-90 w-[700px] h-[400px] rounded-xl absolute z-40 top-14 left-52 right-0 bottom-0 ${isOpen ? 'block' : 'hidden'}`}>
                <DialogContent>
                <DialogTitle></DialogTitle>
                    <div className='justify-items-center items-center content-center text-center px-auto pt-6 grid gap-2'>
                        {notification.map((item, index) => (
                            <div key={index} className="w-full text-center">
                                {index === 0 &&(
                                    <p className="text-white text-sm">{item}</p>
                                )}
                                {index === 1 &&(
                                    <div className=' w-[100%] bg-yellow-400'>
                                        <p className="text-red-500 text-md font-bold ">{item}</p>
                                    </div>
                                )}
                                {index === 2 &&(
                                    <p
                                    className="text-white text-sm"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></p>
                                )}
                                {index === 3 && (
                                    <p
                                        className="text-red-500 text-lg font-bold"
                                        dangerouslySetInnerHTML={{ __html: item }}
                                    ></p>
                                )} 
                                {index === 4 &&(
                                    <p className="text-blue-400 text-md font-bold ">{item}</p>
                                )}   
                            </div>     
                        ))}
                        <button onClick={handleClose} className='bg-[white] h-10 w-20 rounded-sm hover:bg-[#ccc]'>Close</button>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
        
    );
}
