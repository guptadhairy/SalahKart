import React, { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Frame1CheckScore from "../components/Frame1CheckScore";
import ResumeScoreCard from "../components/ResumeScoreCard";  
import ResumeScoreCheckHistory from "../components/ResumeScoreCheckHistory"; 
import ImprovementAnalysis from "../components/ImprovementAnalysis"; 
import Features from "../components/ExploreOtherFeatures";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TipsBanner from "../components/TipsBanner";  

const CheckScore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 ml-[90px]`}
      >
        <div
          className={`mb-6 md:mb-8 transition-all duration-300`}
        >
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
        <div className=" h-[350px] flex mx-3 m-3 gap-3  ">
          <ResumeScoreCard />
          <ImprovementAnalysis />
        </div>
        <div
          className={`container h-[380px] mt-1 mx-3 flex gap-3 py-4 transition-all duration-300`}
        >
          <ResumeScoreCheckHistory />
          <Features />
          <TipsBanner />
        </div>
      </div>
    </div>
  );
};

export default CheckScore;
