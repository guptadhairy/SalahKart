import React from 'react';
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";

const TopBar = () => {
  return (
    <div className='w-[350px] h-[40px] flex justify-between items-center'>
      <IoIosSearch style={{height: "25px", width: "25px", color: "gray"}}/>
      <FaBell style={{height: "25px", width: "25px", color: "gray"}} />
      <div className='flex gap-2 [background-color:#1B2559]  rounded-3xl h-9 w-[200px] justify-between items-center p-1' >
        <div className='relative'>
          <div className='bg-white rounded-full h-[25px] w-[25px] flex items-center justify-center'>
            <img src={avatar} alt='avatar' className='rounded-full h-[20px] w-[20px]' />
          </div>
        </div>
        <div className='text-white'>Dhairya Gupta</div>
        <IoMdArrowDropdown style={{height: "25px", width: "25px", color: "white"}}/>
      </div>
    </div>
  );
}

export default TopBar;
