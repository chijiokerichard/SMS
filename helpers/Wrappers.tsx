"use client"
export default function Wrappers(children:any) {
  return (
    <div className="w-full h-auto flex items-center flex-wrap  gap-2 justify-between">
        {children}
    </div>
  )
}
