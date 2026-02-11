import { CiHome, CiSettings } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

export const Links = [
    {name:"Dashboard",path:"/admin/dashboard/pages/home",icon:<CiHome size={20}/>},
    {name:"Students",path:"/admin/dashboard/pages/students",icon:<PiStudent size={20}/>},
    {name:"Settings",path:"/admin/dashboard/pages/setting",icon:<CiSettings size={20}/>},
]
export const StudentLinks = [
    {name:"Student",path:"/dashboard/pages/profile",icon:<PiStudent size={20}/>},
    // {name:"Students",path:"/admin/dashboard/pages/students",icon:<PiStudent size={20}/>},
    {name:"Settings",path:"/admin/dashboard/pages/setting",icon:<CiSettings size={20}/>},
]
