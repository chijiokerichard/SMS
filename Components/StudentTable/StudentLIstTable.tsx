"use client";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { bricolage } from "@/fonts/font";
import { Paginations } from "@/helpers/Paginations";
import { MoreHorizontalIcon } from "lucide-react";
import {  useState } from "react";
import { Checkbox } from "../ui/checkbox";

export function StudentLIstTable() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  function handleChecked(id: string) {
    return (checked: boolean) => {
      setSelectedStudents((prev) => {
        if (checked) {
          return [...prev, id]; 
        } else {
          return prev.filter((sid) => sid !== id);
        }
      });
    };
  }
  console.log(selectedStudents);
  return (
    <div className="flex flex-col gap-y-5">
      <Table className="[&_tbody_tr:nth-child(odd)]:bg-[#6734c71d]">
        <TableHeader className=" text-white">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>REG DATE</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>CLASS</TableHead>
            <TableHead>AGE</TableHead>
            <TableHead>PIAD</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className=" ">
            <TableCell className={`font-medium ${bricolage.className}`}>
              22828-ewuw-3733
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              1/3/20
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              MARK JOHN
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              PRIMARY 6
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              15
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
                <Checkbox
                  name="4"
                  id="4"
                  aria-invalid
                  checked={selectedStudents.includes("4")}
                  onCheckedChange={handleChecked("4")}
                  className={`h-6 w-6 data-[state=checked]:bg-[#6734c7] bg-white border-0`}
                />
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
          <TableRow>
            <TableCell className={`font-medium ${bricolage.className}`}>
              22828-ewuw-3733
            </TableCell>
             <TableCell className={`font-medium ${bricolage.className}`}>
              1/3/20
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              MARK JOHN
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              PRIMARY 6
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              15
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
                <Checkbox
                  name="3"
                  id="3"
                  checked={selectedStudents.includes("3")}
                  onCheckedChange={handleChecked("3")}
                  className={`h-6 w-6 data-[state=checked]:bg-[#6734c7]`}
                />
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
          <TableRow>
            <TableCell className={`font-medium ${bricolage.className}`}>
              22828-ewuw-3733
            </TableCell>
             <TableCell className={`font-medium ${bricolage.className}`}>
              1/3/20
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              MARK JOHN
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              PRIMARY 6
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              15
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              <Checkbox
                name="2"
                id="2"
                checked={selectedStudents.includes("2")}
                onCheckedChange={handleChecked("2")}
                className={`h-6 w-6 data-[state=checked]:bg-[#6734c7] bg-white`}
              />
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
          <TableRow>
            <TableCell className={`font-medium ${bricolage.className}`}>
              22828-ewuw-3733
            </TableCell>
             <TableCell className={`font-medium ${bricolage.className}`}>
              1/3/20
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              MARK JOHN
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              PRIMARY 6
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
              15
            </TableCell>
            <TableCell className={`font-medium ${bricolage.className}`}>
                <Checkbox
                  name="1"
                  id="1"
                  checked={selectedStudents.includes("1")}
                  onCheckedChange={handleChecked("1")}
                  className={`h-6 w-6 data-[state=checked]:bg-[#6734c7] bg-white`}
                />
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
      <Paginations />
    </div>
  );
}
