import { BsPen } from "react-icons/bs";
import { CiHome, CiSettings } from "react-icons/ci";
import { IoResizeOutline } from "react-icons/io5";

export const Links = [
    {name:"Dashboard",path:"/admin/dashboard/pages/home",icon:<CiHome size={20}/>},
    {name:"Results",path:"/admin/dashboard/pages/result",icon:<IoResizeOutline size={20}/>},
    {name:"Attendace",path:"/admin/dashboard/pages/attendance",icon:<BsPen size={20}/>},
    {name:"Settings",path:"/admin/dashboard/pages/setting",icon:<CiSettings size={20}/>},
]
