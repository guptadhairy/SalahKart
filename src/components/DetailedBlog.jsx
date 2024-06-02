import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { allCards } from "../pages/OurBlogs";

const DetailedBlog = () => {
  const { id } = useParams();
  const blog = allCards.find((card) => card.link === `/blog/${id}`);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/4 bg-white rounded-[20px]">
        <SideBar />
      </div>
      <div className="flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto">
        <div className="mb-6 md:mb-8">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            Hello Dhairya,
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Welcome to
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                SalahKart
              </div>
              <div className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                - Job Finding Made Easy!
              </div>
            </div>
            <TopBar />
          </div>
        </div>
        <div className="flex items-center mt-[100px] gap-[181px]">
          <Link
            to={"/ourblogs"}
            className="ml-10 text-blue-800 flex justify-center items-center gap-2 font-medium text-xl"
          >
            <BiArrowBack /> All Blogs
          </Link>
          <div className=" text-center  w-[400px]">
            <div className="text-5xl font-medium text-blue-900 ">
              SalahKart Blogs
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 text-lg font-light text-slate-500">
          Check out our blogs for the latest insights, tips and
        </div>
        <div className="flex justify-center items-center text-lg font-light text-slate-500">
          trends in the industry!
        </div>
        <div className="mt-[30px] w-[892px] h-[280px] ml-[90px] flex gap-[30px] ">
        <img src={blog.image} alt={blog.title} className="w-full lg:w-1/2 rounded-lg" />
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-slate-300 mt-3">
        </div>
          <div>
          <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
          <p className="text-lg font-light text-slate-500 mt-2">{blog.description}</p>
          <p>Posted on 15th May, 2024 By Team SalahKart</p>
          <div className="flex gap-4 ">
            <button className="border border-black px-2">Like</button>
            <button className="border border-black px-2">Save</button>
            <button className="border border-black px-2">Share</button>
          </div>
          </div>
        </div>
        <div className="text-blue-600 mt-11 text-4xl font-semibold flex items-center" >
            {blog.title} : 
            <div className="mt-1 font-normal text-3xl text-slate-500">{blog.description}</div>
        </div>
        <img src={blog.image2} alt="second" />
      </div>
    </div>
  );
};

export default DetailedBlog;
