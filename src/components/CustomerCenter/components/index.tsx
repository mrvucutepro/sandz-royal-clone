import React from 'react';
import CallCenter from './CallCenter';
import Rank from './Rank';
import Background from '@/components/Game/components/Background';

export default function CustomerCenter() {
  return (
    <div>
      <div className='flex items-center justify-center'
        style={{
          backgroundImage: 'url(/assets/image/background.png)',
        }}
      >
        <div className="col-span-2">
          <Rank />
        </div>
        <div className="col-span-1">
          <CallCenter />
        </div>
      </div>
    </div>
  );
}
