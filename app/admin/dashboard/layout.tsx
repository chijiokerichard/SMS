"use client"
import Sidebar from "@/Components/molicules/Sidebar";
import Topbar from "@/Components/molicules/Topbar";
import AddStudent from "@/Components/student/AddStudent";
import { AppContext } from "@/helpers/context";
import { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [display,setDisplay] = useState<boolean>(false)
  function toggleAddModal(){
    setDisplay((prev)=>!prev)
  }
  return (
      
    <AppContext.Provider value={{display,toggleAddModal}}>

    <div className={`flex antialiased relative`}>
      {display && <div onClick={(e)=>{
        e.stopPropagation()
        toggleAddModal
      }
      } className="fixed inset-0 z-10 bg-[#0000009e] backdrop-blur-xs bottom-0 flex items-center justify-center">
        <AddStudent/>
        </div>}
      <Sidebar />
      <div className='w-full ml-60  h-full text-gray-900'>
        <Topbar />
        <div className={`p-4  bg-white mt-20 `}>{children}</div>
      </div>
    </div>
    </AppContext.Provider>
  );
}
