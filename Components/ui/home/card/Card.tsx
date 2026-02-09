"use client";

type cardProps = {
  children?: React.ReactNode;
  width?:number | string;
};

export default function Card({ children,width}: cardProps) {
  return (
    <div style={{width:width}} className="w-75 h-20  shadow-md shadow-sidebar-border rounded-2xl px-7 py-5  border-black border-r-2 flex items-center justify-start">
      {children}
    </div>
  );
}
