import { IChangePasswordProps, IChangePhoneProps, IGetInfo } from "../type";
import { customFetch } from "@/lib/helper/customFetch";


export const handleChangePhone = async (data: IChangePhoneProps) => {
  return await customFetch("/phone", {
    method: "POST",
    body: JSON.stringify({
        current_mobile:data.current_mobile,
        mobile: data.mobile,
    }),
  });
}
export const handleChangePassword = async (data: IChangePasswordProps) => {
    return await customFetch("/password-update", {
      method: "POST",
      body: JSON.stringify({
      brand_id: data.brand_id,
      username: data.username,
      current_password:data.current_password,
      password: data.password,
    }),
  });
};

export const handleGetBankInfo = async (data: IGetInfo) => {
  return await customFetch("/mypage", {
    method: "POST",
    body: JSON.stringify({
    username: data.username,
    brand_id: data.brand_id,
  }),
});
}
