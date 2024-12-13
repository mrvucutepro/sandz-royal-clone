'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import HeaderWallet from './HeaderWallet';
import { useWalletContext } from '@/lib/context/WalletContext';

export function TabWallet({header} : {header: string}) {
  const { modal } = useWalletContext();

  return (
    <div className="">
      <HeaderWallet />
      <div className='h-[500px] max-w-[1500px]'>
        <div className=' pb-4'>
          {modal}
        </div>
      </div>
    </div>
  );
}
