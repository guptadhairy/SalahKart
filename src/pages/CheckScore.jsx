import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Frame1CheckScore from "../components/Frame1CheckScore";
import ResumeAnalysis from "../components/ResumeAnalysis";
import ResumeScoreCheckHistory from "../components/ResumeScoreCheckHistory"; 
import ImprovementAnalysis from "../components/ImprovementAnalysis"; 
import ExploreOtherFeatures from "../components/ExploreOtherFeatures";

const CheckScore = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-[258px] bg-white rounded-[20px]">
        <SideBar />
      </div>
      <div className="flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto">
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

        {/* Check Score Frame */}
        <Frame1CheckScore />
        <div className="container mt-1 flex gap-3 ">
          <ResumeAnalysis />
          <ImprovementAnalysis />
        </div>
        <div className="container mt-1 flex gap-3 py-4">
        <ResumeScoreCheckHistory />
        <ExploreOtherFeatures />
        </div>  
        
      </div>
    </div>
  );
};

export default CheckScore;
