import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import AnalysisOptions from "../components/AnalysisOptions";
import ImprovementList from "../components/ImprovementList";
import ResumeDisplay from "../components/ResumeDisplay";
import OverviewCard from "../components/OverviewCard";
import TopBar from "../components/TopBar"

const AnalyzeResume = () => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden fixed">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 h-screen overflow-hidden transition-all duration-300 lg:ml-[90px]">
        <TopBar />
        <div className="container flex flex-col lg:flex-row gap-5 mt-16">
          <div className="flex-1 lg:w-[60%] overflow-y-auto custom-scrollbar h-[510px] ">
            <OverviewCard score={70} />
            <div className="flex flex-col lg:flex-row gap-2 pt-2">
              <AnalysisOptions />
              <ImprovementList />
            </div>
          </div>

          <div className="flex w-[35vw] h-[510px]">
            <ResumeDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeResume;
