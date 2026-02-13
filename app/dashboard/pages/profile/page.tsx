"use client";

import BarChartIcon from "@/assets/images/svg/BarchartIcon";
import PaymentTable from "@/Components/tables/PaymentTable";
import Card from "@/Components/ui/home/card/Card";
import CardContainer from "@/Components/ui/home/card/CardContainer";
import CardDay from "@/Components/ui/home/card/CardDay";
import CardTotal from "@/Components/ui/home/card/CardTotal";
import CardWrapper from "@/Components/ui/home/card/CardWrapper";
import HighLight from "@/Components/ui/home/highlights/HighLight";

import { AppContext } from "@/helpers/context";
import { useContext } from "react";

import { FaAward, FaTasks } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";

export default function Profile() {
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
           
          </div>
          <hr className="text-[#acaaaa]" />
        </div>
        <CardWrapper>
          <Card width={230}>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <FaAward size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>My Awards</CardDay>
                <CardTotal>20 Awards</CardTotal>
              </div>
            </CardContainer>
          </Card>
          <Card width={230}>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <PiCertificateFill size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>My Results</CardDay>
                <CardTotal>4 Results</CardTotal>
              </div>
            </CardContainer>
          </Card>
          <Card width={230}>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <FaTasks size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>My Exercises</CardDay>
                <CardTotal>5 Exercises</CardTotal>

              </div>
            </CardContainer>
          </Card>
          <Card width={230}>
            <CardContainer>
              <div className="bg-black p-2 rounded-sm">
                <IoBookSharp size={25} color="white" />
              </div>
              <div className=" gap-y-3 ">
                <CardDay>My Subjects</CardDay>
                <CardTotal>6 Subjects</CardTotal>
              </div>
            </CardContainer>
          </Card>
        </CardWrapper>
      
        <div className="flex gap-2 items-center justify-between h-25 ">
           <div className="flex  items-center justify-between w-full gap-1">
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Performance' percentage='20%'/>
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Attendance'  percentage='15%'/>
              <HighLight img={<BarChartIcon color="#000" size={60}  />} title='expenses' color="red" amount='$22,909' percentage='5%'/>
              </div>
        </div>
        <PaymentTable/>
      </div>
    </main>
  );
}
