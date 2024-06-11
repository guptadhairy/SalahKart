import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ImStatsBars } from "react-icons/im";

const SemiCircularGauge = ({ value }) => {
  const size = 160;
  const strokeWidth = 20;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform rotate-360">
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
 

const CircularProgressText = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.25rem",
  fontWeight: "bold",
  
});

const ImprovementAnalysis = () => {
  return (
    <div className="p-6 bg-white h-full w-[55vw] rounded-[25px] shadow-md ">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg flex gap-1 font-semibold text-gray-400">
            <span className="mt-1 text-pp">
              <ImStatsBars />
            </span>
            Improvement Analysis
          </h2>
          <p className="text-lg font-bold mb-3">
            Your Resume Scored 70 out of 100.
          </p>

          <div className="mb-6">
            <div className="mb-4 border-l-4 border-s-dp  ">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm">Style</p>
              </div>
              <div className="flex item-start">
                <p className="text-xs text-gray-600">
                  Remove vague buzzwords which add little value. Ensure resume
                  screeners can read key sections of your resume.
                  <span>
                    {" "}
                    <a href="#fix" className="text-blue-500 text-xs">
                      Fix →
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-4 border-l-4 border-s-dp ">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm">Quantify Impact</p>
              </div>
              <p className="text-xs text-gray-600">
                Increase your impact by using numbers & metrics in your bullet
                points. Swap weak language with strong action verbs.
                <span>
                  {" "}
                  <a href="#fix" className="text-blue-500 text-xs">
                    Fix →
                  </a>
                </span>
              </p>
            </div>

            <div className="mb-4 border-l-4 border-s-dp ">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm">Brevity</p>
              </div>
              <p className="text-xs text-gray-600">
                Your resume's word count is slightly long. Remove unnecessary
                sections, older, less relevant information. Use few bullet
                points.
                <span>
                  {" "}
                  <a href="#fix" className="text-blue-500 text-xs">
                    Fix →
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <div className="relative flex items-center justify-center mb-4">
            <SemiCircularGauge value={80} />
            <CircularProgressText component="div">80%</CircularProgressText>
          </div>
          <div className="text-left">
            <a href="#improvements" className="text-blue-500 text-sm">
              View All Improvements →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovementAnalysis;
