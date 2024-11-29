import React from 'react';
import CustomAccordion from '../CustomAccordion';
import ButtonMore from '../ButtonMoreComponent';

export default function EventComponent() {
    return (
        <div className='h-[380px] w-[340px] justify-items-center grid'>
            <h2 className="text-4xl font-bold p-2 gradient-text">Event</h2>
            <CustomAccordion />
            <ButtonMore />
        </div>

        // <div className="flex justify-center items-center flex-col ">
        //     <h2 className="text-4xl font-bold p-2 gradient-text">Event</h2>
        //     <CustomAccordion />
        //     <ButtonMore />
        // </div>
    );
}
