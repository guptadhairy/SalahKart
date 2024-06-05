import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import React from "react";
import OverviewCard from "./OverviewCard";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#6200ee", "#e0e0e0"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const Gauge = () => {
  return (
    <div className="relative mx-auto w-[150px] h-[100px] max-w-xs md:max-w-sm lg:max-w-md">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          rotation: -90,
          circumference: 180,
          cutout: "89%",
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-center mt-9 font-bold text-4xl md:text-5xl lg:text-4xl mb-2">
            70
          </p>
          <p className="text-center text-gray-500 mb-4">FAIR</p>
        </div>
      </div>
  
    </div>
  );
};

export default Gauge    ;
