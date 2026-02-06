"use client"

import { StudentLIstTable } from "@/Components/StudentTable/StudentLIstTable"
import CardComp from "@/Components/ui/home/components/CardComp"

export default function Result() {
  return (
     <main className="h-screen bg-white w-full ">
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col">
            <h1 className="">Results</h1>
            <hr className="text-[#acaaaa]"/>
            </div>
           <CardComp/>
           <StudentLIstTable/>
          </div>
          </main>
  )
}