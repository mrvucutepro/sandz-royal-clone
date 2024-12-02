import { useAuth } from "@/lib/context/AuthContext";
import { IProfile } from "@/lib/type";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

export const ProfileUser = ({ user }: { user: IProfile }) => {
    const { logout } = useAuth();
    return (
        <div className='flex items-center gap-4 cursor-pointer'>
            <div className='flex flex-col gap-1'>
                <span className='text-white font-semibold'>{user.MEM_LID}</span>
            </div>
            <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <div className='relative w-10 h-10'>
                        <img src="/assets/image/icon2.png" alt='avatar' className='object-cover' />
                    </div>
                </PopoverTrigger>
                <PopoverContent className='px-4 py-2 flex flex-col gap-1 text-black'>
                    <span className='my-2'>{user.MEM_LID}</span>
                    <span>{user.HP_NO}</span>
                    <Button onClick={logout} startContent={
                        <div className='relative w-4 h-4'>
                            <img src="/assets/image/icon2.png" alt='avatar' className='object-cover' />
                        </div>
                    } variant='light'>Logout</Button>
                </PopoverContent>
            </Popover>
        </div>
    )
}