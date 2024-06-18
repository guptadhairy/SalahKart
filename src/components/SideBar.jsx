import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri";
import { CiLinkedin, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaBloggerB } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { BiExpand, BiCollapse } from "react-icons/bi";
import { ReactComponent as YourSvg } from "../assets/linkedlogo.svg";
import sk from "../assets/logo.svg";

const SideBar = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen ${
          isExpanded ? "w-[350px]" : "w-[100px]"
        } bg-white z-40 transition-all duration-300 ease-in-out`}
      >
        <div className="mt-12 px-4 lg:px-6">
          {isExpanded ? (
            <img
              src={sk}
              alt="SalahKart"
              className="w-1/2 h-auto text-center mx-[36px]"
            />
          ) : (
            <img
              src={sk}
              alt="SalahKart"
              className="w-10 h-auto text-center mx-auto"
            />
          )}
        </div>
        <hr className="h-px my-3 mx-4 lg:mx-6 bg-gray-200 border-0" />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center text-black py-2 px-4 w-full"
        >
          {isExpanded ? (
            <BiCollapse className="h-6 w-6" />
          ) : (
            <BiExpand className="h-6 w-6" />
          )}
        </button>
        <div className="flex flex-col h-full ">
          <div className="flex flex-col gap-4 px-4 lg:px-6 mt-6">
            <Link
              to="/checkscore"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/checkscore")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <AiOutlineFileDone className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Resume Score Check</span>
              )}
            </Link>
            <Link
              to="/analyzeresume"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/analyzeresume")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <MdOutlineShowChart className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Resume Analysis</span>
              )}
            </Link>
            <Link
              to="/buildresume"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/buildresume")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <RiContactsBookFill className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Build Your Resume</span>
              )}
            </Link>
            <Link
              to="/linkedin"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/linkedin")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <YourSvg
                className={`h-6 w-6 ${
                  getLinkClassName("/linkedin") ? "fill-current text-white" : ""
                }`}
              />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Optimize LinkedIn</span>
              )}
            </Link>
            <Link
              to="/ourblogs"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/ourblogs")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <FaBloggerB className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Our Blogs</span>
              )}
            </Link>
          </div>
          <div className="flex flex-col px-4 lg:px-6 gap-4 mt-[200px]">
            <Link
              to="/updateprofile"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/updateprofile")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <CgProfile className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Update Your Profile</span>
              )}
            </Link>
            <Link
              to="/settings"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/settings")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <IoSettingsOutline className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Settings</span>
              )}
            </Link>
            <Link
              to="/logout"
              className={`flex gap-4 items-center py-2 px-4 w-full ${
                getLinkClassName("/logout")
                  ? "text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg"
                  : "text-black"
              }`}
            >
              <CiLogin className="h-6 w-6" />
              {isExpanded && (
                <span className="text-lg lg:text-xl">Logout</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
