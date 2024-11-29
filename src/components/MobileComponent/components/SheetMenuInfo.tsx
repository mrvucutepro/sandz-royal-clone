import { Button } from '@/components/ui/button';


interface rightMenu{
  actions:string[]
  siteMenu:string[]
}
export function SheetMenuInfo() {
  const menu: rightMenu = {
    actions: [
      "마이페이지",
      "계좌 재전송",
      "MY쿠폰내역",
    ],
    siteMenu: [
      "입금신청",
      "계좌 재전송",
      "체험머니신청",
      "이벤트신청",
      "게임머니 이동신청",
      "입금계좌 재전송",
      "입/출금내역",
    ],
  };

  return (
    <div>
      <div className=' grid justify-items-center font-bold'>
        <span className='text-[#666] p-3 text-lg'>Member Info</span>
        <div className='grid bg-[#ccc] h-[88px] rounded-sm justify-items-center w-[90%]'>
            <span>suho123123</span>
            <button className='bg-[#bc4747] h-8 w-48 rounded-sm text-sm text-white'>Click Me</button>
        </div>
        <div className='grid gap-2 pt-2 w-[90%]'>
          {menu.actions.map((value) => 
            <Button key={value} className='bg-[#EEE] text-black font-extrabold text-lg border drop-shadow-md'>{value}</Button>
          )}
        </div>
        <div className='grid pt-2 w-full'>
          {menu.siteMenu.map((value, index) => 
            <div key={index} className='flex w-full h-[48px] items-center bg-[#EEE] gap-3 border-b-[1px] p-4 hover border-[#666]'>
            <img className='h-4 w-4' src="/assets/image/btn-arrow.png"/>
            <button className=' text-black font-extrabold '>{value}</button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
