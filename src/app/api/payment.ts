import { IDepositProps } from "../type";
import { BRAND_ID } from "@/lib/constants";
import { customFetch } from "@/lib/helper/customFetch";

export const handleDeposit = async (data: IDepositProps) => {
  return await customFetch("/deposit", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game_id,
      user_remark: data.comment,
    }),
  });
};

export const handleWithDraw = async (data: IDepositProps) => {
  return await customFetch("/withdraw", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game_id,
      user_remark: data.comment,
    }),
  });
};

