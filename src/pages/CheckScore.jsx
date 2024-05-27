import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

const CheckScore = () => {
  return (
    <div className="flex gap-6 h-[100vh]">
      <div className="w-[387px]  h-[100%] ">
        <SideBar />
      </div>
      <div className="w-[85%] bg-slate-200 py-6 px-6">
        <div className='text-sm text-gray-500 font-semibold'>Hello Dhairya,</div>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
          <div className='text-3xl font-semibold'>Welcome to </div>
          <div className='text-3xl font-semibold bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent'>SalahKart</div>
          <div className='text-2xl mt-1 font-medium'>- Job Finding Made Easy!</div>
        </div>
        <TopBar />
        </div>
      </div>
    </div>
  )
}

export default CheckScore