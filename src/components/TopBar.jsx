import React from 'react';
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";

const TopBar = () => {
  return (
    <div className='w-full max-w-[350px] h-[40px] flex justify-between items-center px-4 lg:px-0'>
      <IoIosSearch className="h-6 w-6 text-gray-500" />
      <FaBell className="h-6 w-6 text-gray-500" />
      <div className='flex gap-2 bg-blue-900 rounded-full h-9 max-w-[200px] justify-between items-center p-1'>
        <div className='relative'>
          <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center'>
            <img src={avatar} alt='avatar' className='rounded-full h-5 w-5' />
          </div>
        </div>
        <div className='text-white text-sm truncate'>Dhairya Gupta</div>
        <IoMdArrowDropdown className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}

export default TopBar;
