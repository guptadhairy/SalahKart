import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-500">Resume</span>
          <span className="text-blue-500">Analysis</span>
        </h1>
        <span className="ml-8 text-gray-600">Hello Pulkit,</span>
        <h2 className="ml-4 text-lg font-medium text-gray-800">
          <span className="text-blue-500">Welcome to Salahkart</span> -
          <span className="text-gray-700">Job Finding Made Easy!</span>
        </h2>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          className="w-6 h-6 ml-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L5 17m5-4v6m4-6v6m1-10V5a2 2 0 114 0v.341C17.67 6.165 19 8.388 19 11v3.159c0 .538-.214 1.055-.595 1.436L20 17"
          />
        </svg>
        <div className="relative ml-4">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHxlbnwwfHww&auto=format&fit=crop&w=500&q=60"
            alt="User profile"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 text-xs">
            Pulkit Sachan
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
