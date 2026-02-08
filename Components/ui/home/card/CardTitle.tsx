"use client";
import { bricolage } from "@/fonts/font";
import React from "react";

type cardProps = {
  children?: React.ReactNode;
  className?: string,
  style?: any,
};
export default function CardTitle({children,className,style}:cardProps) {
  return (
    <h1
      style={{ ...style }}
      className={`${bricolage.className} ${className} text-[18px] leading-6.5 tracking-[-2%] font-semibold`}
    >
      {children}
    </h1>
  );
}
