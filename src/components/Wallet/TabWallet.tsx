'use client';

import { listServices } from '@/lib/constants';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import MoneyMovementComponent from './MoneyMovement';
import DepositComponent from './Deposit';
import WithdrawComponent from './Withdraw';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export function TabWallet() {

  const serviceComponents = {
    "Deposit": <DepositComponent />,
    "Withdraw": <WithdrawComponent />,
    "Money Movement": <MoneyMovementComponent />,
  }

  return (
    <div className="flex w-full flex-col">
   
      <Tabs
        aria-label="Dynamic tabs"
      >
        {listServices.map((item) => (
          <Tab
            key={item}
            title={item}
            className="max-w-[200px] max-h-[100px] text-xs break-words whitespace-normal justify-start"
          >
            <div>{item}</div>
            <Card>
              <CardBody className='w-[50%] h-[90%] border-black rounded-sm fixed border bg-slate-200 p-5 max-w-full'>
                {/* <div className='w-[50%] h-full border-black rounded-sm fixed rounded-md border bg-slate-200 p-5 max-w-full'> */}
                <ScrollArea>
        
                  {serviceComponents[item]}
                </ScrollArea>
                {/* </div> */}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
