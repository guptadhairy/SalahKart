import React from "react";
import { Link } from "react-router-dom";

const TipsBanner = () => {
  return (
    <div className="space-y-6 ">
      {/* Important Tips Section */}
      <div className="p-4 rounded-[25px] border-l-[10px] min-w-[27vw]  border-dp/60 bg-lp shadow-md">
        <div className="flex items-start space-x-4">
          <div className="text-yellow-500 text-2xl">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Important Tips:
            </h2>
            <p className="text-gray-700 text-xs">
              A good resume should be clear, concise, and tailored to the
              specific job, highlighting relevant skills and achievements with
              quantifiable results.
            </p>
            <Link href="#" className="text-blue-500 font-medium hover:underline">
              Download Sample Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Blogging and Contact Section */}
      <div className="p-4 rounded-[25px] border border-pp shadow-md bg-white">
        <div className="flex items-start space-x-4">
          <div className="text-blue-500 text-xl">
            <i className="fas fa-blog"></i>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Blogging and Contact
            </h2>
            <p className="text-gray-700 text-xs">
              Go check out our blogs for the latest insights, tips, and trends
              in the industry!
            </p>
            <p className="text-gray-700 text-sm">
              Contact At -{" "}
              <Link
                href="mailto:admin@salahkart.com"
                className="text-blue-500 font-medium hover:underline"
              >
                admin@salahkart.com
              </Link>
            </p>
            <div className="flex space-x-4 mt-2">
              <Link to={"/"} className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to={"/"} className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to={"/"} className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to={"/"} className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsBanner;
