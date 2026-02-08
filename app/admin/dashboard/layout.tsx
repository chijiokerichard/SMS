"use client"
import Sidebar from "@/Components/molicules/Sidebar";
import Topbar from "@/Components/molicules/Topbar";
import AddStudent from "@/Components/student/AddStudent";
import AddTeacher from "@/Components/teacher/AddTeacher";
import { AppContext } from "@/helpers/context";
import { useState } from "react";

type modalType ="student"|"teacher"|null;

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [display,setDisplay] = useState<modalType>(null)
  function toggleAddModal<T>(type:modalType){
    setDisplay(type)
  }
  return (
      
    <AppContext.Provider value={{display,toggleAddModal}}>
    <div className={`flex antialiased relative `}>
      {display && <div onClick={()=>toggleAddModal(null)} className="fixed inset-0 z-10 bg-[#0000009e] backdrop-blur-xs bottom-0 flex items-center justify-center">
        <div onClick={(e)=>e.stopPropagation()} className=" relative">
        {display==="student" && <AddStudent/>}
          {display==="teacher" && <AddTeacher/>}
        </div>
        
        
        
        </div>}
      <Sidebar />
      <div className='w-full ml-60  h-auto text-gray-900'>
        <Topbar />
        <div className={`p-4 pb-0  bg-white shadow mt-24 h-full rounded-sm mb-4 border  mx-4 `}>{children}</div>
      </div>
    </div>
    </AppContext.Provider>
  );
}
