import React from 'react'
import "./chart.css"
import { Chart } from "react-google-charts";

const Gchart = ({height}) => {
  return (
    <div className='chart'>
      <Chart
        chartType="AreaChart"
        data={[["month", "sale"],
         ["jan", 500],
         ["feb", 1200],
         ["mar", 900],
         ["apr", 400],
         ["may", 900],
         ["jun", 1800]]}
        width="100%"
        height={height}
        legendToggle
      />
    </div>
  )
}

export default Gchart