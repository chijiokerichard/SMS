"use client"


import { Calendar } from "@/Components/ui/calendar"
import React from "react"
export default function Calender(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
      styles={{selected:{
        color:"red",backgroundColor:"red"
      }}}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    )
}