import React from "react";
import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { ImStatsBars } from "react-icons/im";

const SemiCircularGauge = ({ value }) => {
  const size = 140;
  const strokeWidth = 14;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size / 2} className="transform rotate-360">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#d3cbff"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#4318ff"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(180, ${center}, ${center})`}
      />
    </svg>
  );
};

const ResumeScoreCard = () => {
  return (
    <div className="w-[36vw] p-6 bg-white rounded-[25px] shadow-md">
      <h2 className="text-lg flex gap-1 font-semibold text-gray-400">
        <span className="mt-1 text-pp">
          <ImStatsBars />
        </span>
        Error Analysis
      </h2>
      <div className="mb-4 text-bold text-sm ">
        We want to make you a great Resume Score
      </div>
      <Box className="relative flex items-center justify-center mb-4">
        <SemiCircularGauge value={70} />
        <div className="absolute top-6 flex flex-col items-center">
          <Typography variant="h5" component="div" color="textPrimary">
            70
          </Typography>
          <Typography variant="subtitle1" component="div" color="textSecondary">
            FAIR
          </Typography>
        </div>
      </Box>

      <span className="text-xs">
        Go through our analysis to see what you can fix
      </span>

      <div className="flex flex-col items-startspace-y-1 mb-4">
        <div className="flex items-center text-red-500">
          <ErrorOutline className="mr-2" />
          <span className="text-xs"> Completeness</span>
        </div>
        <div className="flex items-center text-red-500">
          <ErrorOutline className="mr-2" />
          <span className="text-xs">Formatting</span>
        </div>
        <div className="flex items-center text-red-500">
          <ErrorOutline className="mr-2" />
          <span className="text-xs">Typos</span>
        </div>
        <div className="flex items-center text-red-500">
          <ErrorOutline className="mr-1" />
          <span className="text-xs">+3 More</span>
        </div>
      </div>
      <div className="flex items-center flex-col pb-4">
        <button className="w-[50%] text-sm py-2 px-4  bg-dp text-white rounded-2xl hover:bg-pp focus:outline-none">
          Fix My Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeScoreCard;
