import { Button, Dropdown, Textarea, VisuallyHidden } from '@nextui-org/react';
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Input  from '../../ui/Input/index';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { listAmount, listGames } from '@/lib/constants';
import { handleDeposit } from '@/app/api/payment';
import { Dialog, DialogContent, DialogTitle, DialogTrigger} from '@radix-ui/react-dialog';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { IChangePhoneProps } from '@/app/type';
import { handleChangePhone } from '@/app/api/user';
import { ChangePhoneForm } from '../ChangePhoneForm';
 

const list_guides = [
  {
    title: "슬롯 - 롤링200%, 첫충전 10%, 매일충전 5% 자동 지급",
  },
  {
    title: "카지노 - 롤링 100%",
    subtitle: "카지노 이용 시 당일 페이백 이벤트 참여 불가",
  },
  {
    title: "받지않음 - 포인트 미지급 롤링 100%",
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
    .required("Amount is required")
    .min(50000, "Amount must be at least 50,000")
    .max(10000000, "Amount must be at most 10,000,000")
    .test(
      "is-multiple-of-10000",
      "Amount must be a multiple of 10,000",
      (value) => {
        return value % 10000 === 0;
      }
    ),
  deposit_name: yup.string().required("Deposit name is required"),
  game: yup.string().required("Game is required"),
  comment: yup.string().default(""),
});

export type FormDeposit = yup.InferType<typeof schema>;


export default function DepositComponent() {
  const router = useRouter();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 50000,
      deposit_name: "",
      game: undefined,
      comment: "",
    },
  });

  const handleSelectPayment = (value: number) => {
    setValue("amount", value);
  };

  const handleSetValueInit = () => {
    reset({
      amount: 50000,
      deposit_name: "",
      game: undefined,
      comment: "",
    });
  };

  const onSubmit = async (data: FormDeposit) => {
    if (!user) {
      console.error("User is not authenticated");
      router.push("/");
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
      await handleDeposit(customData)
        .then((res) => {                    
          if (res.status === "0") {
            toast.success(res.message);
            handleSetValueInit();
          } else {
            toast.error(res.message);
            handleSetValueInit();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    } catch (error) {
      console.error('Error Deposit: ', error);    }
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-16 flex items-center border border-[#cecece] p-3 rounded-t-lg ">
            <Controller
              name="game"
              control={control}
              render={({ field }) => (
                <>
                  <p className="mb-[10px] font-extrabold text-sm flex items-center">신청게임</p>
                  <div className="flex gap-3">
                    <select
                      className="text-black w-[400px] bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <option value="" disabled>
                        확장게임 선택
                      </option>
                      {listGames.map((game) => (
                        <option key={game.key} value={game.key}>
                          {game.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.game && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.game?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="text-[#00a2ff] border border-[#cecece] p-3 pl-32">
            게임창에 입장하시면 게임머니 지급이 불가하오니 로비에서 기다려주세요.
          </div>
          <div className="gap-12 flex items-center border border-[#cecece] p-3">
            <p className='mb-[10px] font-extrabold text-sm flex items-center'>핸드폰번호</p>
            <div className='grid gap-3'>
              <div className='flex w-[50%] gap-3'>
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  placeholder="성명을 입력하세요."
                  disabled
                  value={user?.HP_NO.slice(0,3)}
                />
                <span className="text-xl text-[#666]">-</span>
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  placeholder="성명을 입력하세요."
                  disabled
                  value={user?.HP_NO.slice(3,7)}
                />
                <span className="text-xl text-[#666]" >-</span>
                <Input
                  classNameInput="bg-white focus:bg-white text-black border-none "
                  placeholder="성명을 입력하세요."
                  disabled
                  value={user?.HP_NO.slice(7)}
                />
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button className='bg-red-500'>핸드폰번호 변경</Button>
                  </DialogTrigger>
                  <DialogContent>
                      <VisuallyHidden>
                        <DialogTitle>핸드폰번호 변경</DialogTitle>
                      </VisuallyHidden>
                    <ChangePhoneForm onClose={handleClose}/>
                  </DialogContent>
                </Dialog>
              </div>
              <p> * 입력된 핸드폰 번호로 계좌가 전송되오니 정확하게 입력하시기 바랍니다.</p>
            </div>
          </div>
          <div className="gap-10 flex items-center border border-[#cecece] p-3">
          <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <>
                  <div className='flex '>
                    <div className="flex gap-16 items-center">
                      <p className="mb-[10px] font-extrabold text-sm flex items-center">신청게임</p>
                      <div className='grid gap-2'>
                        <Input
                          classNameInput="bg-white focus:bg-white text-black focus:text-black border-none"
                          {...field}
                          value={field.value?.toString()}
                          placeholder="금액을 입력하세요"
                        />
                        <div className='flex gap-4'>
                          {listAmount.map((amt, inx) => (
                            <div className='bg-[#aaa] flex items-center p-2 rounded-sm text-white cursor-pointer hover:bg-[#949494]' key={inx} value={amt.value} onClick={() => handleSelectPayment(amt.value)}>
                              {amt.label}
                            </div>
                          ))}
                          <p className='content-center'>* 입금 최소 금액은 3만원입니다.</p>
                        </div>
                      </div>
                    </div>
                      {errors.amount && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.amount?.message}
                        </p>
                      )}
                  </div>
                </>
              )}
            />
          </div>
          <div className="gap-10 flex items-center border border-[#cecece] p-3">
            <Controller
              name="deposit_name"
              control={control}
              render={({ field }) => (
                <>
                  <div className="flex gap-24">
                    <p className='mb-[10px] font-extrabold text-sm flex items-center'>입금자명</p>
                    <Input
                      classNameInput="bg-white focus:bg-white text-black focus:text-black border-none "
                      {...field}
                      placeholder="성명을 입력하세요."
                    />
                    <p className='content-center'>* 입금 최소 금액은 3만원입니다.</p>
                  </div>
                  {errors.deposit_name && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.deposit_name?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="gap-10 flex items-center border border-[#cecece] p-3">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <>
                  <p className="mb-[10px] font-extrabold text-sm flex items-center">남기고 싶은말</p>
                  <div className="max-w-full">
                    <Textarea
                      className="bg-white text-black max-w-full"
                      {...field}
                      placeholder="남기고 싶은말"
                    />
                  </div>
                  {errors.comment && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.comment?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <Button type="submit" className='bg-red-700 text-white text-2xl rounded-sm flex mt-4 block mx-auto px-10'>신청하기</Button>
    </form>
  )
}
