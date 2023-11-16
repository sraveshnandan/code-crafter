import React from "react";
import TestimonialCard from "../shared/TestimonialCard";

const TestiMonialSection = () => {
  return (
    <>
      {/* Wrapper  */}
      <div className="flex mt-16  items-center flex-col md:-mx-20 md:px-24 skew-y-[2deg]  justify-center p-12">
        {/* Section heading  */}

        <div className="w-full  flex flex-col ">
          <span className="text font-bold">TESTIMONIAL</span>
          <span className="text-[30px] font-semibold  leading-2  ">
            Some Words From Our <br /> Happy Cleints.
          </span>
        </div>

        {/* Testimonial Card box  */}

        <div className="my-12 p-1 w-full items-center justify-around   flex flex-col md:flex-row flex-wrap gap-2">
          <TestimonialCard
            name={"Sravesh "}
            post={"CEO of Code Crafter"}
            data={
              "We're building a better application now, thanks to Code Crafter, amazing for the small businesses around the worls."
            }
          />

          <TestimonialCard
            name={"Sravesh "}
            post={"CEO of Code Crafter"}
            data={
              "We're building a better application now, thanks to Code Crafter, amazing for the small businesses around the worls."
            }
          />
          <TestimonialCard
            name={"Sravesh "}
            post={"CEO of Code Crafter"}
            data={
              "We're building a better application now, thanks to Code Crafter, amazing for the small businesses around the worls."
            }
          />
        </div>
      </div>
      {/* Stats Section  */}
      <div className=" bg-glass-bg  p-3 rounded-md flex w-full  justify-around items-center">
        {/* Stat Box  */}
        <div className="flex  flex-col ">
          <span className=" text text-6xl font-bold">12+ </span>

          <span className="font-semibold">Projects done</span>
        </div>

        {/* Stat Box  */}
        <div className="flex  flex-col ">
          <span className=" text text-6xl font-bold">98% </span>

          <span className="font-semibold">Success Rate</span>
        </div>

        {/* Stat Box  */}
        <div className="flex  flex-col ">
          <span className=" text text-6xl font-bold">1+ </span>

          <span className="font-semibold">Winning Awards</span>
        </div>

        {/* Stat Box  */}
        <div className="flex  flex-col ">
          <span className=" text text-6xl font-bold">50+ </span>

          <span className="font-semibold">Happy Cleints</span>
        </div>
      </div>
    </>
  );
};

export default TestiMonialSection;
