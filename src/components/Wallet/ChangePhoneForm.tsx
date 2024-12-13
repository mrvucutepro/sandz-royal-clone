import { handleChangePhone } from "@/app/api/user";
import { IChangePhoneProps } from "@/app/type";
import { useAuth } from "@/lib/context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstNumber: Yup.string()
        .required('Title is required'),
    lastNumber: Yup.string()
        .required('First Name is required'),
    firstNewNumber: Yup.string()
        .required('First Name is required'),
    middleNewNumber: Yup.string()
        .required('First Name is required'),
    lastNewNumber: Yup.string()
        .required('First Name is required'),
});


export const ChangePhoneForm = ({onClose}) =>{
    const { control, handleSubmit, getValues } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            firstNumber: "", 
            lastNumber: "",
            firstNewNumber: "",
            middleNewNumber: "",  
            lastNewNumber: "",  
        }
    });
    const { user } = useAuth();
    
    const onSubmit = async () => {
        const {firstNewNumber, middleNewNumber, lastNewNumber } = getValues();

        const firstNumber = user?.HP_NO.slice(5, 7);
        const lastNumber = user?.HP_NO.slice(7, 9);
        const currentPhone = `${user?.HP_NO.slice(0, 3)}`+`${user?.HP_NO.slice(3, 5)}`+`${firstNumber}-${lastNumber}`+`${user?.HP_NO.slice(9, 11)}`;
        const newPhone = `${firstNewNumber}`+`${middleNewNumber}`+`${lastNewNumber}`;
        if (user && currentPhone !== newPhone) {
            console.log(1);
            try {
                const res = await handleChangePhone({
                    current_mobile: currentPhone, 
                    mobile: newPhone, 
                })
                if (res.status === "0") {
                    console.log(2);
                    toast.success("전화번호가 업데이트되었습니다.");
                    onClose(); 
                }
            } catch (error) {
                console.error(error);
                toast.error("전화번호를 업데이트하는 중에 오류가 발생했습니다.");
            }
        }
    }
    
    return(
      <form onSubmit={handleSubmit(onSubmit)} className="">  
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <ScrollArea>
            <div className="w-[650px] h-[280px] bg-[#ccc] p-3 border">
              <div className='text-sm font-bold flex text-[#666] py-1 justify-center'>
                휴대폰 번호변경
              </div>
              <div>
                <div className="gap-12 flex items-center bg-[#e0e0e0] rounded-t-sm p-3">
                  <p className='mb-[10px] font-extrabold text-sm flex items-center'>기존 휴대폰 번호</p>
                  <div className='grid gap-3'>
                    <div className='flex w-[100%] gap-3'>
                      <div className='text-sm w-[150px] content-center'>{user?.HP_NO.slice(0,3)} - {user?.HP_NO.slice(3,5)}</div>   
                      <Controller
                        name="firstNumber"
                        control={control}
                        defaultValue="**"
                        render={({ field }) => (
                          <Input
                            {...field} 
                            className="bg-white focus:bg-white text-black border-none"
                            placeholder="**"
                            maxLength={2}
                          />
                        )}
                      />                 
                      <span className="text-xl text-[#666]">-</span>
                      <Controller
                        name="lastNumber"
                        control={control}
                        defaultValue="**"
                        render={({ field }) => (
                          <Input
                            {...field} 
                            className="bg-white focus:bg-white text-black border-none"
                            placeholder="**"
                            maxLength={2}
                          />
                        )}
                      />  
                      <div className='text-sm w-[100px] content-center'>{user?.HP_NO.slice(9,11)}</div>                    
                    </div>
                  </div>
                </div>
              </div>
              <div>
              <div className="gap-12 flex items-center bg-[#e0e0e0] rounded-b-sm p-3 border-t-slate-300 border">
                <p className='mb-[10px] font-bold text-sm flex items-center'>변경할 휴대폰 번호</p>
                  <div className='grid gap-3'>
                    <div className='flex w-[100%] gap-3'>
                    <Controller
                        name="firstNewNumber"
                        control={control}
                        defaultValue="**"
                        render={({ field }) => (
                          <Input
                            {...field} 
                            className="bg-white focus:bg-white text-black border-none"
                            placeholder="**"
                            maxLength={3}
                          />
                        )}
                    />
                    <span className="text-xl text-[#666]">-</span>
                    <Controller
                        name="middleNewNumber"
                        control={control}
                        defaultValue="**"
                        render={({ field }) => (
                          <Input
                            {...field} 
                            className="bg-white focus:bg-white text-black border-none"
                            placeholder="**"
                            maxLength={4}
                          />
                        )}
                    />
                    <span className="text-xl text-[#666]">-</span>
                    <Controller
                        name="lastNewNumber"
                        control={control}
                        defaultValue="**"
                        render={({ field }) => (
                          <Input
                            {...field} 
                            className="bg-white focus:bg-white text-black border-none"
                            placeholder="**"
                            maxLength={4}
                          />
                        )}
                    />                    
                    </div>
                    <p className="text-xs">* 변경할 휴대폰 번호를 입력하세요..</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-4 gap-3">
                <Button type='submit' className='hover:bg-slate-300 bg-[#aaa] text-white rounded-sm'>수정하기</Button>
                <Button onClick={onClose} className='hover:bg-slate-300 bg-[#aaa] text-white rounded-sm'>창닫기</Button>

              </div>
            </div>
          </ScrollArea>
        </div>
      </form>
    )
  }
  