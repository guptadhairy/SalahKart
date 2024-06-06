import React from "react";
import { ImStatsBars } from "react-icons/im";


const improvements = [
  {
    title: "Tone & Style",
    points: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    link: "#",
  },
  {
    title: "Impact",
    points: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    link: "#",
  },
  {
    title: "Formatting",
    points: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    link: "#",
  },
  {
    title: "Keyword Optimization",
    points: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    link: "#",
  },
];

const ImprovementCard = ({ title, points, description, link }) => (
  <div className="bg-white shadow-md rounded-lg p-2 mb-2 flex justify-between items-start min-h-[118px]">
    <div>
      <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
        <i className="fas  text-indigo-600 mr-2">
          <ImStatsBars />
        </i>{" "}
        {title}
      </h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
    <div className="text-right">
      <p className="text-xs text-green-600 mb-2">{points}</p>
      <a href={link} className="text-indigo-600 text-sm font-semibold">
        View Details &rarr;
      </a>
    </div>
  </div>
);

const ImprovementList = () => (
  <div className="w-full max-w-[521.33px]">
    {improvements.map((item, index) => (
      <ImprovementCard
        key={index}
        title={item.title}
        points={item.points}
        description={item.description}
        link={item.link}
      />
    ))}
  </div>
);

export default ImprovementList;
