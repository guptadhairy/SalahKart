import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

import rect from "../assets/comp.png"; // Update this with your actual image paths

const allCards = [
  { image: rect, title: "Blog 1", description: "Description for Blog 1", link: "/blog/1" },
  { image: rect, title: "Blog 2", description: "Description for Blog 2", link: "/blog/2" },
  { image: rect, title: "Blog 3", description: "Description for Blog 3", link: "/blog/3" },
  { image: rect, title: "Blog 4", description: "Description for Blog 4", link: "/blog/4" },
  { image: rect, title: "Blog 5", description: "Description for Blog 5", link: "/blog/5" },
  { image: rect, title: "Blog 6", description: "Description for Blog 6", link: "/blog/6" },
];

const resumeCards = [
  { image: rect, title: "Resume 1", description: "Description for Resume 1", link: "/resume/1" },
  { image: rect, title: "Resume 2", description: "Description for Resume 2", link: "/resume/2" },
  { image: rect, title: "Resume 3", description: "Description for Resume 3", link: "/resume/3" },
  { image: rect, title: "Resume 4", description: "Description for Resume 4", link: "/resume/4" },
  { image: rect, title: "Resume 5", description: "Description for Resume 5", link: "/resume/5" },
  { image: rect, title: "Resume 6", description: "Description for Resume 6", link: "/resume/6" },
];

const linkedInCards = [
  { image: rect, title: "LinkedIn 1", description: "Description for LinkedIn 1", link: "/linkedin/1" },
  { image: rect, title: "LinkedIn 2", description: "Description for LinkedIn 2", link: "/linkedin/2" },
  { image: rect, title: "LinkedIn 3", description: "Description for LinkedIn 3", link: "/linkedin/3" },
  { image: rect, title: "LinkedIn 4", description: "Description for LinkedIn 4", link: "/linkedin/4" },
  { image: rect, title: "LinkedIn 5", description: "Description for LinkedIn 5", link: "/linkedin/5" },
  { image: rect, title: "LinkedIn 6", description: "Description for LinkedIn 6", link: "/linkedin/6" },
];

const OurBlogs = () => {
  const [cards, setCards] = useState(allCards);
  const [selectedLink, setSelectedLink] = useState('All');

  const handleLinkClick = (cards, linkName) => {
    setCards(cards);
    setSelectedLink(linkName);
  };

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
        <div className='flex mt-[100px] justify-center items-center text-5xl font-medium text-blue-900  '>SalahKart Blogs</div>
        <div className='flex justify-center items-center mt-5 text-lg font-light text-slate-500'>Check out our blogs for the latest insights, tips and</div>
        <div className='flex justify-center items-center text-lg font-light text-slate-500'>trends in the industry!</div>
        <div className='w-full mt-10'>
          <div className='flex justify-center items-center gap-[90px] relative'>
            <div className='flex flex-col items-center'>
              <Link to="#" onClick={() => handleLinkClick(allCards, 'All')}>All</Link>
              {selectedLink === 'All' && <div className='h-1 w-full bg-blue-500 rounded mt-1'></div>}
            </div>
            <div className='flex flex-col items-center'>
              <Link to="#" onClick={() => handleLinkClick(resumeCards, 'Resume')}>Resume</Link>
              {selectedLink === 'Resume' && <div className='h-1 w-full bg-blue-500 rounded mt-1'></div>}
            </div>
            <div className='flex flex-col items-center'>
              <Link to="#" onClick={() => handleLinkClick(linkedInCards, 'LinkedIn')}>LinkedIn</Link>
              {selectedLink === 'LinkedIn' && <div className='h-1 w-full bg-blue-500 rounded mt-1'></div>}
            </div>
          </div>
          <div className='flex flex-wrap justify-center mt-4'>
            {cards.map((card, index) => (
              <Card key={index} image={card.image} title={card.title} description={card.description} link={card.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
