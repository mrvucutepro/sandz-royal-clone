import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';



export default function Blackjack() {
  return (
    <div className="text-[#666]">
      <p className="font-bold text-2xl pb-2">블랙잭 게임방법</p>
      <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm">
        <div className="p-8">
          <h3 className="font-extrabold">블랙잭의 목표</h3>
          <br />
          <p className="text-sm">
            이 게임의 기본 전제는 여러분이 자신의 핸드 값이 딜러의 핸드 값보다
            21에 근접하면서 21을 넘지 않기를 원한다는 것입니다. 테이블의 다른
            플레이어들은 신경쓸 필요가 없습니다. 여러분의 핸드는 엄격하게 딜러의
            핸드를 대상으로 플레이됩니다. 딜러의 플레이 규칙은 엄격하게 고정되어
            있으며 딜러가 임의로 결정할 여지가 없습니다. 따라서 여러분이 쥐고
            있는 카드를 딜러나 테이블에서 플레이하는 다른 사람들이 보아도 아무
            문제가 없습니다. 따라서, 슈 게임에서 플레이를 하는 경우 플레이어
            카드는 모두 드러내 놓고 돌리게 됩니다.
          </p>
          <br />
          <p>
            8개의 카드 데크가 있는 "슈(shoe)"가 사용됩니다. 이 게임에서 초보자가
            누릴 수 있는 장점은 각 플레이어의 앞에서 플레이어들의 카드를 드러내
            놓고 돌리며 딜러가 플레이어의 질문 및 결정에 대해 도움을 제공할 수
            있다는 것입니다.
          </p>
          <br />
          <h3 className="font-extrabold">용어 설명</h3>
          <br />
          <ul className=" px-10">
            <li className="text-sm list-disc">
              블랙잭：블랙잭(또는 내츄럴이라고도 함)은 첫 두 카드에서 합계가
              21이 되는 것입니다. 따라서 블랙잭은 에이스와 10의 값을 갖는 카드로
              이루어지며 추가 조건은 반드시 처음 2개의 카드여야 한다는 점입니다.
              블랙잭이 되면 플레이어는 3대2의 비율로 상금을 받습니다.
            </li>
            <li className="text-sm list-disc">
              21：2개 이상의 카드의 합계가 총 21이 됩니다.
            </li>
            <li className="text-sm list-disc">
              버스트: 핸드의 합계가 21을 초과.
            </li>
            <li className="text-sm list-disc">
              타이: 플레이어와 딜러의 총 핸드 값이 동일 - 플레이어가 베팅을
              유지합니다.
            </li>
            <li className="text-sm list-disc">
              하드 핸드: 에이스가 없거나 값이 1인 에이스만 있는 핸드를 소프트
              핸드와는 달리 한가지 값만 받을 수 있으므로 하드 핸드라고 합니다
              (원하는 대로 에이스의 값을 1이나 11로 정할 수 있습니다)..
            </li>
            <li className="text-sm list-disc">
              소프트 핸드: 값이 11인 에이스가 포함된 핸드를 소프트 핸드라고
              부릅니다.
            </li>
          </ul>
          <br />

          <ul className=" px-10">
            <li className="text-sm list-disc">
              2에서 10까지의 카드는 자체 액면 값을 가지고 있습니다.
            </li>
            <li className="text-sm list-disc">
              21：2개 이상의 카드의 합계가 총 21이 됩니다.
            </li>
            <li className="text-sm list-disc">
              버스트: 핸드의 합계가 21을 초과.
            </li>
            <li className="text-sm list-disc">
              타이: 플레이어와 딜러의 총 핸드 값이 동일 - 플레이어가 베팅을
              유지합니다.
            </li>
            <li className="text-sm list-disc">
              하드 핸드: 에이스가 없거나 값이 1인 에이스만 있는 핸드를 소프트
              핸드와는 달리 한가지 값만 받을 수 있으므로 하드 핸드라고 합니다
              (원하는 대로 에이스의 값을 1이나 11로 정할 수 있습니다)..
            </li>
            <li className="text-sm list-disc">
              소프트 핸드: 값이 11인 에이스가 포함된 핸드를 소프트 핸드라고
              부릅니다.
            </li>
          </ul>
          <h3 className="font-extrabold">플레이어 규칙:</h3>
          <br />
          <table className="w-[100%] text-center table-auto border-separate border border-[#666]">
            <tr className="grid grid-cols-2">
              <th className="border bg-[#CCC] font-semibold p-2">
                PLAYER 처음 두 카드의 총합이{' '}
              </th>
              <th className="border bg-[#CCC] font-semibold p-2">
                PLAYER 액션
              </th>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">0, 1, 2, 3, 4, 5</td>
              <td className="border border-[#666]">패뽑기</td>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">6, 7</td>
              <td className="border border-[#666]">멈추기</td>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">8, 9</td>
              <td className="border border-[#666]">멈추기(자연)</td>
            </tr>
          </table>
          <br />
          <p className="text-sm">
            처음에 받은 두장의 카드가 6점이상이면 한장 더 안받고 기다리거나
            내츄랄로 이기게 되고 5점 또는 이하인경우, 한장을 더 받아야합니다.
          </p>
          <br />
          <h3 className="font-extrabold">뱅커 규칙</h3>
          <br />
          <table className="w-[100%] text-center table-auto border-separate border ">
            <tr className="grid grid-cols-2">
              <th className="border bg-[#CCC] font-semibold p-2">
                PLAYER 처음 두 카드의 총합이{' '}
              </th>
              <th className="border bg-[#CCC] font-semibold p-2">
                PLAYER 액션
              </th>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">0,1,2,3,4,5 </td>
              <td className="border border-[#666]">패뽑기</td>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">6, 7</td>
              <td className="border border-[#666]">멈추기</td>
            </tr>
            <tr className="text-red-800 grid grid-cols-2">
              <td className="border border-[#666]">8, 9</td>
              <td className="border border-[#666]">멈추기(자연)</td>
            </tr>
          </table>
          <br />
          <p>
            처음에받은 두장의 카드가 7점 이상이면 한장 더안받고 기다리거나
            내츄랄로 이기게되고 만약에 처음 두장의카드가 0, 1, 2점 이면 무조건
            한장 더받아야합니다. 그러나3, 4, 5, 6점일경우 플레이어에서 받는
            세번째 카드의 점수에 따라서 뱅커의 승패가 결정됩니다. 따라서 아래의
            도표에서 보시는 것처럼 플레이어의 승식이나옴니다.
          </p>
          <br />
          <h3 className="font-extrabold">뱅커 규칙</h3>
          <br />
          <img src="/assets/image/game-card/bakara_06.jpg" />
          <br />
          <p>D=한장 더 받기, N=플레이어의한장 더안받고 끝내기.</p>
        </div>
      </ScrollArea>
    </div>
  );
}
