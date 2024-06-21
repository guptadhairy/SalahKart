import React, { useState } from "react";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";

const TopBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="lg:pt-1 pt-14 mb-6 md:mb-8 transition-all duration-300">
      <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
        Hello Dhairya,
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex flex-col lg:flex-row items-start sm:items-center gap-2">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Welcome to{" "}
            <span className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
              SalahKart
            </span>{" "}
            <span className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
              {" "}
              - Job Finding Made Easy!
            </span>
          </div>
        </div>
        <div className="w-full max-w-[350px] h-[40px] relative">
          <div
            className="flex justify-between items-center px-4 lg:px-0 mt-4 sm:mt-0 cursor-pointer"
            onClick={toggleDropdown}
          >
            <IoIosSearch className="h-6 w-6 text-gray-500" />
            <FaBell className="h-6 w-6 text-gray-500" />
            <div className="flex gap-2 bg-blue-900 rounded-full h-9 max-w-[200px] justify-between items-center p-1">
              <div className="relative">
                <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="rounded-full h-5 w-5"
                  />
                </div>
              </div>
              <div className="text-white text-sm truncate">Dhairya Gupta</div>
              <IoMdArrowDropdown
                className={`h-6 w-6 text-white ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
              <div className="text-gray-800 text-sm px-4 py-2 cursor-pointer hover:bg-gray-100">
                Profile
              </div>
              <div className="text-gray-800 text-sm px-4 py-2 cursor-pointer hover:bg-gray-100">
                Settings
              </div>
              <div className="text-gray-800 text-sm px-4 py-2 cursor-pointer hover:bg-gray-100">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
