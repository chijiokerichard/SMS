"use client";

type cardProps = {
  children?: React.ReactNode;
  
};

export default function Card({ children}: cardProps) {
  return (
    <div className="w-75 h-25  shadow-md shadow-sidebar-border rounded-2xl px-7 py-5  border-black border-r-2 flex items-center justify-start">
      {children}
    </div>
  );
}
