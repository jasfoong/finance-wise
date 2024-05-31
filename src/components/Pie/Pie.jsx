import React, { useEffect } from "react";
import { PieChart } from "@mui/x-charts";

export default function MyPieChart({ categoryBalance }) {
  useEffect(() => {
    console.log("categoryBalance:", categoryBalance);
  }, [categoryBalance]);

  // Calculate the total balance
  const totalBalance = Object.values(categoryBalance).reduce(
    (total, value) => total + parseFloat(value),
    0
  );

  // Convert the categoryBalance object to an array of objects suitable for the PieChart
  const pieChartData = Object.keys(categoryBalance).map((key, index) => ({
    id: index,
    color: getColorForCategory(key), // Function to get color for each category
    value: (parseFloat(categoryBalance[key]) / totalBalance) * 100, // Convert value to percentage
    label: key,
  }));

  // Function to assign colors to categories
  function getColorForCategory(category) {
    const colors = [
      "#dbecc3",
      "#5c8145",
      "#a3d9b1",
      "#7cbf7a",
      "#d1e7b6",
      "#6fa362",
      "#d0f1a3",
      "#7ea66c",
      "#b6db9e",
      "#4b8143",
    ];
    return colors[category.charCodeAt(0) % colors.length];
  }
  return (
    <div style={{ marginRight: '20px' }}>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 23,
            outerRadius: 101,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
            cx: 150,
            cy: 150,
            tooltip: {
              formatter: (value) => `${Math.round(value)}%`,
            },
            legend: {
              position: 'right', // Ensuring legend stays on the right
              layout: 'vertical',
              marginLeft: '20px', // Add margin to the legend
            },
          },
        ]}
        width={400}
        height={400}
      />
    </div>

  );
}
