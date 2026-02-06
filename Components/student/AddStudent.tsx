"use client"

import { AppContext } from "@/helpers/context"
import { useContext } from "react"

export default function AddStudent() {
    const {toggleAddModal} =useContext(AppContext)
  return (
    <div onClick={toggleAddModal} className="w-100 h-100 bg-white">
        AddStudent
    </div>
  )
}
