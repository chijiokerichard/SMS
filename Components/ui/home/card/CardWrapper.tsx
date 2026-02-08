"use client";
import React from "react";

type cardProps = {
  children?: React.ReactNode;
 
};
export default function CardWrapper({children}: cardProps) {
  return (
    <div className="w-full h-auto flex items-center flex-wrap  gap-2 justify-between">
      {children}
    </div>
  );
}
