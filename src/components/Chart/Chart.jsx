import { LineChart } from "@mui/x-charts";
import "./Chart.scss";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyEmergencyCost,
  notifySurpriseGain,
  notifyPayDay,
  notifyInflation,
} from "./notification";

export default function Chart({ totalBalance, categoryBalance }) {
  const [accountBalanceData, setAccountBalanceData] = useState([
    { x: 0, y: totalBalance },
    { x: 1, y: totalBalance },
  ]);

  const totalExpenses =
    Number(categoryBalance.bills) +
    Number(categoryBalance.food) +
    Number(categoryBalance.fun) +
    Number(categoryBalance.health) +
    Number(categoryBalance.rent) +
    Number(categoryBalance.subscriptions);
  console.log("total expenses ", totalExpenses);

  const totalSavings =
    Number(categoryBalance.savings) + Number(categoryBalance.investments);
  console.log(`total investments `, totalSavings);

  const changeEachDay = -(totalExpenses / 30); //formula here like expenses /30?
  console.log(changeEachDay);
  const surpriseCost = -3000; //  fixed amount?
  const surpriseGain = +(totalSavings * 1.25); //formula here like (investements+savings)* 1.25
  const income = +3000; //formula/ input?

  function clickHandler() {
    const newData = [...accountBalanceData];
    const lastDataPoint = newData[newData.length - 1];
    const newDay = lastDataPoint.x + 1;

    console.log(`everyday expenses`, changeEachDay);
    let newBalance = lastDataPoint.y + changeEachDay;

    if (newDay % 6 === 0) {
      newBalance += surpriseGain;
      notifySurpriseGain();
      console.log(`surprise gain: `, surpriseGain);
    }
    if (newDay % 5 === 0) {
      newBalance += surpriseCost;
      notifyEmergencyCost();
      console.log(`surprise expense: `, surpriseCost);
    }
    if (newDay % 7 === 0) {
      newBalance += income;
      notifyPayDay();
      console.log(`pay day: `, income);
    }

    if (newDay % 10 === 0) {
      newBalance += changeEachDay * 1.5;
      notifyInflation();
      console.log(`inflation: `, changeEachDay * 1.5);
    }

    console.log({ x: newDay, y: newBalance });
    newData.push({ x: newDay, y: newBalance });

    setAccountBalanceData(newData);
  }

  return (
    <div className="chart">
      <ToastContainer />
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
