"use client"

import { bricolage, poppins } from '@/fonts/font'

export default function CardComp() {
  return (
    <div className="w-full h-auto flex items-center flex-wrap  gap-2 justify-between">
          <div className="w-80 h-full neu-inset shadow-2xl rounded-2xl px-7 py-5  border-white border flex items-center justify-start">
            <div className="h-26 w-auto gap-y-4 flex flex-col">
              <div className="h-13.5 ">
                <p className={`${bricolage.className} text-[18px] leading-6.5 tracking-[-2%] font-semibold text-black`}>Total Attendace Today</p>
                <span className="text-[14px] font-normal leading-[2opx] tracking-[-2%] text-[#8B909A]">last 7 days</span>
              </div>
              <h1 className={`${poppins.className} text-[32px] font-normal leading-8 tracking-[-2%]`}>2.4K</h1>
            </div>
          </div>
          <div className="w-80 h-full shadow-2xl rounded-2xl px-7 neu-inset py-5  flex border-white border items-center justify-start">
            <div className="h-26 w-auto gap-y-4 flex flex-col">
              <div className="h-13.5 ">
                <p className={`${bricolage.className} text-[18px] leading-6.5 tracking-[-2%] font-semibold text-black`}>Total Number Of Student</p>
                <span className="text-[14px] font-normal leading-[2opx] tracking-[-2%] text-[#8B909A]">last 7 days</span>
              </div>
              <h1 className={`${poppins.className} text-[32px] font-normal leading-8 tracking-[-2%]`}>1.1K</h1>
            </div>
          </div>
          <div className="w-80 h-full shadow-2xl rounded-2xl px-7 neu-inset py-5  flex border-white border items-center justify-start">
            <div className="h-26 w-auto gap-y-4 flex flex-col">
              <div className="h-13.5 ">
                <p className={`${bricolage.className} text-[18px] leading-6.5 tracking-[-2%] font-semibold text-black`}>Total Number Of Teachers</p>
                <span className="text-[14px] font-normal leading-[2opx] tracking-[-2%] text-[#8B909A]">last 7 days</span>
              </div>
              <h1 className={`${poppins.className} text-[32px] font-normal leading-8 tracking-[-2%]`}>2K</h1>
            </div>
          </div>
          
          
        </div>
  )
}
