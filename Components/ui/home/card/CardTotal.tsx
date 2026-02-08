"use client";
import { bricolage, poppins } from "@/fonts/font";

type cardProps = {
  children?: React.ReactNode;
}
export default function CardTotal({children}:cardProps) {
  return (
    <h1
      className={`${bricolage.className} text-[18px] font-semibold leading-8 tracking-[-2%]`}
    >
      {children}
    </h1>
  );
}
