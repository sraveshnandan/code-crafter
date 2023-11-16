import React from "react";
import FeatureCard from "../shared/FeatureCard";

const FeatureSection = () => {
  return (
    <>
      {/* Wrapper  */}
      <div className="flex  items-center flex-col md:-mx-20 md:px-24 skew-y-[2deg] bg-gradient-to-br from-purple-200  to-blue-200 justify-center p-12">
        {/* Section heading  */}

        <div className="w-full flex flex-col ">
          <span className="text font-bold">FEATURES</span>
          <span className="text-[30px] font-semibold ">
            We Provide Exciting Features.
          </span>
        </div>

        {/* Features Card box  */}

        <div className="my-12 p-1 w-full items-center justify-around gap-2  flex flex-col md:flex-row flex-wrap">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
