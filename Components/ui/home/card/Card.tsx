"use client";

import Link from "next/link";

type cardProps = {
  children?: React.ReactNode;
  width?:number | string;
  path?:string;
};

export default function Card({ children,width,path=""}: cardProps) {
  return (
    
    <Link href={path} style={{width:width}} className="w-75 h-20 transfor  shadow-md shadow-sidebar-border rounded-2xl px-7 py-5  border-black border-r-2 flex items-center justify-start font-black  overflow-hidden transition-all duration-500 group-hover:h-full">
      {children}
    </Link>
  );
}
