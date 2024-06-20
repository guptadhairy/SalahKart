import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineBuild } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="bg-white p-6 rounded-[25px] lg:min-h-[380px]  shadow-md ">
      <h2 className="text-lg font-semibold mb-4">Explore Our Other Features</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <AiOutlineFileSearch className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium">Resume Analysis</h3>
            <p className="text-gray-500 text-sm">
              Get a Detailed Analysis of your Resume
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-green-100 text-green-600 p-2 rounded-full">
            <MdOutlineBuild className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium">Build Your Resume</h3>
            <p className="text-gray-500 text-sm">
              Get Your Resume Built by Our Platform
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-blue-500 text-white p-2 rounded-full">
            <FaLinkedin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium">Optimize LinkedIn</h3>
            <p className="text-gray-500 text-sm">
              Get Your LinkedIn Optimized for Job Search
            </p>
          </div>
        </div>
      </div>
      <div className="mt-1 text-right">
        <Link to={"/"} className="text-blue-600 hover:underline">
          View all →
        </Link>
      </div>
    </div>
  );
};

export default Features;
