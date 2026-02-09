"use client"
import BarChartIcon from "@/assets/images/svg/BarchartIcon"
import HighLight from "./HighLight"

function HighlightsComp() {
  return (
    <div className="flex  items-center justify-between w-full gap-1">
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Budgets' amount='12,400,0' percentage='20'/>
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Revenue' amount='19,000' percentage='+15'/>
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='Expenses' color="red" amount='22,909,880' percentage='-5'/>
    </div>
  )
}

export default HighlightsComp