"use client"
import PaginationList from "../mui/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { bricolage } from "@/fonts/font";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResultTable() {
    const router = useRouter()
  return (
    <div>
      <div className="flex flex-col gap-y-5 mb-2">
        <Table className="[&_tbody_tr:nth-child(odd)]:bg-black/3">
          <TableHeader className=" text-white">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>FULL NAME</TableHead>
              <TableHead>CLASS</TableHead>
              <TableHead>TERM</TableHead>
              <TableHead>REMARKS</TableHead>
              <TableHead className="text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
           
            <TableRow className="cursor-pointer " onClick={()=>router.push("/dashboard/pages/profile")}>
              <TableCell className={`font-medium ${bricolage.className}`}>
                ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark Anthony
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                PR1 
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                First term 
              </TableCell>
              
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-red-200 rounded-[6px] py-0.5 px-1 text-center text-red-700">Failed</span>
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="cursor-pointer " onClick={()=>router.push("/")}>
              <TableCell className={`font-medium ${bricolage.className}`}>
                ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark Anthony
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                SS1
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                First term 
              </TableCell>
              
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-green-200 rounded-[6px] py-0.5 px-1 text-center text-green-700">Passed</span>
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
           
             <TableRow className="cursor-pointer " onClick={()=>router.push("/")}>
              <TableCell className={`font-medium ${bricolage.className}`}>
                ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark Anthony
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                PR1 
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                First term 
              </TableCell>
              
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-indigo-200 rounded-[6px] py-0.5 px-1 text-center text-indigo-700">Poor</span>
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <Paginations /> */}
      </div>
      <PaginationList pageCount={10} curPage={1} setCurPage={() => {}} />
    </div>
  );
}
