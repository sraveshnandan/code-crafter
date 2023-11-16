import React from "react";
import PortFolioCard from "../shared/PortFolioCard";

const PortFolioSection = () => {
  return (
    <>
      <div className=" mt-12">
        {/* Header  */}
        <div className="text-center flex flex-col gap-0">
          <span className=" text-lg my-2 font-bold text">PORTFOLIO</span>
          <span className="text-[30px] font-semibold ">
            Let's Check Some Awesome Work
          </span>
          <span className="text-[30px] font-semibold ">
            From <span className="font-bold">Code Crafter</span>.
          </span>
        </div>

        {/* PortFolio Card box  */}
        <div className="w-full flex items-center mt-12 flex-col  justify-center">
          <div className="w-full justify-center  flex-col p-4 md:flex-row  flex gap-4 my-4">
            <PortFolioCard title={"UI/UX"} w={"lg"} />
            <PortFolioCard title={"Mobile App"} />
          </div>
          <div className="w-full justify-center flex-col md:flex-row p-4  flex gap-4">
            {" "}
            <PortFolioCard title={"Web App "} />
            <PortFolioCard title={"Native App"} w={"lg"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolioSection;
