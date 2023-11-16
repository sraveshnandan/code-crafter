import React from "react";
import wimg from "../../assets/wimg.jpg";

const WhatWeDoSection = () => {
  return (
    <>
      {/* Wrapper  */}

      <div className="w-full px-4 mt-24  flex gap-8 md:flex-row flex-col   ">
        {/* left section  */}
        <div className="md:w-1/2 w-full ">
          {/* Section heading  */}

          <div className="w-full flex flex-col ">
            <span className="text font-bold">WHAT WE DO</span>
            <span className="text-[40px] mb-4  max-w-[80%] font-semibold ">
              Online Reporting to get best of Business.
            </span>

            {/* Subheading  */}
            <span className="text-[grey] max-w-[80%] font-semibold text-sm">
              Scale your software operation through a custom engineering team.
              Meet the demand of your company's operations with a
              high-performing nearshore team skilled in the technologies you
              need.
            </span>

            {/* List Items  */}
            <ul className=" mt-8 flex flex-col gap-2">
              <li className="flex gap-3 font-semibold hover:text-purple-600 cursor-pointer">
                <span className="text-purple-600">◉</span>Web Development
                Technologies.
              </li>

              <li className="flex gap-3 font-semibold hover:text-purple-600 cursor-pointer">
                <span className="text-purple-600">◉</span>2 years of experience.
              </li>

              <li className="flex gap-3 font-semibold hover:text-purple-600 cursor-pointer">
                <span className="text-purple-600">◉</span>Top Skilled Developers
                Team.
              </li>

              <li className="flex gap-3 font-semibold hover:text-purple-600 cursor-pointer">
                <span className="text-purple-600">◉</span>Best Features that
                keeps us Ahed.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section  */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img
            src={wimg}
            className="rounded-md cursor-pointer hover:shadow-lg hover:shadow-purple-200 hover:hue-rotate-30 transition-all duration-500  object-contain"
            alt="w-w-d-img"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDoSection;
