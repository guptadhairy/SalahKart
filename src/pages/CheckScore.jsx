import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import Frame1CheckScore from '../components/Frame1CheckScore'

const CheckScore = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <SideBar />
      </div>
      
      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-slate-200 py-6 px-6">
        {/* Greeting and Top Bar */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 font-semibold mt-5">Hello Dhairya,</div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="text-3xl font-semibold">Welcome to </div>
              <div className="text-3xl font-semibold bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">SalahKart</div>
              <div className="text-2xl mt-1 font-medium">- Job Finding Made Easy!</div>
            </div>
            <TopBar />
          </div>
        </div>

        {/* Check Score Frame */}
        <Frame1CheckScore />
      </div>
    </div>
  )
}

export default CheckScore
