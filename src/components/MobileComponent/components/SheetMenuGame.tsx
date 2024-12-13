import { Button } from '@/components/ui/button';


interface leftMenu{
  mainMenu:string[]
  gameMenu:string[]
  otherMenu:string[]
}
export function SheetMenuGame() {
  const menu: leftMenu = {
    mainMenu: [
      "출금랭킹",
      "공지사항",
      "이벤트",
      "FQA"
    ],
    gameMenu: [
      "에볼루션게임",
      "프라그마틱게임",
      "베가스게임",
      "호게임",
      "살롱게임",
      "마이크로라이브게임",
      "살롱슬롯게임",
      "마이크로슬롯게임",
      "게임방법"
    ],
    otherMenu: [
      "1:1원격지원",
      "PC안전지킴이",
      "파트너제휴",
    ],
  };

  return (
    <div>
      <div className=' grid justify-items-center font-bold'>
        <span className='text-[#666] pt-2 text-lg'>샌즈카지노</span>
        <div className='grid grid-cols-2 gap-3 pt-2 w-[90%]'>
          {menu.mainMenu.map((value) => 
            <Button key={value} className='bg-[#fff] text-black font-bold text-lg drop-shadow-md border-b-2 border h-16'>{value}</Button>
          )}
        </div>
        <div className='grid pt-4 w-full'>
          {menu.gameMenu.map((value, index) => 
            <div key={index} className='flex w-full h-[48px] items-center bg-[#EEE] gap-3 border-b-[1px] p-4 hover border-[#666]'>
              <img className='h-4 w-4' src="/assets/image/btn-arrow.png"/>
              <button className=' text-black font-extrabold '>{value}</button>
            </div>
          )}
        </div>
        <div className='grid gap-2 pt-2 w-full px-4'>
          {menu.otherMenu.map((value, index) =>
            <div key={index}>
              <Button className='bg-[#fff] text-black border-2 font-extrabold text-lg drop-shadow-sm'>{value}</Button>
              {/* {value.includes('1:1원격지원') && (

              )} */}
            </div> 
          )}
        </div>
      </div>
    </div>
  );
}
