import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri";
import { CiLinkedin, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaBloggerB } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import sk from "../assets/logo.svg";

const SideBar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "flex gap-4 items-center text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg py-2 px-4 w-full"
      : "flex gap-4 items-center text-black py-2 px-4 w-full";
  };

  return (
    <div className="flex flex-col h-screen w-[258] fixed">
      <div className="mt-12 px-4 lg:px-6">
        <img src={sk} alt="SalahKart" className="w-1/2 h-auto text-center mx-[36px]" />
      </div>
      <hr className="h-px my-3 mx-4 lg:mx-6 bg-gray-200 border-0" />
      <div className="flex flex-col gap-4 px-4 lg:px-6 mt-6">
        <Link to="/checkscore" className={getLinkClassName("/checkscore")}>
          <AiOutlineFileDone className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Resume Score Check</span>
        </Link>
        <Link to="/analyzeresume" className={getLinkClassName("/analyzeresume")}>
          <MdOutlineShowChart className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Resume Analysis</span>
        </Link>
        <Link to="/buildresume" className={getLinkClassName("/buildresume")}>
          <RiContactsBookFill className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Build Your Resume</span>
        </Link>
        <Link to="/linkedin" className={getLinkClassName("/linkedin")}>
          <CiLinkedin className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Optimize LinkedIn</span>
        </Link>
        <Link to="/ourblogs" className={getLinkClassName("/ourblogs")}>
          <FaBloggerB className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Our Blogs</span>
        </Link>
        <Link to="/updateprofile" className={getLinkClassName("/updateprofile")}>
          <CgProfile className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Update Your Profile</span>
        </Link>
      </div>
      <div className="flex flex-col mt-auto mb-6 px-4 lg:px-6 gap-4">
        <Link to="/settings" className="flex gap-4 items-center text-black py-2 px-4 w-full">
          <IoSettingsOutline className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Settings</span>
        </Link>
        <Link to="/logout" className="flex gap-4 items-center text-black py-2 px-4 w-full">
          <CiLogin className="h-6 w-6" />
          <span className="text-lg lg:text-xl">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
