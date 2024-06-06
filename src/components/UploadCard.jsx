import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import uploadlogo from "../assets/Vector.svg";

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log("File uploaded:", selectedFile);
    navigate("/checkscore"); // Replace '/checkscore' with the actual path
  };

  return (
    <div className=" pt-[6%] w-full flex flex-wrap justify-center">
      <div className="bg-white p-6 rounded-[25px] shadow-md w-[1000px] grid grid-cols-2 gap-4">
        <div className="">
          <h3 className="text-xl text-center font-bold mb-4">
            Upload Your
            <span className="text-pp"> Resume </span>
          </h3>
          <div className="flex flex-col items-center">
            <label
              htmlFor="resume-upload"
              className="file-upload-label flex flex-col items-center justify-center  w-full
              h-[350px] border-2 border-dashed rounded-lg cursor-pointer bg-[#f5f0ff] hover:bg-gray-200"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                <i className="">
                  <img src={uploadlogo} alt="upload" />
                </i>
                <span className="text-gray-500 font-light">
                  Drag & Drop to Upload Resume or
                </span>
                <span className="text-blue-500 font-medium">Browse</span>
              </div>
              <input
                type="file"
                id="resume-upload"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                hidden
              />
              <p className="text-gray-600 mt-2">
                Supported Resume Formats: PDF, DOCX
              </p>
            </label>
          </div>
        </div>
        <div>
          <div className="flex flex-row  gap-4 w-full">
            <h3 className="text-xl text-center font-bold ">
              Additional Details
            </h3>

            <button className=" text-pp text-end font-bold">Skip This</button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="job-role"
                className="block text-center text-gray-700 text-sm font-bold mb-2 w-full"
              >
                Job Role
              </label>
              <select
                id="job-role"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[450px]"
              >
                {/* Add job role options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="career-level"
                className="block text-center text-gray-700 text-sm font-bold mb-2 w-full"
              >
                Career Level
              </label>
              <select
                id="career-level"
                className="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {/* Add career level options here */}
              </select>
            </div>

            <div className="w-full text-center text-gray-600 mb-4">OR</div>
            <div>
              <label
                htmlFor="job-description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Job Description
              </label>
              <textarea
                id="job-description"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the Job Description Manually"
              ></textarea>
            </div>
          </form>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500  w-[950px] text-white font-bold text-center py-2 px-4 rounded-lg"
        >
          UPLOAD RESUME
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
