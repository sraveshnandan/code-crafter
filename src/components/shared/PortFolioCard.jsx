import React from "react";
import pimg from "../../assets/wimg.jpg";

const PortFolioCard = ({ w, title }) => {
  let dim = " max-h-46 md:w-1/4 w-full";
  if (w === "lg") {
    dim = " max-h-46 md:w-1/2 w-full";
  }
  return (
    <>
      {/* Wrapper  */}
      <div className={`${dim}  text-center rounded-md`}>
        <div
          className={` rounded-lg hover:shadow-xl hover:shadow-blue-300 bg-white p-4`}
        >
          <div className="h-[90%]">
            <img
              src={pimg}
              className="w-full    h-[200px]  object-contain"
              alt="p-img"
            />
          </div>
        </div>

        <span className="font-semibold my-2">{title}</span>
      </div>
    </>
  );
};

export default PortFolioCard;
