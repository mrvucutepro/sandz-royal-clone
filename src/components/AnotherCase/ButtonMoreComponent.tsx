import React from 'react';
import { Button } from '../ui/button';

export default function ButtonMore() {
    return (
        <div className='bottom-0 left-0 right-0 flex justify-center'>
                <Button
                    className="relative hover:bg-red-500 rounded-full bg-red-700 h-[110px] w-[110px] flex items-center justify-center overflow-hidden"
                    style={{ clipPath: 'inset(70% 0 0 0)' }}
                    type='button'
                >
                        <p className="absolute text-white text-sm" style={{ bottom: '8%' }}>More +</p>
                </Button>
        </div>
    );
}
