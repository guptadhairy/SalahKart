import React, { useState } from "react";
import { ImStatsBars } from "react-icons/im";
import { LuGauge } from "react-icons/lu";

const improvements = [
  {
    title: "Language & Grammar",
    points: "75/100",
    scope: "+5 points scope of improvement",
    description:
      "Enhances clarity and professionalism by ensuring flawless language usage and grammar accuracy in your resume.",
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
    title: "Formatting & Basic Info",
    points: "82/100",
    scope: "+5 points scope of improvement",
    description:
      "Optimizes the layout of your resume, ensuring consistency while highlighting essential personal details.",
    details: [
      {
        title: "Consistency",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Bio Information",
        status: "Excellent",
        description: "No Correction Required",
      },
      {
        title: "Display of Resume Sections",
        status: "Excellent",
        description: "No Correction Required",
      },
      {
        title: "Proper Resume Sections Check",
        status: "Excellent",
        description: "No Correction Required",
      },
    ],
  },
  {
    title: "Job Role / Description Based",
    points: "40/100",
    scope: "+5 points scope of improvement",
    description:
      "Tailors resume keywords for improved relevance and visibility in job searches based on Job Roles / Description.",
    details: [
      {
        title: "Keyword Optimization",
        status: "Unsatisfactory",
        description:
          "Very low amount of keywords found in the resume matching with the job description",
      },
      {
        title: "Context Analysis",
        status: "Moderate",
        description:
          "Moderate level of contextual similarity found in the resume matching with the job description",
      },
    ],
  },
  {
    title: "Overall Line Analysis",
    points: "60/100",
    scope: "+5 points scope of improvement",
    description:
      "Provides insights on achievements, action language, and skill presentation for a compelling resume.",
    details: [
      {
        title: "Impact / Achievements",
        status: "Unsatisfactory",
        description: "Needs Improvement",
      },
      {
        title: "Action Verbs",
        status: "Excellent",
        description: "Appropriately Used",
      },
      {
        title: "Responsibilities / Methodology / Tasks",
        status: "Moderate",
        description: "Moderately Needs Improvement",
      },
      {
        title: "Overall Skill Analysis",
        status: "Excellent",
        description: "Appropriately Used",
      },
    ],
  },
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

  const getPointsColor = (points) => {
    const score = parseInt(points.split("/")[0], 10);
    if (score < 50) {
      return "text-red-500";
    } else if (score < 80) {
      return "text-yellow-500";
    } else {
      return "text-green-500";
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2 w-full">
      <div className=" justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <i className="fas text-indigo-600 mr-2">
                <ImStatsBars />
              </i>
              {title}
            </h3>
            <div
              className={`text-sm flex font-semibold mb-1 ${getPointsColor(
                points
              )}`}
            >
              <LuGauge className="inline-block mr-1 mt-0 text-lg" />
              {points}
            </div>
          </div>
          <p className="text-xs text-green-500 font-bold mb-1 w-full">
            {scope}
          </p>
          <p className="text-xs  text-gray-600">
            {description}
            <span>
              <button
                onClick={toggleDropdown}
                className="text-indigo-600 text-xs font-semibold inline-flex "
              >
                {isOpen ? "View less ←" : "View Details →"}
              </button>
            </span>
          </p>
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
