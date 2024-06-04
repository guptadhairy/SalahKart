import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProgressSteps from "./ProgressSteps";


const BlogHeading = () => {
  return (
    <div className="bg-white shadow-[30px] p-4 mb-4 rounded-[25px] hover:shadow-[0_20px_50px_-10px_rgba(114,111,232,0.80)]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-pp">Blog Heading</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.828-2.433L16.16 3.828a2.5 2.5 0 013.536 3.536z"
          />
        </svg>
      </div>
      <label
        htmlFor="headingCaption"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Heading Caption
      </label>
      {/* <input
        type="text"
        id="headingCaption"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /> */}
      <label
        htmlFor="description"
        className="block text-gray-700 text-sm font-bold mt-4 mb-2"
      >
        Description :
      </label>
      <textarea
        id="description"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
      />
    </div>
  );
};

const SubHeading = () => {
  return (
    <div className="bg-white shadow-[30px] p-4 mb-4 rounded-[25px] hover:shadow-[0_20px_50px_-10px_rgba(114,111,232,0.80)]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-pp font-bold">Blog Heading</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.828-2.433L16.16 3.828a2.5 2.5 0 013.536 3.536z"
          />
        </svg>
      </div>
      <label
        htmlFor="headingCaption"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Heading Caption
      </label>
      <input
        type="text"
        id="headingCaption"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const BlogCreate = () => {
  return (
    <div className="container mx-auto px-4">
     
      <BlogHeading />
      <SubHeading />
      <button className=" mx-[40%]   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Sub-Heading
      </button>
    </div>
  );
};

export default BlogCreate;
