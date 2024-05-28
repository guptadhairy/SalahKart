import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ResumeScoreCheckHistory = () => {
  const data = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [60, 70, 80, 65, 75, 70],
        backgroundColor: "#4318FF",
        borderRadius: 25,
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    indexAxis: "x", // Set indexAxis to 'x' for vertical bars
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white w-1/2 rounded-[25px] shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Resume Score Check History</h2>
        <span className="text-sm text-emerald-500">
          +15 points from last check
        </span>
      </div>
      <p className="text-sm text-emerald-500 mb-4">Past Six Months</p>
      <div className="h-48">
        <Bar data={data} options={options} />
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          View Detailed History →
        </a>
      </div>
    </div>
  );
};

export default ResumeScoreCheckHistory;
