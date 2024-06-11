import React from "react";
import PropTypes from "prop-types";
import GaugeChart from "react-gauge-chart";


const OverviewCard = ({ score = 70 }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg p-6 items-center">
      <div className="relative flex-shrink-1 w-[200px] ">
        <GaugeChart
          
          id="gauge-chart5"
          nrOfLevels={100}
          arcsLength={[0.3, 0.5, 0.2]}
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          percent={score / 100}
          arcPadding={0.02}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-800">
            {score}/100
          </span>
        </div>
      </div>
      <div className="ml-14">
        <h3 className="text-lg font-semibold text-dp">Overview</h3>
        <p className="text-xs text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ac semper volutpat in eget.
          Maecenas ac ipsum laoreet amet ultrices. Lorem ipsum dolor sit amet
         
        </p>
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  score: PropTypes.number,
};

OverviewCard.defaultProps = {
  score: 70,
};

export default OverviewCard;
