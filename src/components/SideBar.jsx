import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import {RiContactsBookFill } from "react-icons/ri";
import { CiLinkedin, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import {MdOutlineShowChart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import sk from "../assets/sk.png"

const SideBar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "flex gap-4 items-center text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg py-2 px-4 w-full"
      : "flex gap-4 items-center text-black py-2 px-4 w-full";
  };

  return (
    <div className="flex flex-col h-full fixed">
      <div>
        <div className="mt-[49px] ml-[73px]">
        <img src={sk} alt="SalahKart" width={"243px"} height={"51.98px"} />
        </div>
        <hr className="h-px my-3 mx-3 bg-gray-100 border-0 w-full"></hr>
        <div className="w-[285.33px] h-[380px] mt-[45.33px] ml-[50px] flex flex-col gap-[20px]">
        <div>
          <Link to="/checkscore" className={getLinkClassName("/checkscore")}>
            <AiOutlineFileDone style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Resume Score Check</span>
          </Link>
        </div>
        <div >
          <Link to="/analyzeresume" className={getLinkClassName("/analyzeresume")}>
            <MdOutlineShowChart style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Resume Analysis</span>
          </Link>
        </div>
        <div>
          <Link to="/buildresume" className={getLinkClassName("/buildresume")}>
            <RiContactsBookFill style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Build Your Resume</span>
          </Link>
        </div>
        <div>
          <Link to="/linkedin" className={getLinkClassName("/linkedin")}>
            <CiLinkedin style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Optimize LinkedIn</span>
          </Link>
        </div>
        <div>
          <Link to="/updateprofile" className={getLinkClassName("/updateprofile")}>
            <CgProfile style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Update Your Profile</span>
          </Link>
        </div>
        </div>
      </div>
      <div className="flex flex-col w-[250px] ml-[51px] gap-4 mt-6 mb-4">
      <div>
          <Link to="/settings" className="flex gap-4 items-center text-black py-2 px-4 w-full">
            <IoSettingsOutline style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Settings</span>
          </Link>
        </div>
        <div>
          <Link to="/logout" className="flex gap-4 items-center text-black py-2 px-4 w-full" >
            <CiLogin style={{ height: "26px", width: "26px" }} />
            <span className="text-xl">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
