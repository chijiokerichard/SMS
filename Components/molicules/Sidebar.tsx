"use client"
import { poppins } from "@/fonts/font";
import { Links } from "@/helpers/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
    const pathName = usePathname()
  return (
    <aside className="bg-[#6734c7] border-r border-r-[#8B909A] p-3.5 h-screen w-60 fixed">
        <header>
            <div className="h-28.5 w-full flex flex-col justify-center items-start  py-3.75 px-7.5 ">
                <h1 className="text-[20px] text-[#e4e0e0]">Logo</h1>
            </div>
            <div className="h-11  w-full flex flex-col justify-center  items-start  py-3.75 px-7.5 ">
                <p className="text-[14px] text-[#e4e0e0]">MAIN MENU</p>
            </div>
            <nav className="h-57.5 w-full flex flex-col gap-y-2">
                {Links.map((link)=>
               <Link key={link.name} href={link.path} className={`h-10 ${poppins.className}  text-[15px] flex items-center py-3.75 px-7.5 leading-5.5  ${link.path === pathName?"border-b-[#6734c7] bg-white border-b rounded-lg text-[#6734c7]":"text-[#e4e0e0] hover:bg-[#ece9f12b] hover:text-white rounded-lg"}  border-t-0 border-l-0 border-r-0`}>
               <div className="flex items-center gap-x-2">
                {link.icon} <span>{link.name}</span>
               </div>
               </Link> 
                )}
            </nav>
             <Link href={""} className={`h-10 ${poppins.className} shadow-2xl   text-[15px] flex items-center py-3.75 px-7.5 leading-5.5    border-b  text-[#e4e0e0] hover:text-white rounded-lg border-b-white  border-t-0 border-l-0 border-r-0`}>
               <div className="flex items-center gap-x-2">
                 <BiLogOut size={20}/><span>Logout</span>
               </div>
               </Link> 
        </header>
    </aside>
  )
}

