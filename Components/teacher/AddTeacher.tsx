"use client"


import { bricolage, poppins } from "@/fonts/font"
import { AppContext } from "@/helpers/context"
import { useContext, useState } from "react"
import { MdCancel } from "react-icons/md"
import { Button } from "@/Components/ui/button"
import {
Field,
FieldGroup,
FieldLabel,
} from "@/Components/ui/field"
import { Input } from "@/Components/ui/input"
import {
SelectContent,
SelectValue,
} from "@/Components/ui/select"
import { useCustomState } from "@/helpers/CustomHook"
import { RiDeleteBin6Line } from "react-icons/ri"

export default function AddTeacher() {
    const {toggleAddModal} =useContext(AppContext)
    const [selected,setSelected] =useState(false)
    const [hide,onHide,onToggleStateOut] = useCustomState()
    const banks = [
        {name:1},
        {name:2},
    ]
    console.log(hide)
  return (
    <div  className="lg:w-125 w-125 h-125 bg-white relative rounded-md flex justify-center flex-col  items-center py-6 px-7">
        <h1 className={`text-center ${bricolage.className}  text-[24px] font-extrabold`}>Add Teacher</h1>
        <MdCancel  className="absolute right-3 top-7 cursor-pointer" onClick={()=>toggleAddModal(null)} size={25}/>
    <form className="w-full max-w-sm px-2 overflow-y-scroll no-scrollbar">
      <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="form-name">First Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="Doe"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-name">Last Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="mark"
            required
          />
        </Field>
        </div>
       
       <Field>
        <FieldLabel htmlFor="form-subject">Assign Subject</FieldLabel>
           <div className="h-full">

         
          </div>

<div className="flex items-center flex-col justify-center gap-4 ">
  <div className="flex justify-center w-full gap-x-2">

          <Field className="flex-1">
          <Input id="form-email" type="email" placeholder="john@example.com" />
          
        </Field>
          <button className={`bg-[#6734c7] text-white p-2 text-sm rounded-md ${poppins.className}`}>Add</button>
  </div>

        <div className="h-auto w-full border rounded-md py-1 px-2 flex-wrap flex  gap-1">
            <span onMouseOver={onHide} onMouseLeave={onToggleStateOut} className={`text-sm ${bricolage.className} bg-[#b4a6b419] p-0.5 rounded-[1px] relative
YEYEUE
    transition-colors duration-300 delay-150 inset-0 flex items-center justify-center
    hover:bg-[#ad348d36]`}>English {hide && <RiDeleteBin6Line className="absolute cursor-pointer text-white rounded-md bg-black z-10 right-0" size={16}/>}</span>
            <span className={`text-sm ${bricolage.className} bg-[#b4a6b419] p-0.5 rounded-[1px]`}>Math</span>
            <span className={`text-sm ${bricolage.className} bg-[#b4a6b419] p-0.5 rounded-[1px]`}>French</span>
        </div>
    </div>
       </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          
        </Field>
       
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+234 903740374 " />
          </Field>
          <Field className="relative">
            <FieldLabel htmlFor="form-country">State</FieldLabel>
             
          <Input id="form-email" type="email" placeholder="john@example.com" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" className="text-[#6734c7] border-[#6734c7]" >
            Cancel
          </Button>
          <Button type="submit" className="bg-[#6734c7]">Submit</Button>
        </Field>
      </FieldGroup>
    </form>

    </div>
  )
}
