import { eventTab, walletTab } from '@/lib/constants';
import React, { useEffect, useRef } from 'react';
import { useGameRuleContext } from '@/lib/context/GameRuleContext';
import Deposit from './Deposit';
import WithdrawComponent from './Withdraw';
import { useWalletContext, WalletContext } from '@/lib/context/WalletContext';
import MoneyMovementComponent from './MoneyMovement';
import MyPage from './MyPage';
import ApplyForExpMoney from './ApplyForExpMoney';
import CouponDetails from './CouponDetails';
import DepositWithdrawHistory from './DepositWithdrawHistory';
import ResendAccount from './ResendAccount';



export default function HeaderWallet() {
  const { selectModal }=  useWalletContext();
  const [currentTab, setCurrentTab] = React.useState<number | null>(0);
  const [hoverTab, setHoverTab] = React.useState<number | null>(null)
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const activeComponent = 
  useEffect(() => {
    const refs = itemsRef.current;
    if (refs.length) {
      refs.map((item, index) => {
        item.onmouseenter = () => {
          if (index !== currentTab) {
            setHoverTab(index); 
          }
        };
        item.onmouseleave = () => {
          if (index !== currentTab) { 
            setHoverTab(null); 
          }
        };
      });
    }
  }, [currentTab]);
  
  const handleSelectModal = (index: number) => {
    selectModal(null, 'wallet');
    setCurrentTab(index)
    setHoverTab(null)
    const selectedEvent = walletTab[index];
    if (selectedEvent?.modal) {
      // selectModal(selectedEvent.modal, 'wallet');
      const ModalComponent = selectedEvent.modal;
      selectModal(<ModalComponent header={selectedEvent.header} />, 'wallet');
      console.log(selectedEvent.title);
    }   
  };  

  // const walletTab = [
  //   { modal: <Deposit/> ,title: '입금하기', background: '-30px', header: '입금하기'},
  //   { modal: <WithdrawComponent />, title: '출금하기', background:'-60px', header: '출금하기'},
  //   { modal: <MoneyMovementComponent />, title: '머니이동', background:'', header: '게임머니 이동신청'},
  //   { modal: <ApplyForExpMoney />, title: '체험머니신청', background:'-90px', header: '체험머니신청'},
  //   { modal: <CouponDetails />, title: '쿠폰내역', background:'-150px', header: '포인트 전환 내역'},
  //   { modal: <DepositWithdrawHistory />, title: '입출금 내역', background:'-180px', header: '입/출금내역'},
  //   { modal: <MyPage />, title: '마이페이지', background:'-210px', header: '마이페이지'},
  //   { modal: <ResendAccount />, title: '계좌 재전송', background:'-210px', header: '입금계좌'},
  // ]
 
  const walletTab = [
    { modal: Deposit ,title: '입금하기', background: '-30px', header: '입금하기'},
    { modal: WithdrawComponent , title: '출금하기', background:'-60px', header: '출금하기'},
    { modal: MoneyMovementComponent , title: '머니이동', background:'', header: '게임머니 이동신청'},
    { modal: ApplyForExpMoney , title: '체험머니신청', background:'-90px', header: '체험머니신청'},
    { modal: CouponDetails , title: '쿠폰내역', background:'-150px', header: '포인트 전환 내역'},
    { modal: DepositWithdrawHistory , title: '입출금 내역', background:'-180px', header: '입/출금내역'},
    { modal: MyPage , title: '마이페이지', background:'-210px', header: '마이페이지'},
    { modal: ResendAccount , title: '계좌 재전송', background:'-210px', header: '입금계좌'},
  ]
 
  return (
    <div className="flex px-4 justify-center">
      <div className='content-center'>
        <h2 className='text-2xl'>My Wallet</h2>
        <p>마이월렛</p>
      </div>
      <div className="flex px-8">
        {walletTab.map((event, index) => (
          <div
            ref={(el) => ((itemsRef.current as any[])[index] = el)}
            key={index}
            onClick={() =>handleSelectModal(index)}
            className={`cursor-pointer w-[100px] h-[100px] text-black px-6 flex flex-col items-center justify-center gap-2`}
            style={{
              backgroundColor: `${ index === currentTab || index === hoverTab ? '#666' : 'transparent'}`,
              color: `${index === currentTab || index === hoverTab ? 'white' : 'black'}`, 
            }}
          >
            <div
              className={`w-[30px] h-[30px] bg-no-repeat] button-img`}
              style={{
                backgroundImage: "url('/assets/image/tab-img.png')",
                backgroundPosition: `${
                  index === currentTab || index === hoverTab ? 'bottom' : 'top'
                } left  ${event.background}`,
              }}
            />
            <p className="text-xs ">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
