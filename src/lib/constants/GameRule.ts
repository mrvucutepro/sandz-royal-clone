export const bacara = [
  {
    title: '점수의예:',
    content: [
      '바카라는 8목의 카드를 섞어서 나오는 문양과 수의 변형을 조합한 카드 게임입니다. 딜러에 의해서 각각 뱅커 와 플레이어에 두장씩 카드가 나누어집니다. 딜러가 카드를 나누기 전에 뱅커, 플레이어, 타이 또는 페어 에 베팅이 이루어져야합니다. 이긴 베팅 금액에 대해서는 뱅커와 플페이어에 대해 1대1로 지불이 됩니다. 그러나 5%의 커미션이 뱅커로 이긴 금액에 대해 적용이 됩니다. 그래서 뱅커로 이기신 금액에 대해 실제로는 95%만 지불이 됩니다. 타이 베팅에 대해서는 플레이어와 뱅커가 동점이 나올경우 베팅에대해 8배의 지불이 이루어집니다. 그리고 한번 베팅이 되고 딜러에 의해 카드가 나누어지기 시작하면 베팅을 전혀 바꿀수 없읍니다. 이것은 정해진 규칙으로서 뱅커와 플레이어에 각각 2장씩에 또는 3장씩에 걸친 결과를 기다려야만 합니다. 처음에 나누어진 뱅커와 플레이어에 각각의 2장씩 카드가 같은 숫자가 뱅커 또는 플레이어에 나왔을 경우에 이것을 뱅커 페어 또는 플레이어 페어라고 합니다. 이럴경우 베팅 금액의11배가 지불됩니다. 이런 경우에는 게임에 전혀 지장을 주지 않으며 뱅커와 플레이어 또는 타이 베팅에 대한 게임은 계속 진행됩니다. 카드에 대한 점수계산은 더하기 방법으로 결정되는데, 0에서9까지입니다. 10과 얼굴이 나오는 카드들은 0점으로 취급되며 어떠한 많은 점수가 더해지더라도 끝의 한자리숫자만 점수로 취급됩니다. 그러므로 둘중에 한쪽이 높은 점수가 이기게 되고 동점이 나오면 타이로 이기게 됩니다.',
    ],
  },
  {
    title: '플레이어 규칙',
    content: [
      {
        item: '예1: 6 + 0= 6, 이패의점수는6.',
        image: [
          '/assets/image/game-card/bakara_02.png',
          '/assets/image/game-card/bakara_03.png',
        ],
      },
      {
        item: '예2: 4+ 0 +6=10, 이패의점수는 0.',
        image: [
          '/assets/image/game-card/bakara_04.png',
          '/assets/image/game-card/bakara_05.png',
          '/assets/image/game-card/bakara_04.png',
        ],
      },
    ],
  },
  {
    title: '뱅커패와 플레이패',
    content: [
      {
        image: ['/assets/image/game-card/bakara_06.jpg'],
        item: 'D=한장 더 받기, N=플레이어의한장 더안받고 끝내기.',
      },
    ],
  },
];


export const tableBacara = [
  {
    header: '플레이어 규칙',
    columns: [
      {
        header: 'PLAYER 처음 두 카드의 총합이	',
        data: [
          '0, 1, 2, 3, 4, 5	',
          '6,7',
          '8,9',
        ],
      },
      {
        header: 'PLAYER 액션',
        data: [
          '패뽑기',
          '멈추기',
          '멈추기(자연)',
        ],
      },
    ],
  },

]


export const tableBacara_2 = [
  {
    title: '플레이어 규칙',
    content: [
      {
        header: 'PLAYER 처음 두 카드의 총합이',
        text: ['0, 1, 2, 3, 4, 5	', '6, 7', '8, 9'],
      },
      {
        header: 'PLAYER 액션',
        text: ['패뽑기', '멈추기', '멈추기(자연)'],
      },
    ],
    text: '처음에 받은 두장의 카드가 6점이상이면 한장 더 안받고 기다리거나 내츄랄로 이기게 되고 5점 또는 이하인경우, 한장을 더 받아야합니다.',
  },
  {
    title: '뱅커패와 플레이패',
    content: [
      {
        header: 'BANKER 처음 두 카드의 총합이	',
        text: ['0, 1, 2, 3, 4, 5	', '6, 7', '8, 9'],
      },
      {
        header: 'BANKER 액션',
        text: ['패뽑기', '멈추기', '멈추기(자연)'],
      },
    ],
    text: '처음에받은 두장의 카드가 7점 이상이면 한장 더안받고 기다리거나 내츄랄로 이기게되고 만약에 처음 두장의카드가 0, 1, 2점 이면 무조건 한장 더받아야합니다. 그러나3, 4, 5, 6점일경우 플레이어에서 받는 세번째 카드의 점수에 따라서 뱅커의 승패가 결정됩니다. 따라서 아래의 도표에서 보시는 것처럼 플레이어의 승식이나옴니다.',
  },
];

