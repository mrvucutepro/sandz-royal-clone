'use client';

import { listServices } from '@/lib/constants';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import MoneyMovementComponent from './MoneyMovement';
import DepositComponent from './Deposit';
import WithdrawComponent from './Withdraw';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import MyPage from './MyPage';

export function TabWallet() {

  const serviceComponents = {
    "Deposit": <DepositComponent />,
    "Withdraw": <WithdrawComponent />,
    "Money Movement": <MoneyMovementComponent />,
    "My Page": <MyPage />,
  }

  return (
    <div className="">
      <div className='text-2xl'>
        My Wallet
      </div>
      <Tabs aria-label="Dynamic tabs" >
        {listServices.map((item) => (
          <Tab
            key={item}
            title={item}
            className="text-xs break-words whitespace-normal justify-start"
          >
            <div className='text-xl'>{item}</div>
            <Card className='relative'>
            <CardBody className='w-[100%] fixed max-w-full flex-col'>
                  {serviceComponents[item]}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
