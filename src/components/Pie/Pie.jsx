import React, { useEffect } from "react";
import { PieChart } from "@mui/x-charts";

export default function MyPieChart({ categoryBalance }) {
  useEffect(() => {
    console.log("categoryBalance:", categoryBalance);
  }, [categoryBalance]);

  const totalBalance = Object.values(categoryBalance).reduce(
    (total, value) => total + parseFloat(value),
    0
  );

  const pieChartData = Object.keys(categoryBalance).map((key, index) => ({
    id: index,
    color: getColorForCategory(key), // Function to get color for each category
    value: (parseFloat(categoryBalance[key]) / totalBalance) * 100, // Convert value to percentage
    label: `${key}: ${Math.round((parseFloat(categoryBalance[key]) / totalBalance) * 100)}%`, // Format label with percentage
  }));

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
    <div style={{ display: "flex", alignItems: "center" }}>
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
            tooltip: {
              itemContent: (item) => (
                <div>
                  {item.label}
                </div>
              ),
            },
          },
        ]}
        width={400}
        height={400}
        margin={{ left: -100 }} 
        slotProps={{
          legend: {

            direction: "column",
            itemContent: ({ label }) => <span>{label}</span>,
          },
        }}
      />
    </div>
  );
}
