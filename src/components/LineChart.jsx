// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((point) => point.date), // Zeitstempel
    datasets: [
      {
        label: "Aktienkurs",
        data: data.map((point) => point.value), // Werte
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
