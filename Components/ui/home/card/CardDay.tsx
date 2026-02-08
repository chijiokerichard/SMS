"use client";

import React from "react";
type cardProps = {
  children?: React.ReactNode;
  
};
export default function CardDay({children}:cardProps) {
  return (
    <span className="text-[14px] font-normal leading-[2opx] tracking-[-2%] text-[#8B909A]">
      {children}
    </span>
  );
}
