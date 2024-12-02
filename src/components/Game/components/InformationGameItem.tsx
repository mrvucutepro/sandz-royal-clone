"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { handleGameRun } from "@/app/api/game";
import { useAuth } from "@/lib/context/AuthContext";

const openPopup = (popupUrl: string) => {
  const width = 1440;
  const height = 810;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  window.open(
    popupUrl,
    "_blank",
    `top=${top},left=${left},width=${width},height=${height},menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=no,location=no`
  );
};
export default function InformationGameItem({
  img,
  title,
  tags,
  value,
  id,
}: {
  img: StaticImageData;
  title: string;
  tags: string[];
  value: string;
  id: number;
}) {
  const { user, onOpenLogin, setSelectGameRun, selectGameRun } = useAuth();
  const handlePlayGame = async () => {
    if (!user) {
      onOpenLogin();
      return;
    }
    await handleGameRun({
      username: user.MEM_LID,
      game_id: value,
      mobile: "1",
    }).then((res) => {
      console.log(res);
      if (res.status === "0") {
        openPopup(res.popupUrl);
      } else {
        alert(res.message);
      }
    });
  };
  const handleSelectGame = () => {
    if (title === "Casino Game") setSelectGameRun(1);
    else setSelectGameRun(2);

  };
  return (
    <div
      style={{
        background:
          "radial-gradient(100% 93.26% at 100% 0%, #0395F5 0%, #01B7F7 100%)",
      }}
      onClick={handleSelectGame}
      className={`flex justify-between cursor-pointer ${selectGameRun === id ? "opacity-100" : "opacity-40"}`}
    >
      <div className="flex-1 flex flex-col gap-2 pt-11 pl-8">
        <div className="flex gap-1">
          {tags.map((tag, index) => {
            return (
              <p
                key={index}
                className="text-white text-[10px] font-bold px-2 py-[2px] bg-black"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <p className="text-white text-[28px] font-semibold leading-8">
          {title}
        </p>
        <p
          // onClick={handlePlayGame}
          className="text-white text-[28px] font-semibold leading-8 cursor-pointer"
        >
          Start Now
        </p>
      </div>
      <div className="w-[133px] h-[245px] relative">
        <Image src={img} alt="game1" fill className="object-cover" />
      </div>
    </div>
  );
}
