// src/components/ProgressSteps.js
import React from "react";

const ProgressSteps = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center">
        <div className="flex items-center text-purple-600">
          <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full text-lg font-semibold">
            01
          </div>
          <span className="ml-2 font-semibold text-purple-600">
            Write & Edit
          </span>
        </div>
        <div className="w-10 border-b-2 border-gray-300 mx-4"></div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center text-gray-400">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg font-semibold">
            02
          </div>
          <span className="ml-2 font-semibold text-gray-400">
            Cover Details
          </span>
        </div>
        <div className="w-10 border-b-2 border-gray-300 mx-4"></div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center text-gray-400">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg font-semibold">
            03
          </div>
          <span className="ml-2 font-semibold text-gray-400">Preview</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
