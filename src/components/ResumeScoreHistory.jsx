

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ResumeScoreHistory = () => {
  const data = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Resume Score",
        data: [60, 30, 90, 50, 70, 85],
        backgroundColor: "rgba(56, 189, 248, 0.7)",
        borderColor: "rgba(56, 189, 248, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Resume Score Check History</h2>
          <p className="text-sm text-gray-500">Past Six Months</p>
        </div>
        <div className="text-green-500 text-sm font-semibold">
          +15 points from last check
        </div>
      </div>
      <div className="mt-4">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-4 text-blue-500 text-sm font-semibold cursor-pointer">
        View Detailed History &rarr;
      </div>
    </div>
  );
};

export default ResumeScoreHistory;
