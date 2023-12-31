import React from "react";
import fimg from "../../assets/ring.png";

const FeatureCard = ({title, desc}) => {
  return (
    <>
      {/* Outer Card  */}
      <div className="rounded-md cursor-pointer hover:shadow-lg hover:shadow-blue-400 md:w-1/5 md:h-fit  w-[75%] py-8  bg-[#fff] p-3 flex flex-col">
        {/* Feature Img  */}
        <img src={fimg} className="w-12 h-12 object-cover" alt="f-img" />
        {/* Feature Title  */}
        <span className="font-bold my-2 text-xl">{title}</span>
        <span className="text-[grey] font-semibold text-sm">
          {desc}
        </span>
      </div>
    </>
  );
};

export default FeatureCard;
