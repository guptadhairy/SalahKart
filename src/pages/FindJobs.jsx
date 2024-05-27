import React from 'react'
import SideBar from '../components/SideBar'

const FindJobs = () => {
  return (
    <div className="flex gap-6 h-[100vh]">
      <div className="w-[387px]  h-[100%] ">
        <SideBar />
      </div>
      <div className="text-pink-500 w-[85%] bg-slate-200">Find the best jobs according to your profession</div>
    </div>
  )
}

export default FindJobs