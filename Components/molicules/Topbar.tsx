"use client"

import { bricolage, kumbh_Sans } from "@/fonts/font";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsPerson } from "react-icons/bs";
import { MdDashboard, MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Topbar() {
  return (
    <aside className="bg-white shadow-md flex items-center justify-center px-4  h-20 right-0 left-60 fixed z-3  ">
      <header className="flex items-center w-full justify-between gap-x-20">
        <h1>Dashboard</h1>
        <div className="h-10 w-full bg-[#b4b4b436] flex items-center justify-center rounded-lg p-3 text-center">
         <div  className="w-full flex items-center gap-x-3 justify-between">
          <div className="flex-1 flex items-center gap-x-0.5 justify-start">
          <BiSearch className="text-[#8B909A] " size={16} />
           <input placeholder="Search" type="text"  className={`flex flex-1 text-sm tracking-[0%] list-inside leading-5 outline-none placeholder:text-gray-300 ${kumbh_Sans.className}`}/>
          </div>
           <MdDashboard className="text-[#8B909A]" size={25}/>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2 w-50.75">
          <Link href={"/"} className="relative">
          <div className="w-5 h-5 rounded-full text-sm left-3 bottom-3 absolute flex items-center justify-center bg-red-500 text-white"> 3</div>
            <BsBell size={24} />
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-center gap-x-3 w-40  h-11"
          >
            <BsPerson size={24} />
            <span className={`text-[14px] ${bricolage} text-[#475467] leading-6.5 tracking-[0.1%]`}>
            Admin Panel

            </span>
            <MdOutlineKeyboardArrowDown size={24} />
          </Link>
        </div>
      </header>
    </aside>
  );
}
