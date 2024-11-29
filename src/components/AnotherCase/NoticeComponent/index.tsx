import React from 'react';
import ButtonMore from '../ButtonMoreComponent';
import NoticeAccordion from '../NoticeAccordion';
import CustomAccordion from '../CustomAccordion';

export default function NoticeComponent() {
    return (
        <div className='h-[380px] w-[340px] justify-items-center grid'>
            <h2 className="text-4xl font-bold p-2 gradient-text">Notice</h2>
            <NoticeAccordion />
            <ButtonMore />
        </div>
    );
}
