import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrDocument } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { PiTextIndent } from "react-icons/pi";
import { IoDocumentTextSharp } from "react-icons/io5";

const AnalysisOptions = () => {
  const [active, setActive] = useState("Resume Upload Based");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const roles = [
    "Software Engineer",
    "Product Manager",
    "Data Analyst",
    "UI/UX Designer",
  ];

  return (
    <div className="max-h-[490px] w-[212px] min-w-[190px] bg-white shadow-lg rounded-lg p-2">
      <div className="mb-6">
        <h2 className="text-sm font-bold text-pp mb-2">
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
            <i className="inline-block mx-1 text-lg">
              <GrDocument />
            </i>
            Resume Upload Based
          </button>
          <div className="relative">
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className={`text-left p-2 text-xs rounded-lg ${
                active === "Select a Role Based"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <i className="inline-block mx-1 text-lg">
                <CgProfile />
              </i>
              Select a Role Based
            </button>
            {showRoleDropdown && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      setActive("Select a Role Based");
                      setShowRoleDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setActive("Job Description Based")}
              className={`text-left p-2 text-xs rounded-lg ${
                active === "Job Description Based"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <i className="inline-block mx-1 text-lg">
                <FaEdit />
              </i>
              Job Description Based
            </button>
            {active === "Job Description Based" && (
              <div className="mt-2">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  rows={4}
                  placeholder="Enter job description..."
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <h2 className="text-sm font-bold text-pp mb-2">
          Tools to improve score
        </h2>
        <div className="w-full h-px bg-gray-200 mb-4"></div>
        <div className="flex flex-col space-y-1">
          <button className="text-left text-xs p-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="inline-block mx-1 text-lg">
              <IoDocumentTextSharp />
            </i>
            Line Analysis
          </button>
          <button className="text-left p-2 text-xs text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="inline-block mx-1 text-lg">
              <MdOutlineEdit />
            </i>
            Salah Magic Writer
          </button>
          <button className="text-left p-2 text-xs text-gray-600 rounded-lg hover:bg-gray-100">
            <i className="inline-block mx-1 text-lg">
              <PiTextIndent />
            </i>
            AI Content Formatter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisOptions;
