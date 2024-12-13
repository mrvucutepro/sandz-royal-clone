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
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { Dropdown } from '@/components/ui/Dropdown';

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

export default function ApplyForExpMoney({ header }: { header: string }) {
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
      <p className="text-[#aaa] font-bold text-lg py-4">{header}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ScrollArea className="!bg-[#ffffff80]">
          <div className="flex p-4 justify-start gap-16 border border-b-0 items-center">
            <h3 className="font-bold">이동전 게임</h3>
              <div className="flex w-[50%] gap-3 ">
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  disabled
                  value={user?.HP_NO.slice(0, 3)}
                />
                <span className="text-xl text-[#666]">-</span>
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  disabled
                  value={user?.HP_NO.slice(3, 7)}
                />
                <span className="text-xl text-[#666]">-</span>
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  disabled
                  value={user?.HP_NO.slice(7)}
                />
                </div>
                <p className="text-xs">
                  * 체험머니ID가 전송되오니 정확하게 입력하시기 바랍니다.
                </p>
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
