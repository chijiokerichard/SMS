"use client";

import { bricolage, poppins } from "@/fonts/font";
type cardProps = {
  title?: string;
  total?: string;
  days?: string;
};

export default function Card({ title, total, days }: cardProps) {
  return (
    <div className="w-80 h-full shadow-2xl rounded-2xl px-7 py-5  border-[#6734c7] border flex items-center justify-start">
      <div className="h-26 w-auto gap-y-4 flex flex-col">
        <div className="h-13.5 ">
          <p
            className={`${bricolage.className} text-[18px] leading-6.5 tracking-[-2%] font-semibold`}
          >
            {title ?? "Total Attendace Today"}
          </p>
          <span className="text-[14px] font-normal leading-[2opx] tracking-[-2%] text-[#8B909A]">
            {days ?? "last 7days"}
          </span>
        </div>
        <h1
          className={`${poppins.className} text-[32px] font-normal leading-8 tracking-[-2%]`}
        >
          {total ?? "2.4k"}
        </h1>
      </div>
    </div>
  );
}
