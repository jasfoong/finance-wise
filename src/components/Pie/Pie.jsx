import React from "react";
import { PieChart } from "@mui/x-charts";

export default function MyPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, color: "#dbecc3", value: 10, label: "mortgate" },
            { id: 1, color: "#5c8145", value: 15, label: "food" },
            { id: 2, color: "#dbecc3", value: 20, label: "health" },
            { id: 3, color: "#5c8145", value: 30, label: "pet" },
          ],
          innerRadius: 23,
          outerRadius: 101,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      width={400}
      height={400}
    />
  );
}
