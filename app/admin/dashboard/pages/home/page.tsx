"use client"
import { StudentLIstTable } from "@/Components/StudentTable/StudentLIstTable";
import CardComp from "@/Components/ui/home/components/CardComp";
import { bricolage} from "@/fonts/font";
import { AppContext } from "@/helpers/context";
import { useContext } from "react";

export default function Admin() {
  const { toggleAddModal,display} = useContext(AppContext)
  return (
    <main className={`${display?"overflow-hidden":"h-screen"} bg-white w-full`}>
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full">
        <h1 className="">Overview</h1>
        <div className="flex items-center justify-center gap-x-3">
         <button onClick={()=>toggleAddModal("student")} className={`bg-[#6734c7] text-white h-10 p-3 rounded-lg cursor-pointer ${bricolage.className} text-center flex items-center font-medium justify-center`}>Add Student</button>
         <button onClick={ ()=>toggleAddModal("teacher")} className={`bg-[#6734c7] text-white h-10 p-3 rounded-lg cursor-pointer ${bricolage.className} text-center flex items-center font-medium justify-center`}>Add Teacher</button>
        </div>
          </div>
        <hr className="text-[#acaaaa]"/>
        </div>
       <CardComp/>
       <StudentLIstTable/>
      </div>
      </main>
  )
}
