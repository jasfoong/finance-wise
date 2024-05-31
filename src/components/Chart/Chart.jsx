import { LineChart } from "@mui/x-charts";
import "./Chart.scss";
import { useState } from "react";

export default function Chart() {
  const [accountBalanceData, setAccountBalanceData] = useState([
    { x: 0, y: 5000 },
    { x: 1, y: -5000 },
  ]);

  const changeEachDay = 100; //formula here
  const surpriseCost = -500; // formula here
  const surpriseGain = +500; //formula here

  function clickHandler() {
    const newData = [...accountBalanceData];
    const lastDataPoint = newData[newData.length - 1];
    const newDay = lastDataPoint.x + 1;

    let newBalance = lastDataPoint.y + changeEachDay;

    if (newDay % 5 === 0) {
      newBalance += surpriseGain;
    }
    if (newDay % 3 === 0) {
      newBalance += surpriseCost;
    }

    newData.push({ x: newDay, y: newBalance });

    setAccountBalanceData(newData);
  }

  return (
    <div className="chart">
      <LineChart
        className="chart__graphic"
        xAxis={[{ dataKey: "x", label: "days" }]}
        dataset={accountBalanceData}
        series={[{ dataKey: "y", area: true }]}
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [0],
              colors: ["#ff220081", "#35860395"],
              label: "$money",
            },
          },
        ]}
        width={300}
        height={320}
      />
      <button className="chart__button" onClick={clickHandler}>
        simulate a new day
      </button>
    </div>
  );
}
