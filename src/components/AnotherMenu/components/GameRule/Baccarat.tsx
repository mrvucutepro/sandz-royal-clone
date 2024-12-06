import { bacara, tableBacara } from '@/lib/constants/GameRule'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'

export default function Baccarat() {

  return (
    <div className='text-[#666]'>
      <p className='font-bold text-2xl pb-2'>바카라 게임방법</p>
        <ScrollArea className='bg-white max-h-[400px] overflow-y-auto rounded-sm'>
          {bacara.map((item, index) => (
            <div key={index} className="p-8">
              <h3 className="font-extrabold">{item.title}</h3>
              <br />
              {item.title === '플레이어 규칙' ? (
                <ul>
                  {item.content.map((content, subIndex) => (
                    <li className='list-disc' key={subIndex}>{content}</li>
                  ))}
                </ul>
              ) : (
                item.content.map((content, subIndex) => (
                  <p key={subIndex}>{content}</p>
                ))
              )}
              <br />
            </div>
          ))}
          {tableBacara.map((item, index) => (
              <div key={index} className="p-8">
                  <h3 className="font-extrabold">{item.title}</h3>
              </div>

          ))}
        </ScrollArea>

          {/* <p className='text-sm'>
            바카라는 8목의 카드를 섞어서 나오는 문양과 수의 변형을 조합한 카드 게임입니다.<br />
            딜러에 의해서 각각 뱅커 와 플레이어에 두장씩 카드가 나누어집니다.<br />
            딜러가 카드를 나누기 전에 뱅커, 플레이어, 타이 또는 페어 에 베팅이 이루어져야합니다.<br />
            이긴 베팅 금액에 대해서는 뱅커와 플페이어에 대해 1대1로 지불이 됩니다. 그러나 5%의 커미션이 뱅커로 이긴 금액에 대해 적용이 됩니다. 그래서 뱅커로 이기신 금액에 대해 실제로는 95%만 지불이 됩니다.<br />
            타이 베팅에 대해서는 플레이어와 뱅커가 동점이 나올경우 베팅에대해 8배의 지불이 이루어집니다. 그리고 한번 베팅이 되고 딜러에 의해 카드가 나누어지기 시작하면 베팅을 전혀 바꿀수 없읍니다. 이것은 정해진 규칙으로서 뱅커와 플레이어에 각각 2장씩에 또는 3장씩에 걸친 결과를 기다려야만 합니다.<br />
            처음에 나누어진 뱅커와 플레이어에 각각의 2장씩 카드가 같은 숫자가 뱅커 또는 플레이어에 나왔을 경우에 이것을 뱅커 페어 또는 플레이어 페어라고 합니다. 이럴경우 베팅 금액의11배가 지불됩니다. 이런 경우에는 게임에 전혀 지장을 주지 않으며 뱅커와 플레이어 또는 타이 베팅에 대한 게임은 계속 진행됩니다.<br />
            카드에 대한 점수계산은 더하기 방법으로 결정되는데, 0에서9까지입니다. 10과 얼굴이 나오는 카드들은 0점으로 취급되며 어떠한 많은 점수가 더해지더라도 끝의 한자리숫자만 점수로 취급됩니다. 그러므로 둘중에 한쪽이 높은 점수가 이기게 되고 동점이 나오면 타이로 이기게 됩니다.<br />
          </p> */}
    
          {/* <ul className=' px-10'>
            <li className='text-sm list-disc'>
              <p>예1: 6 + 0= 6, 이패의점수는6.</p>
              <section style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src='/assets/image/game-card/bakara_02.png'/>
                <p>+</p>
                <img src='/assets/image/game-card/bakara_02.png'/>
              </section>
            </li>
            <li className='text-sm list-disc'>
              <p>예2: 4+ 0 +6=10, 이패의점수는 0.</p>
              <section style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src='/assets/image/game-card/bakara_02.png'/>
                <p>+</p>
                <img src='/assets/image/game-card/bakara_02.png'/>
                <p>+</p>
                <img src='/assets/image/game-card/bakara_02.png'/>
              </section>
            </li>
          </ul>
          <br/>

          <h3 className='font-extrabold'>플레이어 규칙:</h3>
          <br/>
          <table className='w-[100%] text-center table-auto border-separate border border-[#666]'>
            {valueTable.map((value,index) =>(
              <tr className='grid grid-cols-2'>
                <th className='border bg-[#CCC] font-semibold p-2'>{value.text_1}</th>
                <th className='border bg-[#CCC] font-semibold p-2'>{value.text_2}
                </th>
              </tr>
            ))}
          </table>
          <br/>
          <p className='text-sm'>처음에 받은 두장의 카드가 6점이상이면 한장 더 안받고 기다리거나 내츄랄로 이기게 되고 5점 또는 이하인경우, 한장을 더 받아야합니다.</p>
          <br/>
          <h3 className='font-extrabold'>뱅커 규칙
          </h3>
          <br/>
          <table className='w-[100%] text-center table-auto border-separate border '>
            {valueTable.map((value,index) =>(
              <tr className='grid grid-cols-2'>
                <th className='border bg-[#CCC] font-semibold p-2'>{value.text_1}</th>
                <th className='border bg-[#CCC] font-semibold p-2'>{value.text_2}
                </th>
              </tr>
            ))}
        
          </table>
          <br/>
          <p>처음에받은 두장의 카드가 7점 이상이면 한장 더안받고 기다리거나 내츄랄로 이기게되고 만약에 처음 두장의카드가 0, 1, 2점 이면 무조건 한장 더받아야합니다. 그러나3, 4, 5, 6점일경우 플레이어에서 받는 세번째 카드의 점수에 따라서 뱅커의 승패가 결정됩니다. 따라서 아래의 도표에서 보시는 것처럼 플레이어의 승식이나옴니다.</p>
          <br/>
          <h3 className='font-extrabold'>뱅커 규칙
          </h3>
          <br/>
          <img src='/assets/image/game-card/bakara_06.jpg'/>
          <br/>
          <p>
            D=한장 더 받기, N=플레이어의한장 더안받고 끝내기.
          </p>

          */}

        </div>
  )
}
