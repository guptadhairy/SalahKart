import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Chart1 from "./Chart1";

const ResumeAnalysis = () => {
  const errorList = [
    { text: "Completeness", icon: FiAlertTriangle },
    { text: "Formatting", icon: FiAlertTriangle },
    { text: "Typos", icon: FiAlertTriangle },
    { text: "+3 More", icon: null },
  ];

  return (
    <div className="w-1/2 bg-white rounded-[25px] p-3.5 h-[350px] flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-center gap-4 mb-2">
          <FiAlertTriangle className="text-blue-500 text-2xl" />
          <h2 className="text-xl font-bold">Error Analysis</h2>
        </div>
        <p className="font-bold text-left text-xs">
          We want to make you a great Resume Score.
        </p>
        <div className="flex items-center justify-center mb-2">
          <Chart1 />
        </div>
   
      </div>
      <div className="mb-4">
        <p className="mb-2 text-xs text-center">
          Go through our analysis to see what you can fix.
        </p>
        <ul className="list-disc pl-5 text-center mb-2 text-xs">
          {errorList.map((item, index) => (
            <li key={index} className="flex items-center justify-center gap-1">
              {item.icon && <item.icon className="text-red-500 text-xs" />}
              <span className="font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mx-auto block text-xs">
          Fix My Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
