import React from "react";

const ResumeAnalysis1 = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex">
        <div className="w-1/3 p-4">
          <div className="text-center">
            <div className="relative">
              <div className="text-6xl font-bold text-green-500">70/100</div>
            </div>
            <div className="mt-2 text-gray-600">
              <div className="font-bold text-xl">Overview</div>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in
                eget. Maecenas ac ipsum laoreet amet ultrices.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <ul className="space-y-2">
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2 font-bold">Criteria Based Analysis</span>
              </li>
              <li className="p-2 bg-blue-500 text-white rounded-lg flex items-center cursor-pointer">
                <span className="ml-2 font-bold">Resume Upload Based</span>
              </li>
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2 font-bold">Select a Role Based</span>
              </li>
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2 font-bold">Job Description Based</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="font-bold text-gray-600">
              Tools to improve score
            </div>
            <ul className="mt-2 space-y-2">
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2">Line Analysis</span>
              </li>
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2">Salah Magic Writer</span>
              </li>
              <li className="p-2 bg-blue-100 rounded-lg flex items-center cursor-pointer">
                <span className="ml-2">AI Content Formatter</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-4">
          <div className="space-y-4">
            {[
              "Tone & Style",
              "Impact",
              "Formatting",
              "Keyword Optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="font-bold text-blue-500">{item}</div>
                  <div className="text-green-500 font-semibold">
                    +5 points scope of improvement
                  </div>
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in
                  eget. Maecenas ac ipsum laoreet amet ultrices.
                </p>
                <div className="mt-2 text-blue-500 font-semibold cursor-pointer">
                  View Details &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis1;
