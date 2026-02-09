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

export default function StudentTable() {
  return (
    <div>
      <div className="flex flex-col gap-y-5 mb-2">
        <Table className="[&_tbody_tr:nth-child(odd)]:bg-black/3">
          <TableHeader className=" text-white">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>ADMISSION DATE</TableHead>
              <TableHead>FULL NAME</TableHead>
              <TableHead>CLASS</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className=" ">
              <TableCell className={`font-medium ${bricolage.className}`}>
                22828-ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                1/3/2026
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark Anthony
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                PR1 
              </TableCell>
              
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-blue-200 rounded-[6px] py-0.5 px-1 text-center text-blue-700">Old</span>
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
            <TableRow className=" ">
              <TableCell className={`font-medium ${bricolage.className}`}>
                22828-ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                1/3/2026
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark John
              </TableCell>
            
              <TableCell className={`font-medium ${bricolage.className}`}>
                PR3
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-green-200 rounded-[6px] py-0.5 px-1 text-center text-green-700">New</span>

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
            <TableRow className=" ">
              <TableCell className={`font-medium ${bricolage.className}`}>
                22828-ewuw-3733
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                1/3/2026
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                Mark John
              </TableCell>
              <TableCell className={`font-medium ${bricolage.className}`}>
                SS3
              </TableCell>
              
              <TableCell className={`font-medium ${bricolage.className}`}>
                <span className="text-[12px] w-18.5 bg-green-200 rounded-[6px] py-0.5 px-1 text-center text-green-700">New</span>
                
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
