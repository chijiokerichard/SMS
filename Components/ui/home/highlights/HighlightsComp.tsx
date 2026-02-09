"use client"
import BarChartIcon from "@/assets/images/svg/BarchartIcon"
import HighLight from "./HighLight"

function HighlightsComp() {
  return (
    <div className="flex  items-center justify-between w-full gap-1">
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='New client' amount='20' percentage='20'/>
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='New client' amount='20' percentage='20'/>
    <HighLight img={<BarChartIcon color="#000" size={60}  />} title='New client' color="red" amount='20' percentage='-5'/>
    </div>
  )
}

export default HighlightsComp