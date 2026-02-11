"use client";
import SideBar from "@/Components/molicules/students/SideBar";
import TopBar from "@/Components/molicules/students/TopBar";
import AddStudent from "@/Components/student/AddStudent";
import AddTeacher from "@/Components/teacher/AddTeacher";
import { AppContext } from "@/helpers/context";
import { useEffect, useState } from "react";

type modalType = "student" | "teacher" | null;

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [display, setDisplay] = useState<modalType>(null);
  function toggleAddModal<T>(type: modalType) {
    setDisplay(type);
  }
  useEffect(() => {
  if (display) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [display]);
  return (
    <AppContext.Provider value={{ display, toggleAddModal }}>
      <div className={`flex antialiased relative `}>
        {display && (
          <div
            onClick={() => toggleAddModal(null)}
            className="fixed inset-0 z-10 bg-[#0000009e] backdrop-blur-xs bottom-0 flex items-center justify-center"
          >
            <div onClick={(e) => e.stopPropagation()} className=" relative">
              {display === "student" && <AddStudent />}
              {display === "teacher" && <AddTeacher />}
            </div>
          </div>
        )}
        <SideBar />
        <div className="w-full ml-60  h-auto text-gray-900">
          <TopBar />
          <div
            className={`p-4 mb-0  bg-white shadow mt-24  rounded-sm pb-4 border border-b-0  mx-4 `}
          >
            {children}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
