import { JSX } from 'react';

export const BRAND_ID = 3;
export const listAmount = [
  {
    value: 50000,
    label: '오만원',
  },
  {
    value: 100000,
    label: '십만원',
  },
  {
    value: 300000,
    label: '삼십만원',
  },
  {
    value: 500000,
    label: '오십만원',
  },
  {
    value: 1000000,
    label: '백만원',
  },
  {
    value: '',
    label: '직접입력',
  },
];
export const listGames = [
  {
    key: '',
    label: '--확장게임 선택--',
    logo: '/assets/image/game-logo/logo-game-evolution.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'hogaming',
    label: 'HO 게임',
    logo: '/assets/image/game-logo/logo-game-ho.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'dbcasino',
    label: 'DB 카지노 게임',
    logo: '/assets/image/game-logo/logo-game-n2live.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'evolution',
    label: '에볼루션 게임',
    logo: '/assets/image/game-logo/logo-game-evolution.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'pragmatic',
    label: '프라그마틱 게임',
    logo: '/assets/image/game-logo/logo-game-pragmatic.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'pragmatic_slot',
    label: '프라그마틱 슬롯 게임',
    logo: '/assets/image/game-logo/logo-game-pragmatic.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'sexygaming',
    label: '섹시 게임',
    logo: '/assets/image/game-logo/logo-game-cherry.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'microgaming',
    label: '마이크로 게임',
    logo: '/assets/image/game-logo/logo-game-microgaming.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'microgaming_slot',
    label: '마이크로 슬롯 게임',
    logo: '/assets/image/game-logo/logo-game-microgaming.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'redtiger_slot',
    label: '레드타이거 슬롯 게임',
    logo: '/assets/image/game-logo/logo-game-tiger.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'sagaming',
    label: 'SA 게임',
    logo: '/assets/image/game-logo/logo-game-sa.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'uniongaming',
    label: '유니온 게임',
    logo: '/assets/image/game-logo/logo-game-bota.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'simpleplay',
    label: '심플플레이 게임',
    logo: '/assets/image/game-logo/logo-game-deluxe-gold.png',
    image: '/assets/image/play-game-1.jpg',
  },
]

// export const listGames = [
//   {
//     key: 'hogaming',
//     label: 'HO 게임',
//     logo: '/assets/image/game-logo/logo-game-ho.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'dbcasino',
//     label: 'DB 카지노 게임',
//     logo: '/assets/image/game-logo/logo-game-n2live.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
//   {
//     key: 'evolution',
//     label: '에볼루션 게임',
//     logo: '/assets/image/game-logo/logo-game-evolution.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'pragmatic',
//     label: '프라그마틱 게임',
//     logo: '/assets/image/game-logo/logo-game-pragmatic.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
//   {
//     key: 'pragmatic_slot',
//     label: '프라그마틱 슬롯 게임',
//     logo: '/assets/image/game-logo/logo-game-ebet.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'sexygaming',
//     label: '섹시 게임',
//     logo: '/assets/image/game-logo/logo-game-cherry.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
//   {
//     key: 'microgaming',
//     label: '마이크로 게임',
//     logo: '/assets/image/game-logo/logo-game-microgaming.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'microgaming_slot',
//     label: '마이크로 슬롯 게임',
//     logo: '/assets/image/game-logo/logo-game-microgaming.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
//   {
//     key: 'redtiger_slot',
//     label: '레드타이거 슬롯 게임',
//     logo: '/assets/image/game-logo/logo-game-tiger.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'sagaming',
//     label: 'SA 게임',
//     logo: '/assets/image/game-logo/logo-game-sa.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
//   {
//     key: 'uniongaming',
//     label: '유니온 게임',
//     logo: '/assets/image/game-logo/logo-game-bota.png',
//     image: '/assets/image/play-game-2.jpg',
//   },
//   {
//     key: 'simpleplay',
//     label: '심플플레이 게임',
//     logo: '/assets/image/game-logo/logo-game-deluxe-gold.png',
//     image: '/assets/image/play-game-1.jpg',
//   },
// ];

export const listGameSlot = [
  {
    key: 'hogaming',
    label: 'HO 게임',
    logo: '/assets/image/game-logo/logo-game-ho.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'dbcasino',
    label: 'DB 카지노 게임',
    logo: '/assets/image/game-logo/logo-game-n2live.png',
    image: '/assets/image/play-game-2.jpg',
  },
  {
    key: 'evolution',
    label: '에볼루션 게임',
    logo: '/assets/image/game-logo/logo-game-evolution.png',
    image: '/assets/image/play-game-1.jpg',
  },
  {
    key: 'pragmatic',
    label: '프라그마틱 게임',
    logo: '/assets/image/game-logo/logo-game-pragmatic.png',
    image: '/assets/image/play-game-2.jpg',
  },
];

export const listServices = [
  'Deposit',
  'Withdraw',
  'Money Movement',
  'Apply for experience money',
  'Coupon Details',
  'Deposit Withdrawal History',
  'My Page',
  'Resend account',
];

export const eventTab = [
  { title: '바카라', background: '-510px' },
  { title: '블랙잭', background: '-540px' },
  { title: '룰렛', background: '-570px' },
  { title: '식보', background: '-600px' },
  { title: '드래곤타이거', background: '-510px' },
  { title: 'Bullfight', background: '-540px' },
  { title: '마종', background: '-570px' },
  { title: '캐리비언스터드포커', background: '-600px' },
];

export const supportTab = [
  { title: '출금TOP랭킹', background: '-480px' },
  { title: '공지사항', background: '-240px' },
  { title: '자주묻는 질문', background: '-270px' },
  { title: '이벤트안내', background: '-300px' },
  { title: '1:1원격지원', background: '-390px' },
  { title: 'PC안전지킴이', background: '-450px' },
  { title: '파트너 문의', background: '-360px' },
];

export const walletTab = [
  { title: '입금하기'},
  { title: '출금하기'},
  { title: '머니이동'},
  { title: '체험머니신청'},
  { title: '쿠폰내역'},
  { title: '입출금 내역'},
  { title: '마이페이지'},
  { title: '계좌 재전송'},
];
