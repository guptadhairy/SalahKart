import React, { useState } from 'react'
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { allCards } from "../pages/OurBlogs";
import star from "../assets/star.png"

const DetailedBlog = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const blog = allCards.find((card) => card.link === `/blog/${id}`);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 ${
          isExpanded ? "ml-[350px]" : "ml-[100px]"
        }`}>
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
        <div className="mt-[30px] w-[910px] h-[250px] ml-[42px] flex gap-[27px] ">
        <img src={blog.image} alt={blog.title} className="w-full lg:w-1/2 rounded-lg" />
        <div className="inline-block h-[220px] min-h-[1em] w-0.5 self-stretch bg-slate-300 mt-3">
        </div>
          <div className="w-[425px] h-[192px] mt-[30px]">
          <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
          <p className="text-xl font-light text-slate-500 mt-2">{blog.description}</p>
          <p className="mt-[35px] text-sm">Posted on 15th May, 2024 By Team SalahKart</p>
          <div className="flex gap-4 mt-4 ">
            <button className="border border-black px-2">Like</button>
            <button className="border border-black px-2">Save</button>
            <button className="border border-black px-2">Share</button>
          </div>
          </div>
        </div>
        <div className="w-[750px]  ml-[136px] text-blue-600 mt-11 text-4xl font-semibold " >
            {blog.title} : <span className="text-3xl text-slate-500 font-normal">{blog.description}</span>
            <div className="text-lg mt-7 font-normal text-slate-500">{blog.dis}</div>
        </div>
        <img src={blog.image2} alt="second" className="ml-[347px] mt-14" />
        <div className="w-[750px] h-[120px] ml-[136px] mt-[90px]">
        <div className=" text-blue-700 text-3xl">{blog.heading}</div>
        <p className="mt-6 text-slate-500">{blog.para}</p>
        </div>
        <div className="flex ml-[136px] text-3xl text-blue-700 mt-[53px]">{blog.heading2}</div>
        <img src={blog.image3} alt={blog.title} className="ml-[178px] mt-10" height={"388px"} width={"668px"}  />
        <div className="w-[750px] h-[560px] ml-[136px] mt-[74px]">
          <div className="text-slate-600">{blog.para2}</div>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }} className="text-slate-600 font-light flex flex-col gap-5 mt-5">
            <li>{blog.li1}</li>
            <li>{blog.li2}</li>
            <li>{blog.li3}</li>
            <li>{blog.li4}</li>
          </ul>
        </div>
        <div className="w-[750px] h-[1067px] ml-[136px] mt-4">
          <div className="text-3xl text-blue-700">{blog.heading3}</div>
          <div className="text-slate-600 mt-5">{blog.para3}</div>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }} className="text-slate-600 font-light flex flex-col gap-5 mt-5">
            <li>{blog.li5}</li>
            <li>{blog.li6}</li>
            <li>{blog.li7}</li>
            <li>{blog.li8}</li>
            <li>{blog.li9}</li>
            <li>{blog.li10}</li>
            <li>{blog.li11}</li>
          </ul>
        </div>
        <div className="ml-[136px] text-3xl text-blue-700">{blog.Flow}</div>
        <div className="ml-[308px] mt-[51px]">
          <img src={blog.chart} alt={blog.title}/>
        </div>
        <div className="w-[750px] ml-[136px] mt-14  flex flex-col gap-6">
          <div className="text-3xl text-blue-700">Conclusion</div>
          <div className="text-slate-600 text-sm">{blog.conc}</div>
          <div className=" text-slate-600 text-sm">Untill then...</div>
          <div className="text-slate-600 text-sm">Don't forget to share this story on WhatsApp, LinkedIn and X.</div>
          <div className="text-slate-600 text-sm">Salahkart is also on the LinkedIn Channel. Click here to follow us.</div>
        </div>
        <Link to={"/ourblogs"} className="flex items-center ml-[126px] mt-14 text-blue-700 gap-1"><BiArrowBack /> Go to All Blogs</Link>
        <div className="w-[750px] ml-[136px] flex gap-[77px]">
          <div className="w-[180px] flex flex-col gap-5">
            <div className="text-sm font-medium mt-6">Your Salahkart blog rating</div>
            <img src={star} alt="star" />
            <Link className="border-2 border-purple-600 rounded-3xl text-center p-2">Submit feedback</Link>
          </div>
          <div className="text-sm font-medium mt-6">
            <div className="mb-5">Additional feedback</div>
            <textarea  id="message" rows="4" class="block p-2.5 w-[500px] text-sm rounded-lg font-normal" placeholder="If you have any additional feedback, please type it in here..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
