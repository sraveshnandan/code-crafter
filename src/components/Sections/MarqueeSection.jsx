import React from "react";

const MarqueeSection = () => {
  return (
    <>
      {/* Wrapper  */}
      <div className="mt-20">
        <marquee  className=" marquee-box">
          <span className="text text-6xl font-bold">
            A Smart Software Application .{" "}
          </span>

          {/* Second line  */}

          <span className="text text-6xl font-bold">Saas Landing Page . </span>

          {/* Third Line  */}

          <span className="text text-6xl font-bold">Next Gen Security . </span>
        </marquee>
      </div>
    </>
  );
};

export default MarqueeSection;
