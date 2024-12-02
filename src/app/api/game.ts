import { GameRunProps } from "../type";
import { BRAND_ID } from "@/lib/constants";
import { customFetch } from "@/lib/helper/customFetch";


export const handleGameRun = async (data: GameRunProps) => {
  return await customFetch("/game-run", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      game_id: data.game_id,
      mobile: data.mobile,
    }),
  });
};

