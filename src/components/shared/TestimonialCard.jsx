import React from "react";
import timg from "../../assets/cone.png";

const TestimonialCard = ({ name, post, data }) => {
  return (
    <>
      {/* Wrapper  */}
      <div className=" group w-[65%] p-3 md:w-1/4 shadow-lg cursor-pointer  bg-white rounded-md flex justify-center flex-col gap-4">
        {/* Img Box  */}

        <div className="w-full flex gap-4">
          <img
            className="w-20 group-hover:-ml-6 h-20 p-1 bg-light duration-500 rounded-md overflow-hidden "
            src={timg}
            alt="t-img"
          />
        </div>

        {/* Comment Box  */}

        <div className="font-semibold text-[grey]">
          <span>{data}</span>
        </div>

        {/* Last Section  */}

        <div className="flex flex-col">
          <span className="text-2xl text-blue-600 font-[550]">{name}</span>

          <span className="text-[12px] font-semibold text-[grey]">{post}</span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
