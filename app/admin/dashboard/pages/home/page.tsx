"use client";
import BarChartIcon from "@/assets/images/svg/BarchartIcon";
import LineChart from "@/Components/charts/LineCahrt";
import PieChart from "@/Components/charts/PieChart";
import BasicSelect from "@/Components/mui/BasicSelect";
import PaymentTable from "@/Components/tables/PaymentTable";
import Card from "@/Components/ui/home/card/Card";
import CardContainer from "@/Components/ui/home/card/CardContainer";
import CardDay from "@/Components/ui/home/card/CardDay";
import CardTotal from "@/Components/ui/home/card/CardTotal";
import CardWrapper from "@/Components/ui/home/card/CardWrapper";
import HighLight from "@/Components/ui/home/highlights/HighLight";
import HighlightsComp from "@/Components/ui/home/highlights/HighlightsComp";
import { bricolage } from "@/fonts/font";
import { AppContext } from "@/helpers/context";
import { useContext } from "react";
import { BsPeople } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

export default function Admin() {
  const { toggleAddModal, display } = useContext(AppContext);
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    income: [200, 1020, 220, 700, 900, 300, 2000, 400, 870, 450, 200, 1000], // upward spike
  };

  return (
    <main
      className={`${display&& "overflow-hidden" } h-auto bg-white w-full`}
    >
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full py-2">
            <h1 className="">Overview</h1>
            <div className="flex items-center justify-center gap-x-3">
              <button
                onClick={() => toggleAddModal("student")}
                className={`bg-white text-black h-10 p-3 shadow-md border border-r-black rounded-lg cursor-pointer ${bricolage.className} text-[14px] text-center flex items-center font-medium justify-center`}
              >
                Add Student
              </button>
              <button
                onClick={() => toggleAddModal("teacher")}
                className={`bg-white text-black h-10 p-3 shadow-md border border-r-black rounded-lg cursor-pointer ${bricolage.className} text-[14px] text-center flex items-center font-medium justify-center`}
              >
                Add Teacher
              </button>
            </div>
          </div>
          <hr className="text-[#acaaaa]" />
        </div>
        <CardWrapper>
          <Card>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <PiStudentFill size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>Total number of students</CardDay>
                <CardTotal>20 Students</CardTotal>
              </div>
            </CardContainer>
          </Card>
          <Card>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <GiTeacher size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>Total number of teachers</CardDay>
                <CardTotal>14 Teacher</CardTotal>
              </div>
            </CardContainer>
          </Card>
          <Card>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <BsPeople size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>Total number of users</CardDay>
                <CardTotal>21 Persons</CardTotal>
              </div>
            </CardContainer>
          </Card>
        </CardWrapper>
        <div className="flex gap-2 items-center justify-between">
          <div className="w-117 h-80 border p-2 rounded-sm">
            <div className="flex items-center justify-between w-full">
              <span className={`text-[16px] ${bricolage.className} font-bold`}>
                Student Increments
              </span>
              <BasicSelect
                text={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "November",
                  "December",
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
                Total Attendance
              </span>
              <BasicSelect
                text={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
                bg={"white"}
                color="black"
                border="black"
              />
            </div>
            <PieChart datas={{
              income:[200,70,100,399,30],
              colors:[ "#403f48",
            "#04030b",
            "#161616",
            "#03020c",
            "#1c1c1d",],
            labels:["Monday","Tuesday","Wednesday","Thursday","Friday"]
            }} />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between h-25 ">
          <div className="flex  items-center justify-between w-full gap-1">
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Budgets' amount='$12,400,0' percentage='20%'/>
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Revenue' amount='$19,000' percentage='+15%'/>
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Expenses' color="red" amount='$22,909,880' percentage='-5%'/>
              </div>
        </div>
        <PaymentTable/>
      </div>
    </main>
  );
}
