import React from 'react'
import sign from "../assets/sign.png";
import sk from "../assets/sk1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-br from-[#868CFF] to-[#4318FF] flex flex-col justify-center items-start px-8 lg:px-20 py-10 lg:py-0 ">
        <div className="text-white font-dm-sans text-5xl lg:text-[72px] font-bold pt-16 lg:mt-0">
          SalahKart
        </div>
        <div className="font-dm-sans text-2xl lg:text-[30px] font-normal mt-2 lg:mt-4">
          - Your Ultimate Career Companion!
        </div>
        <div className="mt-10 lg:mt-0">
          <img src={sign} alt="signup" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 lg:px-20 py-10 lg:py-0 ">
        <img src={sk} alt="SalahKart" className="h-16 lg:h-20 w-auto" />
        <div className="font-dm-sans text-2xl lg:text-[25px] mt-4 text-center">Welcome Back!</div>
        <div className="font-dm-sans font-medium text-xl lg:text-[30px] mt-10 text-center">Log In</div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-7">
          <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            <span>Login with Google</span>
          </button>
          <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475661/linkedin-color.svg" loading="lazy" alt="linkedin logo" />
            <span className="pt-0.5">Login with LinkedIn</span>
          </button>
        </div>
        <div className="text-gray-500 font-thin mt-5">-OR-</div>
        <div className="flex flex-col gap-5 mt-5 w-full max-w-lg">
          <input
            type="email"
            className="peer py-3 px-4 w-full bg-transparent border-b-2 border-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:border-neutral-300 dark:text-neutral-400 dark:placeholder-neutral-500"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="peer py-3 px-4 w-full bg-transparent border-b-2 border-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 dark:border-neutral-300 dark:text-neutral-400 dark:placeholder-neutral-500"
            placeholder="Password"
          />
        </div>
        <Link
          className="mt-8 flex gap-4 items-center justify-center text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg py-2 px-4 w-full max-w-lg text-center"
          to={"/checkscore"}
        >
          Log In
        </Link>
        <div className="flex flex-col items-center mt-5">
          <div className="font-dm-sans font-light text-gray-600">Don't have an account?</div>
          <Link className="font-dm-sans font-medium text-blue-600 hover:underline" to="/">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login