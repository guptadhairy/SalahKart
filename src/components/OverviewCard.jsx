import React from "react";

// Function to calculate the stroke dash array based on the score
const calculateStrokeDasharray = (score) => {
  const circumference = 2 * Math.PI * 15.9155;
  const offset = circumference - (score / 100) * circumference;
  return `${circumference - offset}, ${offset}`;
};

const OverviewCard = ({ score = 70 }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg p-6 items-center">
      <div className="flex-shrink-0 relative">
        <svg
          className="w-24 h-24 transform -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="2"
          />
          <path
            className="circle"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray={calculateStrokeDasharray(score)}
          />
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f00" />
              <stop offset="100%" stopColor="#0f0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-800">
            {score}/100
          </span>
        </div>
      </div>
      <div className="ml-14">
        <h3 className="text-lg font-semibold text-indigo-600">Overview</h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget.
          Maecenas ac ipsum laoreet amet ultrices. Lorem ipsum dolor sit amet
          consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet
          amet ultrices.
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
