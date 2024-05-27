import React from 'react';
import g from '../assets/g.png';
import graph from "../assets/Graph.png"
import score from "../assets/score.png"
import chart from "../assets/Chart.png"
import icon from "../assets/Icon.png"
import chart2 from "../assets/Chart2.png"

const Frame1CheckScore = () => {
  return (
    <div className='mt-[50px] grid grid-cols-3 gap-[30px] p-4 w-full h-[154px]'>
      <div className='w-[325px] bg-white rounded-2xl flex items-center p-4'>
        <img src={g} alt='label' height={"60px"} width={"60px"} className="mr-4" />
        <div className='flex flex-col'>
          <div>Check Score</div>
          <label htmlFor="upload-resume" className='text-blue-500 cursor-pointer mt-2'>
            Upload Resume
          </label>
          <input id="upload-resume" type='file' className='hidden' />
        </div>
        <div className='ml-5'>
        <img src={graph} alt='graph' width={"80px"} height={"60px"} />
        </div>
      </div>
      <div className='w-[322px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-2xl flex justify-center items-center'>
      <div className='bg-white rounded-full p-1 h-[55px] w-[55px] flex justify-center items-center ml-2'>
        <img src={score} alt='label' height={"60px"} width={"60px"} />
      </div>
        <div className='flex flex-col ml-4'>
          <div className='text-white text-sm'>Latest Resume Score</div>
          <div className='text-white text-xl font-medium'>70/100</div>
        </div>
        <div className='ml-5 mt-7'>
        <img src={chart} alt='graph' width={"80px"} height={"60px"} />
        </div>
      </div>
      <div className='w-[322px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-2xl flex justify-center items-center'>
      <div className='ml-3'>
        <img src={icon} alt='label' height={"60px"} width={"60px"} />
      </div>
        <div className='flex flex-col ml-4'>
          <div className='text-white text-sm'>Targeted Resume score</div>
          <div className='text-white text-xl font-medium'>90/100 </div>
        </div>
        <div className='ml-5 mt-7'>
        <img src={chart2} alt='graph' width={"80px"} height={"60px"} />
        </div>
      </div>
    </div>
  );
}

export default Frame1CheckScore;
