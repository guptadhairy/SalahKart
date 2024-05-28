import React from "react";
import { FaClipboardList, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const ExploreOtherFeatures = () => {
  return (
    <div className="bg-white rounded-[25px] shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Explore Our Other Features</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <FaClipboardList className="text-blue-500 text-2xl" />
          <h3 className="text-base font-semibold">Resume Analysis</h3>
          <p className="text-gray-600">
            Get a Detailed Analysis of your Resume.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlineDocumentText className="text-blue-500 text-2xl" />
          <h3 className="text-base font-semibold">Build Your Resume</h3>
          <p className="text-gray-600">
            Get Your Resume Built by Our Platform.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-blue-500 text-2xl" />
          <h3 className="text-base font-semibold">Optimize LinkedIn</h3>
          <p className="text-gray-600">
            Get Your LinkedIn Optimized for Job Search.
          </p>
        </div>
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          View all →
        </a>
      </div>
    </div>
  );
};

export default ExploreOtherFeatures;
