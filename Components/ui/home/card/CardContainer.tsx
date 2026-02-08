"use client"

import React from "react"
type cardProps = {
  children?: React.ReactNode;
  
};
export default function CardContainer({children}:cardProps
) {
  return (
      <div className="h-20 w-auto gap-x-4 flex  items-center">
        {children}
      </div>
  )
}
