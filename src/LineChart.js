import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Sample dataset
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
  };

  return (
    <div>
      <h2>Sales Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
