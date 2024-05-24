import React from "react";
import { GoHome } from "react-icons/go";
import { RiAiGenerate } from "react-icons/ri";
import { TbFileAnalytics } from "react-icons/tb";
import { MdCreditScore, MdOutlineFindInPage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "flex gap-4 items-center text-white bg-blue-500 rounded-lg py-2 px-4 w-full"
      : "flex gap-4 items-center text-black py-2 px-4 w-full";
  };

  return (
    <div className="flex flex-col justify-between text-start px-10 py-4 shadow-xl h-full fixed">
      <div>
        <h2 className="text-3xl ml-3 font-semibold">SalahKart</h2>
        <hr className="h-px my-3 bg-gray-900 border-0 w-full"></hr>
        <div className="mt-6">
          <Link to="/" className={getLinkClassName("/")}>
            <GoHome style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Home</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link to="/buildresume" className={getLinkClassName("/buildresume")}>
            <RiAiGenerate style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Build Resume</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link to="/analyzeresume" className={getLinkClassName("/analyzeresume")}>
            <TbFileAnalytics style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Analyze Resume</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link to="/checkscore" className={getLinkClassName("/checkscore")}>
            <MdCreditScore style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Resume Score</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link to="/findjobs" className={getLinkClassName("/findjobs")}>
            <MdOutlineFindInPage style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Find Jobs</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-auto mb-4">
        <Link
          to="/login"
          className="w-full text-center py-2.5 px-5 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-full text-center py-2.5 px-5 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
