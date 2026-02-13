"use client"
import { bricolage, plusjarta } from "@/fonts/font";
import Image from "next/image";
import React from "react";

type highlightProps = {
    img:any;
    amount?:string;
    percentage?:string;
    title:string;
    color?:string;
}
export default function HighLight({img,amount,percentage,title,color}:highlightProps) {
  return (
    <div className=" w-71 bg-accent h-full p-3 rounded-md flex items-center justify-between">
        <div className="h-18` w-23 gap-2.5 flex flex-col">
            <span className={`${bricolage.className} text-[12px] text-[#757575] font-semibold leading-[100%] tracking-[-2%] `}>{title}</span>
           <div className={`w-23 h-10 gap-0.5 flex flex-col`}>

            {amount && <h4 className={`${plusjarta.className} text-[20px] text-[#191919] font-bold leading-[150%] tracking-[-3%] `}>{amount}</h4>}
            <span style={{color:color}} className={`${plusjarta.className} text-[14px] text-[#33B843] font-semibold leading-[150%] tracking-[-2%] `}>{percentage}</span>
           </div>
        </div>
      {img}
    </div>
  );
}
