import React from "react";
import a from "../../assets/cone.png";

const ProcessCard = ({ name }) => {
  return (
    <>
      {/* wrapper   */}

      <div className="flex md:w-1/4 text-center w-[50%] flex-col">
        <div className="bg-white  rounded-md flex items-center justify-center p-4">
          <img src={a} className="w-24 h-24" alt="" />
        </div>

        <span className="font-semibold mt-1">{name}</span>
      </div>
    </>
  );
};

export default ProcessCard;