export const blackJack = [
  {
    title: '블랙잭의 목표',
    content: [
      '이 게임의 기본 전제는 여러분이 자신의 핸드 값이 딜러의 핸드 값보다 21에 근접하면서 21을 넘지 않기를 원한다는 것입니다. 테이블의 다른 플레이어들은 신경쓸 필요가 없습니다. 여러분의 핸드는 엄격하게 딜러의 핸드를 대상으로 플레이됩니다. 딜러의 플레이 규칙은 엄격하게 고정되어 있으며 딜러가 임의로 결정할 여지가 없습니다. 따라서 여러분이 쥐고 있는 카드를 딜러나 테이블에서 플레이하는 다른 사람들이 보아도 아무 문제가 없습니다. 따라서, 슈 게임에서 플레이를 하는 경우 플레이어 카드는 모두 드러내 놓고 돌리게 됩니다. 8개의 카드 데크가 있는 "슈(shoe)"가 사용됩니다. 이 게임에서 초보자가 누릴 수 있는 장점은 각 플레이어의 앞에서 플레이어들의 카드를 드러내 놓고 돌리며 딜러가 플레이어의 질문 및 결정에 대해 도움을 제공할 수 있다는 것입니다.',
    ],
  },
  {
    title: '용어 설명',
    content: [
      '블랙잭：블랙잭(또는 내츄럴이라고도 함)은 첫 두 카드에서 합계가 21이 되는 것입니다. 따라서 블랙잭은 에이스와 10의 값을 갖는 카드로 이루어지며 추가 조건은 반드시 처음 2개의 카드여야 한다는 점입니다. 블랙잭이 되면 플레이어는 3대2의 비율로 상금을 받습니다.',
      '21：2개 이상의 카드의 합계가 총 21이 됩니다.',
      '버스트: 핸드의 합계가 21을 초과.',
      '타이: 플레이어와 딜러의 총 핸드 값이 동일 - 플레이어가 베팅을 유지합니다.',
      '하드 핸드: 에이스가 없거나 값이 1인 에이스만 있는 핸드를 소프트 핸드와는 달리 한가지 값만 받을 수 있으므로 하드 핸드라고 합니다 (원하는 대로 에이스의 값을 1이나 11로 정할 수 있습니다).',
      '소프트 핸드: 값이 11인 에이스가 포함된 핸드를 소프트 핸드라고 부릅니다.',
    ],
  },
  {
    title: '카드의 값',
    content: [
      '2에서 10까지의 카드는 자체 액면 값을 가지고 있습니다.',
      '잭, 퀸 또는 킹은 값이 10입니다.',
      '에이스는 값이 1 혹은 11입니다. 값을 11로 계산하면 플레이어나 딜러의 점수가 21을 초과하게 될 경우에는 값이 1이 됩니다.',
    ],
  },
  {
    title: '플레이어의 선택',
    content: [
      '앤티 베팅: 카드를 돌리기 전에 거는 기본 배팅.',
      '페어스: 카드를 받기 전에 쌍으로 거는 사이드 베팅. 첫 2 카드가 동일할 경우 플레이어가 11대 1(11배)로 상금을 받습니다.',
      '히트: 다른 카드를 받습니다.',
      '스탠드: 더 이상의 카드를 받지 않습니다.',
      '보험: 내츄럴 21을 가진 딜러에 대해 첫 베팅액의 최대 절반까지 추가 베팅하는 것 - 딜러가 보여주는 카드가 에이스일 때만 허용됨. 만약 딜러가 가지고 있던 다른 카드가 10이어서 블랙잭이 된 경우, 보험을 건 금액의 2-1의 비율(2배)로 플레이어에게 보험금을 지불하지만 딜러가 블랙잭이 안되는 경우는 보험을 건 금액을 모두 잃게 됩니다.',
      '스플릿: 첫 카드들이 값이 동일할 때만 허용. 각 카드를 사용하여 별도 핸드를 시작하고 앤티 베팅과 동일한 금액으로 두 번째 베팅을 합니다. 다시 스플릿하는 것은 허용되지 않습니다. 스플릿 핸드 중 하나에 10과 에이스가 나왔을 경우, 이것은 블랙잭으로 간주되지 않고 그냥 21로 처리됩니다.',
      '더블 다운: 처음 받은 두 장의 카드 합이 하드 핸드 9, 10 또는 11(하드 핸드는 처음 받은 두 장의 카드에 에이스 카드가 들어 있지 않은 핸드를 의미)일 경우 플레이어는 앤티 베팅과 같은 금액을 추가로 베팅할 수 있습니다. 하지만 카드는 단 한 장만 받을 수 있습니다.',
    ],
  },
  {
    title: '하우스 룰',
    content: [
      '딜러는 항상 히트나 스탠드를 선택할 때 하우스 룰을 준수해야 합니다. 블랙잭의 규칙은 딜러가 17(하드 핸드와 소프트 핸드)일 때 스탠드하고 16일 때까지 계속 카드를 뽑아야 합니다.',
    ],
  },
  {
    title: '게임 규칙 요약',
    content: [
      '모든 플레이어가 앤티 베팅을 하고 옵션인 사이드 베팅 “페어스”를 하면 플레이가 시작됩니다. 그러면 모든 플레이어가 2장씩 액면을 드러낸 카드를 받습니다. 딜러 자신은 액면을 드러낸 카드 1장과 감춘 카드 1장씩을 갖습니다.액면을 드러낸 카드를 본 다음 각 플레이어들은 순서대로(우측에서 좌측으로 좌석 1번에서 7번까지) 딜러에게 자신의 핸드를 종료할지 결정하여 알려줍니다. 모든 플레이어들이 자신의 결정을 한 다음 딜러가 자신의 액면을 감춘 카드를 펼쳐 하우스의 규칙에 따라 자신의 핸드를 종료합니다.',
    ],
  },
  {
    title: '착석 플레이어와 외부 플레이어',
    content: [
      '게임에 참여하여 "착석(Sit-in)” 버튼을 누른 플레이어는 착석 플레이어가 되어 게임에서 모든 의사결정을 할 수 있습니다. 테이블의 좌석 유무에 관계 없이 외부 플레이어로서 게임에 참여하여 베팅을 할 수 있습니다. 외부 플레이어는 게임에서 의사결정을 할 수 없으며 착석 플레이어를 따라야 합니다.',
    ],
  },
];

