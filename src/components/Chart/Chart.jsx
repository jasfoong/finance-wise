import { LineChart } from "@mui/x-charts";
import "./Chart.scss";

export default function Chart() {
  const accountBalanceData = [];
  accountBalanceData[0] = { x: 0, y: 5000 };
  accountBalanceData[1] = { x: 1, y: 5000 };

  return (
    <div className="chart">
      <LineChart
        xAxis={[{ dataKey: "x", label: "days" }]}
        dataset={accountBalanceData}
        series={[{ dataKey: "y", area: true, color: `#5c8145` }]}
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
        width={320}
        height={320}
      />
    </div>
  );
}
