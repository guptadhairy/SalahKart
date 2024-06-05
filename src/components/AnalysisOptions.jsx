import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";


const AnalysisOptions = () => {
  const [active, setActive] = useState('Resume Upload Based');

  return (
    <div className="h-[435.77px] w-[192px] min-w-[190px] bg-white shadow-lg rounded-lg p-4">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-pp mb-2">
          Criteria Based Analysis
        </h2>
        <div className="w-full h-px bg-gray-200 mb-4"></div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setActive("Resume Upload Based")}
            className={`text-left text-xs p-2 rounded-lg ${
              active === "Resume Upload Based"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-upload mr-2"></i>
            Resume Upload Based
          </button>
          <button
            onClick={() => setActive("Select a Role Based")}
            className={`text-left p-2 text-xs rounded-lg ${
              active === "Select a Role Based"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-user-tag mr-2"></i>
            Select a Role Based
          </button>
          <button
            onClick={() => setActive("Job Description Based")}
            className={`text-left p-2 text-xs rounded-lg ${
              active === "Job Description Based"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-file-alt mr-2"></i>
            Job Description Based
          </button>
        </div>
      </div>
      <div className='pt-[50px]'>
        <h2 className="text-sm font-semibold text-pp mb-2">
          Tools to improve score
        </h2>
        <div className="w-full h-px bg-gray-200 mb-4"></div>
        <div className="flex flex-col space-y-1">
          <button className="text-left text-xs p-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="fas fa-chart-line mr-2"></i>
            Line Analysis
          </button>
          <button className="text-left p-2 text-xs text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="fas fa-magic mr-2"></i>
            Salah Magic Writer
          </button>
          <button className="text-left p-2 text-xs text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="fas fa-align-left mr-2"></i>
            AI Content Formatter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisOptions;