export const roulette = [
  {
    title: '',
    content: [
      '저희 게임은 유럽식의 룰렛게임이며 여기에는 한 개의 구슬이 들어가는 37개의 작은 칸막이가 있습니다. (0에서36까지)',
      '룰렛은 시계방향으로 돌아가며 멈출 때마다 한번의 게임이 이루어집니다. 딜러는 휠 을 돌리고 구슬을 던지며 구슬은 특정 칸에서 멈추게 됩니다.',
      '룰렛 게임은 구슬이 멈췄을 때 구슬이 어느 특정 색깔 (붉은색 혹은 검은색) 이나 특정숫자 혹은 숫자의 조합에 떨어지는지를 맞추는 게임입니다.',
    ],
  },
  {
    title: '배팅하기',
    content: {
      text_1:
        '룰렛 테이블은 1~36까지의 숫자를 12개 칸씩 3열로 있고 색깔 별로도 배팅을 할 수 있습니다. 이것이 이 게임의 특성이며 여기에는 여러 가지 다양한 배팅 법이 존재합니다. 직접배팅, 2개 숫자배팅, 분할배팅(이등분배팅), 3개 숫자배팅(3등분배팅), 모서리배팅, 6개 숫자배팅, 12개 숫자배팅, 색깔배팅, 홀짝 배팅, 고저 배팅 등 배팅에 제약이 없습니다. 게임자가 임의로 배팅을 정할 수 있습니다. 컴퓨터 오른쪽 상단에 최근 휠 이 돌아간 숫자가 보여지며, 현재 휠 이 돌아서 특정 칸에 멈추기 전까지 어떤 특정숫자가 나올 확률이 높은 쪽을 예상할 수 있는 좋은 기회가 옵니다',
      text_2:
        ' (아래쪽 그림에서 자기자본을 포함하지 않는 배팅종류의 배당률을 볼 수 있다.)룰렛 에는 여러 다른 배팅이 존재하며, 각각의 조합에는 최소 배팅이 정해져 있다. ("최소금액"세부사항 참조) 편의를 위해서 최소 배팅에 못 미치게 배팅하더라도 시스템이 최소배팅에 해당하는 금액으로 자동적으로 배팅하게 되어있다.',
      table: [
        {
          left: [
            'Type of Bets	',
            'Straight Bets	',
            'Split Bets	',
            'Trio Bets	',
            'The Corner Bets	',
            'The 6 Number Bet	',
            'The Dozen Bet	',
            'Bet on "0"	',
            'Column Bet	',
            'Section Bet	',
            'Small Odd / Small Even or Big Odd / Big Even Bet',
            'Big Red / Small Red or Big Black / Small Black Bet',
            'Red or Black	',
            'High or Low',
            'Even or Odd',
          ],
        },
        {
          right: [
            'Odds (Capital not included)',
            '1:35',
            '1:17',
            '1:11',
            '1:8',
            '1:5',
            '1:2',
            '1:35',
            '1:2',
            '1:2',
            '1:1',
          ],
        },
      ],
    },
  },
];

