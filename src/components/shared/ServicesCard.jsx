import React from "react";
import cardBg from "../../assets/ring.png";
import { Link } from "react-router-dom";

const ServicesCard = () => {
  return (
    <>
      {/* Card Outer Layout  */}
      <div className="flex flex-col p-4 w-[70%] items-center md:w-1/3  text-center  gap-4 ">
        <img
          src={cardBg}
          className="w-20 hue-rotate-30 h-20 z-10"
          alt="card bg "
        />

        <div className="bg-white flex text-center relative shadow-xl hover:shadow-purple-200 cursor-pointer flex-col  -mt-10 px-5 py-8 rounded-lg skew-y-6">
          <span className="font-semibold text-xl text-black">
            Sofware Design
          </span>

          <span className="my-4 font-medium">
            We provide best software Services for any type of bussiness as
            stragegy management.
          </span>

          <Link className=" text-light flex items-center justify-center text-2xl absolute  -bottom-6 left-[40%] bg-gradient-to-br from-purple-600 to-blue-600 rounded-full w-12 h-12">
            ↗
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
