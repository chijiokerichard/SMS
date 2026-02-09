"use client"


import { bricolage } from "@/fonts/font"
import { AppContext } from "@/helpers/context"
import { useContext } from "react"
import { MdCancel } from "react-icons/md"
import { Button } from "@/Components/ui/button"
import {
Field,
FieldDescription,
FieldGroup,
FieldLabel,
} from "@/Components/ui/field"
import { Input } from "@/Components/ui/input"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/Components/ui/select"

export default function AddStudent() {
    const {toggleAddModal} =useContext(AppContext)
  return (
    <div  className="lg:w-125 w-full h-125 bg-white relative rounded-md flex justify-center flex-col  items-center py-6 px-7">
        
        <h1 className={`text-center ${bricolage.className}  text-[24px] font-extrabold`}>Add Student</h1>
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
                <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="form-name">Father's Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="philip"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-name">Mother's Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="juiliet"
            required
          />
        </Field>
        </div>
                        <div className="grid grid-cols-2 gap-4">

        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">add image</FieldLabel>
          <Input id="form-email" type="file" placeholder="john@example.com" />
          
        </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+234 903740374 " />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">State</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">Abia</SelectItem>
                <SelectItem value="ad">Adamawa</SelectItem>
                <SelectItem value="uy">Uyo</SelectItem>
                <SelectItem value="an">Anambra</SelectItem>
                <SelectItem value="ba">Bauchi</SelectItem>
                <SelectItem value="go">Gombe</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" className="text-black border border-black" >
            Cancel
          </Button>
          <Button type="submit" className="bg-black">Submit</Button>
        </Field>
      </FieldGroup>
    </form>



    </div>
  )
}