export const dragonTiger = [
  '드래곤타이거는 단 1장의 카드만으로 승패를 결정하는 게임으로써 카지노에서 제공되는 그 어떤 게임보다도 가장 빠르게 게임이 진행되며 게임룰 또한 매우 단순합니다.',
  '우선, 손님이 배팅할 수 있는 곳은 드래곤(Dragon) 또는 타이거(Tiger)입니다.<전통바카라에서 플레이어와 뱅커 중 둘중에 한곳에 배팅하는 것과 동일한 방식입니다.>',
  '드래곤과 타이거는 각자 단 1장의 카드만을 받게 되며 양쪽이 받은 카드 중 높은 숫자를 받은 곳이 승리하게 됩니다.',
  '<카드의 순위는 K → Q → J → 10 → 9 → ········ A의 순으로 밑으로 갈수록 낮은숫자가 되며, 따라서, 가장 높은 숫자는 K이고 가장 낮은 숫자는 A가 됩니다.>',
  '또한, 손님은 타이에도 배팅할 수 있으며 드래곤과 타이거가 받은 카드가 동일한 경우 배팅금액의 8배를 배당받게 됩니다. 만약, 타이에 배팅하지 않은 상태에서 드래곤과 타이거가 같은 카드를 받아 타이가 나오게 되면, 손님은 배팅한 금액의 ½만을 돌려받습니다.',
];

export const sikbo = [
  {
    header: '',
    content: [
      '식보 게임은 3개의 주사위로 하는 게임이며 카운트 다운 전에 플레이어가 무엇을 배팅할지를 정하는 것입니다.',
      '카운트 다운이 끝나면 3개의 주사위는 잠시 흔들어지며 굴려진 후에 위로 보여지는 면의 숫자 조합으로 결과를 정합니다.',
      '결과가 불분명하게 나왔을 때는 주사위를 다시 던집니다. 예를 들면 주사위가 겹쳐져 윗면이 정확하게 나오지 않거나 게임결과가 부정확 할 때 다시 던지게 됩니다.',
      '결과는 3개중 두 개의 주사위로 정해집니다. (크거나 작거나 혹은 짝수 홀수)',
    ],
  },
  {
    header: ['Type of Bets', 'Description', 'Payout'],
  },
  {
    header: 'Specific total',
    content: {
      left: [
        'Big',
        'Small',
        'Odd',
        'Even',
        '4 or 17',
        '5 or 16',
        '6 or 15',
        '7 or 14',
        '8 or 13',
      ],
      center: [
        'Sum of the numbers is from 11 to 17',
        'Sum of the numbers is from 4 to 10	',
        'Sum of the numbers is any of 5, 7, 9, 11, 13, 15, 17',
        'Sum of the numbers is any of 4, 6, 8, 10, 12, 14, 16',
        'Sum of the numbers is from 4 to 17	',
        'Sum of the numbers is from 5 to 16	',
        'Sum of the numbers is from 6 to 15	',
        'Sum of the numbers is from 7 to 14	',
        'Sum of the numbers is from 8 to 13	',
        'Sum of the numbers is any of 9, 10, 11, 12',
      ],
      right: [
        'Sum of the numbers is from 11 to 17',
        'Sum of the numbers is from 4 to 10	',
        'Sum of the numbers is any of 5, 7, 9, 11, 13, 15, 17',
        'Sum of the numbers is any of 4, 6, 8, 10, 12, 14, 16',
        'Sum of the numbers is from 4 to 17	',
        'Sum of the numbers is from 5 to 16	',
        'Sum of the numbers is from 6 to 15	',
        'Sum of the numbers is from 7 to 14	',
        'Sum of the numbers is from 8 to 13	',
        'Sum of the numbers is any of 9, 10, 11, 12',
      ],
    },
  },
  {
    header: 'Combination bets',
    content: {
      left: [
        'Specific Triple	',
        'Any Triple	',
        'Specific Double	',
        'Pair Match	',
        'Triple Match	',
        'Number Match',
      ],
      center: [
        'Three dice showing the same number which must be the specific number selected	',
        'Three dice showing the same number which can be any of six possible numbers		',
        'Two of the three dice must show the double selected	',
        'Two of the three dice must make the pair selected	',
        'Three dice must be the three of four numbers selected		',
        'One of three dice matches the number selected - Single		',
        'Two of three dice match the number selected - Double		',
        'All three dice match the number selected - Triple	',
      ],
      right: ['1:150', '1:24', '1:8', '1:5', '1:7', '1:1', '1:2', '1:3'],
    },
  },
];




