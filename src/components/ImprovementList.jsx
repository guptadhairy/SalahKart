import React, { useState } from "react";
import { ImStatsBars } from "react-icons/im";

const improvements = [
  {
    title: "Language & Grammar",
    points: "75/100",
    scope: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    details: [
      {
        title: "Verb & Tenses",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Active Voice",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Buzzwords",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
      {
        title: "Grammar Check",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Spell Check",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Use of Personal Pronouns",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
    ],
  },
  {
    title: "Language & Grammar",
    points: "75/100",
    scope: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    details: [
      {
        title: "Verb & Tenses",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Active Voice",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Buzzwords",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
      {
        title: "Grammar Check",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Spell Check",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Use of Personal Pronouns",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
    ],
  },
  {
    title: "Language & Grammar",
    points: "75/100",
    scope: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    details: [
      {
        title: "Verb & Tenses",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Active Voice",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Buzzwords",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
      {
        title: "Grammar Check",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Spell Check",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Use of Personal Pronouns",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
    ],
  },
  {
    title: "Language & Grammar",
    points: "75/100",
    scope: "+5 points scope of improvement",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget. Maecenas ac ipsum laoreet amet ultrices.",
    details: [
      {
        title: "Verb & Tenses",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Active Voice",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Buzzwords",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
      {
        title: "Grammar Check",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Spell Check",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Use of Personal Pronouns",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
    ],
  }
  // Repeat the above object for other items...
];

const ImprovementCard = ({ title, points, scope, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent":
        return "text-green-500";
      case "Moderate":
        return "text-orange-500";
      case "Unsatisfactory":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2 w-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
            <i className="fas text-indigo-600 mr-2">
              <ImStatsBars />
            </i>
            {title}
          </h3>
          <p className="text-xs text-green-500 font-bold mb-1">{scope}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-yellow-500 mb-1">
            {points}
          </div>
          <button
            onClick={toggleDropdown}
            className="text-indigo-600 text-sm font-semibold"
          >
            {isOpen ? "View less ←" : "View Details →"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 p-2 border-t border-gray-200 shadow-lg bg-lp">
          {details.map((detail, index) => (
            <div key={index} className="mb-1">
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-800">
                  {detail.title}
                </span>
                <span
                  className={`text-sm font-semibold ${getStatusColor(
                    detail.status
                  )}`}
                >
                  {detail.status}
                </span>
              </div>
              <div className="text-xs text-gray-600">{detail.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ImprovementList = () => (
  <div className="w-full max-h-[490px] overflow-y-auto custom-scrollbar">
    {improvements.map((item, index) => (
      <ImprovementCard
        key={index}
        title={item.title}
        points={item.points}
        scope={item.scope}
        description={item.description}
        details={item.details}
      />
    ))}
  </div>
);

export default ImprovementList;
