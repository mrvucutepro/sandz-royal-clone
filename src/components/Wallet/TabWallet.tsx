import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export function TabWallet() {
  const services = [
    'Deposit',
    'Withdraw',
    'Money Movement',
    'Apply for experience money',
    'Coupon Details',
    'Deposit Withdrawal History',
    'My Page',
    'Resend account',
  ];
  return (
    <div className="flex w-full flex-col">
    <Tabs aria-label="Dynamic tabs" >
      {services.map((item) => (
        <Tab key={item} title={item} className='max-w-[100px] max-h-[50px]text-xs overflow-hidden p-4'>
          <Card>
            <CardBody>
              {item}
            </CardBody>
          </Card>
        </Tab>
      ))}
    </Tabs>
  </div>
  );
}
