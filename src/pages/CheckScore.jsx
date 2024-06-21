import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import Frame1CheckScore from "../components/Frame1CheckScore";
import ResumeScoreCard from "../components/ResumeScoreCard";
import ResumeScoreCheckHistory from "../components/ResumeScoreCheckHistory";
import ImprovementAnalysis from "../components/ImprovementAnalysis";
import Features from "../components/ExploreOtherFeatures";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TipsBanner from "../components/TipsBanner";
import TopBar from "../components/TopBar";

const CheckScore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden fixed">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-hidden transition-all duration-300 ${
          isExpanded ? "lg:ml-60" : "lg:ml-20"
        }`}
      >
        <div className="hidden md:block">
          <TopBar />
        </div>

        {/* Check Score Frame */}
        <div className="overflow-y-auto custom-scrollbar h-screen mt-[-5px]">
          <Frame1CheckScore />
          <div className="flex flex-col lg:flex-row gap-4 mx-3 mt-6">
            <div>
              <ResumeScoreCard />
            </div>
            <div>
              <ImprovementAnalysis />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mx-3 mt-6">
            <div className="w-full lg:w-1/3">
              <ResumeScoreCheckHistory />
            </div>
            <div className="w-full lg:w-1/3">
              <Features />
            </div>
            <div className="w-full lg:w-1/3">
              <TipsBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckScore;
