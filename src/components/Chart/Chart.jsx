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
import TotalBalance from "../TotalBalance/TotalBalance";

export default function Chart({ totalBalance, categoryBalance }) {
  const [accountBalanceData, setAccountBalanceData] = useState([
    { x: 0, y: totalBalance },
    { x: 1, y: totalBalance },
  ]);

  const [newBalance, setNewBalance] = useState(3000);

  const totalExpenses =
    Number(categoryBalance.bills) +
    Number(categoryBalance.food) +
    Number(categoryBalance.fun) +
    Number(categoryBalance.health) +
    Number(categoryBalance.rent) +
    Number(categoryBalance.subscriptions);

  const totalSavings =
    Number(categoryBalance.savings) + Number(categoryBalance.investments);

  const changeEachDay = -(totalExpenses / 30);
  const surpriseCost = -3000;
  const surpriseGain = +(totalSavings * 1.25);
  const income = +3000;

  function clickHandler() {
    const newData = [...accountBalanceData];
    const lastDataPoint = newData[newData.length - 1];
    const newDay = lastDataPoint.x + 1;

    let newBalance = lastDataPoint.y + changeEachDay;

    if (newDay % 6 === 0) {
      newBalance += surpriseGain;
      notifySurpriseGain();
    }
    if (newDay % 5 === 0) {
      newBalance += surpriseCost;
      notifyEmergencyCost();
    }
    if (newDay % 7 === 0) {
      newBalance += income;
      notifyPayDay();
    }

    if (newDay % 10 === 0) {
      newBalance += changeEachDay * 1.5;
      notifyInflation();
    }

    console.log({ x: newDay, y: newBalance });
    newData.push({ x: newDay, y: newBalance });

    setAccountBalanceData(newData);
    setNewBalance(newBalance);
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
        width={400}
        height={400}
      />
      <p>Your total monthly expenses: $ {totalExpenses}</p>
      <p>Your average daily expense: $ {Math.round(totalExpenses / 30)}</p>
      <p>Your total monthly savings and investements: $ {totalSavings}</p>
      <button className="chart__button" onClick={clickHandler}>
        simulate a new day
      </button>
      <TotalBalance categoryBalance={categoryBalance} newBalance={newBalance} />
    </div>
  );
}
