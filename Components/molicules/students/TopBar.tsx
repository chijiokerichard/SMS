"use client"

import { bricolage,kumbh_Sans } from "@/fonts/font";
import Link from "next/link";
import { BsBell, BsPerson } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function TopBar() {
  return (
    <aside className="bg-white shadow-md flex items-center justify-center px-4  h-20 right-0 left-60 fixed z-3  ">
      <header className="flex items-center w-full justify-between gap-x-20">
        <h1>Student Dashboard</h1>
        
        <div className="flex items-center justify-between gap-x-2 w-50.75">
          
          <Link
            href={"/"}
            className="flex items-center justify-center gap-x-1 w-40  h-11"
          >
            <span className={`text-[17px] font-light ${bricolage.className}`}>Welcome,</span>
            <span className={`text-[14px] ${bricolage.className} text-[#475467] font-bold leading-6.5 tracking-[0.1%]`}>
            Charse

            </span>
          </Link>
        </div>
      </header>
    </aside>
  );
}
