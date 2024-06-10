import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import AnalysisOptions from "../components/AnalysisOptions";
import ImprovementList from "../components/ImprovementList";
import ResumeDisplay from "../components/ResumeDisplay";
import OverviewCard from "../components/OverviewCard";

const AnalyzeResume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 ${
          isExpanded ? "ml-[350px]" : "ml-[100px]"
        }`}
      >
        <div className="mb-6 md:mb-8">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            Hello Dhairya,
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Welcome to
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                SalahKart
              </div>
              <div className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                - Job Finding Made Easy!
              </div>
            </div>
            <TopBar />
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row gap-5 mt-16">
          <div className="flex-1 h-[88vh] lg:w-[60%]">
            <OverviewCard score={70} />
            <div className="flex flex-col lg:flex-row gap-2 pt-2">
              <AnalysisOptions />
              <ImprovementList />
            </div>
          </div>

          <div className="flex w-[35vw] h-[100vh]">
            <ResumeDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeResume;
