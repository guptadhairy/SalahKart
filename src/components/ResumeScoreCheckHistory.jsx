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
import { FaCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
    <div className="bg-white min-w-[30vw] h-[360px] rounded-[25px] shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-medium text-slate-400">Analytics History</h2>
        <span className="text-sm text-emerald-500">
          +15 points from last check
        </span>
      </div>
      <p className="font-semibold">Resume Score Check History</p>
      <p className="text-sm text-emerald-500 mb-4 flex items-center"><FaCalendar className="mr-1" />Past Six Months</p>
      <div className="h-48">
        <Bar data={data} options={options} />
      </div>
      <div className="text-right mt-4">
        <Link to={"/"} className="text-blue-500 hover:text-blue-700">
          View Detailed History →
        </Link>
      </div>
    </div>
  );
};

export default ResumeScoreCheckHistory;
