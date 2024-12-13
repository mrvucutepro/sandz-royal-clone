import { Button } from '@nextui-org/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../../ui/Input/index';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { listAmount, listGames } from '@/lib/constants';
import { handleWithDraw } from '@/app/api/payment';
import PopupWithdraw from './PopupWithdraw';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { Dropdown } from '@/components/ui/Dropdown';

const list_guides = [
  {
    title: '슬롯 - 롤링200%, 첫충전 10%, 매일충전 5% 자동 지급',
  },
  {
    title: '카지노 - 롤링 100%',
    subtitle: '카지노 이용 시 당일 페이백 이벤트 참여 불가',
  },
  {
    title: '받지않음 - 포인트 미지급 롤링 100%',
  },
];

const GuidDeposit = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex gap-1 items-start">
      <div className="w-[9px] h-[9px] border border-solid border-[#777777] mt-1" />
      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm leading-5 text-[#111111]">
          {title}
        </span>
        {subtitle && (
          <span className="font-normal text-xs leading-4 text-[#444444]">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

const schema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required')
    .min(50000, 'Amount must be at least 50,000')
    .max(10000000, 'Amount must be at most 10,000,000')
    .test(
      'is-multiple-of-10000',
      'Amount must be a multiple of 10,000',
      (value) => {
        return value % 10000 === 0;
      },
    ),
  deposit_name: yup.string().required('Deposit name is required'),
  game: yup.string().required('Game is required'),
  comment: yup.string().default(''),
});

export type FormDeposit = yup.InferType<typeof schema>;

export default function WithdrawComponent({header} : {header : string}) {
  const router = useRouter();
  const { user } = useAuth();
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 50000,
      deposit_name: '',
      game: undefined,
      comment: '',
    },
  });

  const handleSelectPayment = (value: number) => {
    setValue('amount', value);
  };

  const handleSetValueInit = () => {
    reset({
      amount: 50000,
      deposit_name: '',
      game: undefined,
      comment: '',
    });
  };

  const onSubmit = async (data: FormDeposit) => {
    if (!user) {
      console.error('User is not authenticated');
      router.push('/');
      return;
    }
    const customData = {
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game,
      username: user.MEM_LID,
      comment: data.comment ?? null,
    };
    try {
      await handleWithDraw(customData)
        .then((res) => {
          console.log(res);
          if (res.status === '0') {
            toast.success(res.message);
            handleSetValueInit();
          } else {
            toast.error(res.message);
            handleSetValueInit();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    } catch (error) {
      console.error('Error Deposit: ', error);
    }
  };

  const handleGameSelection = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <PopupWithdraw />
      <p className='text-[#aaa] font-bold text-lg py-4'>{header}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ScrollArea className='!bg-[#ffffff80]'>
          <div className="flex p-4 justify-start gap-16 border items-center">
            <h3 className="font-bold">신청게임</h3>
            <Dropdown
              label={'--확장게임 선택--'}
              items={listGames}
              onValueChange={handleGameSelection}
            />
            <p className="text-xs">입금 신청하실 게임을 선택해주세요</p>
          </div>
          <div className="flex p-4 justify-start gap-16 border border-t-0 items-center">
            <h3 className="font-bold">출금가능금액</h3>
            <p className="text-xs">신청하실 게임을 선택하여주세요.</p>
          </div>
          <div className="flex p-4 justify-start gap-7 border border-t-0 items-center">
            <h3 className="font-bold">출금하실금액 </h3>
            <input className="h-full p-2 border" placeholder="abc"></input>
            {listAmount.map((amount, index) => (
              <div key={index}>
                <button className="text-white p-2 rounded-sm border text-xs bg-[#aaa]">
                  {amount.label}
                </button>
              </div>
            ))}
            <p className="text-xs">* 출금 최소 금액은 5만원입니다</p>
          </div>
          <div className="flex p-4 justify-start gap-20 border border-t-0 items-center">
            <h3 className="font-bold">은행명</h3>
            <Dropdown
              label={'--확장게임 선택--'}
              items={listGames}
              onValueChange={handleGameSelection}
              disabled={true}
            />
          </div>
          <div className="flex p-4 justify-start gap-20 border border-t-0 items-center">
            <h3 className="font-bold">예금주</h3>
            <input className="h-full p-2 border" placeholder="김수호"></input>
            <p className="text-xs">
              * 입/출금 계좌 다르게 사용시 출금처리 안될 수 있으니 계좌 동일하게
              사용 부탁드립니다. 참고해주세요.
            </p>
          </div>
          <div className="flex p-4 justify-start gap-16 border border-t-0 items-center">
            <h3 className="font-bold">계좌번호</h3>
            <input
              className="h-full p-2 border"
              placeholder="1232135****33"
            ></input>
            <button className="text-white p-2 rounded-sm border text-xs bg-[#aaa]">
              계좌정보변경
            </button>
          </div>
          <div className="flex p-4 justify-start gap-10 border border-y-0 border-t-0 items-center">
            <h3 className="font-bold">남기고 싶은말</h3>
            <textarea
              className="h-full w-full border"
              placeholder=""
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-red-700 text-white hover:bg-red-600 text-2xl rounded-sm flex mx-auto px-10"
          >
            신청하기
          </Button>
        </ScrollArea>
      </form>
    </>
  );
}
