import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import rect from "../assets/comp.png";
import sign from "../assets/linked.png"; 
import blog2 from "../assets/blog2.png";
import flow from "../assets/flow.png"


export const allCards = [
  { image: rect, title: "Craft Your Perfect Pitch", description: "Building a Stellar LinkedIn Profile for Job Seeker", heading: "Land Your Dream Job: Building a Powerful LinkedIn Profile",dis: "In today's Salahkart we'll discuss about the ways of building a powerful LinkedIn profile",image2: sign ,para:"In today's digital age, your LinkedIn profile is often the first impression you make on potential employers. It's your online resume, your professional storefront, and a key tool in your job search arsenal. But with millions of users, how do you make your profile stand out from the crowd?", heading2: "Why Build a LinkedIn Profile?",image3: blog2, para2:"While a strong resume is still crucial, LinkedIn offers distinct advantages that make it a must-have for any job seeker:", li1: "Visibility & Discoverability: LinkedIn is a powerful search engine specifically designed for professional networking. Unlike a static resume that sits on your computer, a well-crafted LinkedIn profile actively increases your chances of being discovered for relevant job openings. Recruiters regularly search LinkedIn for qualified candidates, and a profile optimized with relevant keywords can put you at the top of their search results.", li2: "Credibility & Authority: A detailed profile with a professional photo, a compelling summary of your experience, and a curated list of skills establishes you as a serious contender. It showcases your qualifications in a comprehensive way that a simple resume can't match.", li3: "Networking & Relationship Building: LinkedIn allows you to connect with colleagues past and present, industry leaders you admire, and potential employers you'd like to work for. These connections can be invaluable sources of information, advice, and even job leads. By actively engaging with your network, you can build relationships that open doors to new opportunities you might not have otherwise found." , li4: "Staying Informed & Engaged: Following companies you're interested in and industry influencers allows you to stay updated on the latest trends, news, and job postings. This can give you a significant edge in today's fast-paced job market. You can also participate in industry discussions and share relevant content, positioning yourself as an expert in your field." , heading3: "Building a Profile that Gets You Hired", para3: "Now that you know why you need a profile, let's delve into specific strategies to craft one that gets you noticed:", li5: "Quantify Your Achievements & Showcase Impact: Don't just list your past duties and responsibilities. Go beyond the basic job description by quantifying your achievements using numbers and data. Increased sales by 15%? Streamlined a process that saved the company 20% on costs? Quantifiable metrics showcase the impact you've made and make your profile more impressive to potential employers.", li6: "Craft a Compelling Headline: This is your elevator pitch in a nutshell. Don't settle for just your current job title. Use keywords relevant to your target job and highlight your unique value proposition. Are you a results-oriented marketing professional with a passion for social media? A data-driven software engineer with expertise in building mobile applications? Craft a headline that reflects this and grabs the reader's attention.", li7: "Optimize Your Experience Section: This section should be more than just a list of companies and dates. Briefly describe your role at each company, focusing on key projects you spearheaded and the impact you made. Tailor your descriptions to the specific job you're targeting, highlighting the skills and experiences most relevant to the position.", li8: "Unlock the Power of Keywords: While you don't want to stuff your profile with keywords unnaturally, strategically sprinkling relevant keywords throughout your profile can significantly improve your searchability. Think about the skills and experience that employers in your field are looking for, and incorporate those keywords into your headline, summary, and experience sections. This will help recruiters find you when searching for candidates with specific skill sets.", li9: "Showcase Your Skills (and Get Endorsements): List your hard skills (technical abilities) and soft skills (interpersonal qualities) that are most relevant to your target career path. Encourage colleagues, past clients, or even satisfied team members to endorse your skills. Endorsements add social proof and validate your expertise in the eyes of potential employers.", li10: "Don't Forget the Summary: This is your chance to tell your professional story in a captivating way. Briefly explain your career goals, what motivates you, and the unique value you bring to the table. Avoid generic statements and focus on what makes you stand out from other applicants.", li11: "Network, Connect, Engage: LinkedIn isn't just a static online profile; it's a dynamic platform for professional networking. Join industry groups relevant to your field, participate in discussions by sharing your insights and expertise, and share relevant content (articles, industry reports, etc.) that demonstrates your knowledge and keeps you at the forefront of your field. Building relationships and establishing yourself as an expert can lead to new opportunities and even recommendations down the line.", Flow: "Complete Flowchart", chart: flow, conc: "By following these tips and consistently refining your profile, you can transform your LinkedIn profile from a static resume into a dynamic and engaging platform that showcases your skills, experience, and value to potential employers. Remember, your profile", link: "/blog/1" },
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
      <div className="w-full lg:w-[258px] bg-white rounded-[20px]">
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
            to={"/createblogs"}
            className="ml-10 text-blue-800 border-2 border-purple-700 p-2 rounded-3xl flex justify-center items-center gap-2 font-medium text-xl"
          >
             Create Blog
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
              <Link key={index} to={card.link}>
                <Card image={card.image} title={card.title} description={card.description} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
