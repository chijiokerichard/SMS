"use client"
import { bricolage, roboto } from "@/fonts/font";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    function onSubmit(){
      setIsLoading(true)
      const timer = setTimeout(()=>{
        router.push("/admin/dashboard/pages/home")
        return ()=>clearTimeout(timer)
      },1000)
    }
  return (
    <main className="w-auto  mx-auto  text-black py-10 px-15  bg-white rounded-3xl shadow-lg flex flex-col items-start justify-center h-auto">
      <div className="">
        <div className="gap-y-7 flex flex-col" >
          <div className="h-21 flex flex-col gap-y-3.5">
            <h1 className={`text-[40px] font-bold text-center leading-[100%]  ${roboto.className}`}>Welcome</h1>
            <p className={`text-[24px] font-bold text-center leading-[100%]  ${roboto.className}`}>Please Login to admin dashboard</p>
          </div>
          <div className="flex flex-col gap-y-5.5">
            <input
              placeholder="username"
              className="w-90 border  border-[#dcdade] rounded-xl px-5 py-3 outline-[#6734c7]"
            />
            <input
              placeholder="password"
              className="w-90 border border-[#dcdade] rounded-xl px-5 py-3 outline-[#6734c7]"
            />
          </div>
          <div className="h-29.25 flex flex-col gap-y-2.5">
            <button onClick={onSubmit}  className={`bg-[#6734c7] relative cursor-pointer h-11 text-white rounded-lg text-center leading-[100%] tracking-[0px] px-5 py-3 w-full  ${bricolage.className}`}>
              {!isLoading && "LOGIN"}
              {isLoading && (
                <div className="absolute inset-0 flex items-center px-5 py-3 justify-center">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>
            <p className={`text-[18px] text-[#6734c7]  text-center leading-[100%] tracking-[0px] font-light  ${bricolage.className}`}>forgotten your password?</p>

          </div>
        </div>
      </div>
    </main>
  );
}
