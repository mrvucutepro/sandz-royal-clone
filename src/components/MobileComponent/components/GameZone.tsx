import React from 'react'


interface IGameList {
    title: string;
    avatar: JSX.Element;
  }export default function GameZone() {

    const gameList : IGameList[] = [
        {
          title: "DB카지노",
          avatar: <img src="/assets/image/game-menu/btn-gamestart-v.png" className="h-24 w-24" />,
        },
        {
            title: "에볼루션게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-v.png" className="h-24 w-24" />,
          },
          {
            title: "프라그마틱게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-pragmatic.png" className="h-24 w-24" />,
          },
          {
            title: "섹시 게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-pragmatic.png" className="h-24 w-24" />,
          },
          {
            title: "호게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-ho.png" className="h-24 w-24" />,
          },
          {
            title: "마이크로라이브게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-m.png" className="h-24 w-24" />,
          },
          {
            title: "살롱게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-sa.png" className="h-24 w-24" />,
          },
          {
            title: "마이크로슬롯게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-m-slot.png" className="h-24 w-24" />,
          },
          {
            title: "레드타이거슬롯게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-pragmatic.png" className="h-24 w-24" />,
          },
          {
            title: "유니온 게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-rt.png" className="h-24 w-24" />,
          },
          {
            title: "DB카지노",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-v.png" className="h-24 w-24" />,
          },
          {
            title: "SimplePlay 게임",
            avatar: <img src="/assets/image/game-menu/btn-gamestart-v.png" className="h-24 w-24" />,
          },
      ];

        

  return (
    <div className='justify-items-center bg-[#eee] p-8 mt-2'>
        <img src="/assets/image/game-menu/gamelist-title.png" className="h-[30px] w-[250px] my-6" />
        <div className='grid grid-cols-3 gap-2'>
        {gameList.map((game, index) => (
            <button key={index} className='flex flex-col items-center text-center gap-1'>
                {game.avatar}
                <span className='text-xs break-words'>{game.title}</span>
            </button>
        ))}
        </div>
    </div>
  )
}
