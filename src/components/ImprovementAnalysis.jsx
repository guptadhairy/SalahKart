import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { FiAlertTriangle } from "react-icons/fi";

Chart.register(ArcElement, Tooltip, Legend);

const ImprovementAnalysis = () => {
  const data = {
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#e0e0e0", "#4318FF"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  const improvementList = [
    {
      title: "Style",
      text: "Remove vague buzzwords which add little value. Ensure resume screeners can read key sections of your resume.",
      link: "Fix →",
    },
    {
      title: "Quantify Impact",
      text: "Increase your impact by using numbers & metrics in your bullet points. Swap weak language with strong action verbs.",
      link: "Fix →",
    },
    {
      title: "Brevity",
      text: "Your resume's word count is slightly long. Remove unnecessary sections, older, less relevant information. Use few bullet points.",
      link: "Fix →",
    },
  ];

  return (
    <div className="bg-white p-4 h-[350px] rounded-[25px] shadow-md overflow-hidden">
      <div className="flex items-center gap-4 mb-2">
        <FiAlertTriangle className="text-blue-500 text-2xl" />
        <h2 className="text-xl font-bold">Improvement Analysis</h2>
      </div>
      <h3 className="text-sm font-medium mb-2">
        Your Resume Scored 70 out of 100.
      </h3>
      <div className="flex flex-col md:flex-row justify-between h-[270px]">
        <ul className="list-none space-y-2 mb-4 md:mb-0 md:w-1/2 text-xs">
          {improvementList.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center mr-2">
                <span className="text-gray-600 font-semibold text-xs">
                  {index + 1}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-600">
                  {item.text}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-xs "
                  >
                    {item.link}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex  flex-col items-center md:w-1/2 md:justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-bold mb-1">80%</p>
                <p className="text-xs  text-gray-500">Scope of Improvement</p>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="text-blue-500 font-bold hover:underline mt-2 md:mt-0 md:ml-2 text-xs"
          >
            View All Improvements →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImprovementAnalysis;
