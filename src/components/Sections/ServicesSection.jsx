import React from "react";
import ServicesCard from "../shared/ServicesCard";

const ServicesSection = () => {
  return (
    <>
      {/* wrapper  */}
      <div className="">
        {/* Header  */}
        <div className="text-center flex flex-col gap-0">
          <span className=" text-lg my-2 font-bold text">SERVICES</span>
          <span className="text-[30px] font-semibold ">
            Feel the power of technology
          </span>
          <span className="text-[30px] font-semibold ">Software Service.</span>
        </div>

        {/* services Card box  */}
        <div className="flex items-center flex-wrap  md:justify-between justify-center my-4 md:w-[80%] mx-auto">
          <ServicesCard
            title={"Software Development"}
            desc={
              "We provide best software Services for any type of bussiness as stragegy management"
            }
          />

          <ServicesCard
            title={"App Development"}
            desc={
              "We provide best software Services for any type of bussiness as stragegy management"
            }
          />

          <ServicesCard
            title={"Software Design"}
            desc={
              "We provide best software Services for any type of bussiness as stragegy management"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
