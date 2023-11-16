import React from "react";
import PriceCard from "../shared/PriceCard";

const PricingSection = () => {
  return (
    <>
      {/* Wrapper  */}
      <div className="flex mt-16  items-center flex-col md:-mx-20 md:px-24 skew-y-[2deg] bg-gradient-to-br from-purple-200  to-blue-200 justify-center p-12">
        {/* Section heading  */}

        <div className="w-full flex flex-col ">
          <span className="text font-bold">PRICING</span>
          <span className="text-[30px] font-semibold ">
            Choose Affordable Price.
          </span>
        </div>

        {/* Features Card box  */}

        <div className="my-12 p-1 w-full items-center justify-around gap-2  flex flex-col md:flex-row flex-wrap">

          <PriceCard price={5000} title={'Basic'}/>
          <PriceCard price={10000} title={'Standred'}/>
          <PriceCard price={25000} title={'Premium'}/>
         
        </div>
      </div>
    </>
  );
};

export default PricingSection;
