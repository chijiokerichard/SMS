"use client";

import LineChart from "@/Components/charts/LineCahrt";
import PieChart from "@/Components/charts/PieChart";
import BasicSelect from "@/Components/mui/BasicSelect";
import ResultTable from "@/Components/tables/ResultTable";
import Card from "@/Components/ui/home/card/Card";
import CardContainer from "@/Components/ui/home/card/CardContainer";
import CardDay from "@/Components/ui/home/card/CardDay";
import CardWrapper from "@/Components/ui/home/card/CardWrapper";
import { bricolage } from "@/fonts/font";
import { AppContext } from "@/helpers/context";
import { useContext } from "react";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAssignment } from "react-icons/md";

import { PiStudentFill } from "react-icons/pi";

export default function ResultPage() {
  const { toggleAddModal, display } = useContext(AppContext);
  const chartData = {
    labels: [
      "English",
                  "Maths",
                  "Igbo",
                  "Civic",
                  "Litereture",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Furth Math",
                  "Economics",
                  "Crs",
    ],
    income: [200, 1020, 220, 700, 900, 300, 2000, 400, 870, 450, 200, 1000], // upward spike
  };

  return (
    <main className={`${display && "overflow-hidden"} h-auto bg-white w-full`}>
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full py-2">
            <div className="group relative cursor-pointer">
              <span
                className="text-2xl font-black  text-black opacity-20"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Results
              </span>

              <span className="absolute left-0 top-0 h-0 w-full overflow-hidden text-2xl font-black text-black transition-all duration-500 group-hover:h-full">
                Results
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => toggleAddModal("student")}
                className={`bg-white text-black h-10 p-3 shadow-md border border-r-black rounded-lg cursor-pointer ${bricolage.className} text-[14px] text-center flex items-center font-medium justify-center`}
              >
                Add Result
              </button>
            </div>
          </div>
          <hr className="text-[#acaaaa]" />
        </div>
        <CardWrapper>
          <Card width={200} path="admin/dashboard/pages/students">
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <PiStudentFill size={20} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>
                  Total
                  <br /> 21 Results
                </CardDay>
              </div>
            </CardContainer>
          </Card>
         
          <Card width={200}>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <MdOutlineAssignment size={20} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>View <br /> Subjects</CardDay>
              </div>
            </CardContainer>
          </Card>
          <Card width={200} path="/admin/dashboard/pages/result">
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <GrCertificate size={20} color="white" />
              </div>
              <div className=" gap-y-2 ">
                <CardDay>
                  Highest Average
                </CardDay>
                {/* <CardTotal>21 Persons</CardTotal> */}
              </div>
            </CardContainer>
          </Card>
        </CardWrapper>
        <div className="flex gap-2 items-center justify-between">
          <div className="w-117 h-80 border p-2 rounded-sm">
            <div className="flex items-center justify-between w-full">
              <span className={`text-[16px] ${bricolage.className} font-bold`}>
                Subjects Analysis
              </span>
              <BasicSelect
                text={[
                  "SS1",
                  "SS2",
                  "SS3",
                ]}
                bg={"white"}
                color="black"
                border="black"
              />
            </div>
            <LineChart data={chartData} />
          </div>
          <div className="w-117 h-80 border p-2 rounded-sm justify-between">
            <div className="flex items-center justify-between w-full">
              <span className={`text-[16px] ${bricolage.className} font-bold`}>
                Result analysis
              </span>
              <BasicSelect
                text={["First Term", "Second Term", "Third Term"]}
                bg={"white"}
                color="black"
                border="black"
              />
            </div>
            <PieChart
              datas={{
                labels: ["Pass", "Excellent", "Failed"],
                income: [30, 80, 98],
                colors: [  "#1a1a1c",
            "#464449",
            "#19191a",],
              }}
            />
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-x-3">
            <span className="text-[14px] text-[#191414] transform-border">
              filter by class
            </span>
            <BasicSelect
              height={25}
              text={["SS1", "SS2", "SS3"]}
              bg={"white"}
              color="black"
              border="black"
            />
          </div>
          <input
            type="text"
            className={`px-2 py-2 border border-accent w-100 outline-accent placeholder:text-[13px]  rounded-md text-[12px] placeholder:text-[#b4afaf]`}
            placeholder="Search student by(Name,age,id,class, grade)"
          />
        </div>
        <ResultTable/>
      </div>
    </main>
  );
}
