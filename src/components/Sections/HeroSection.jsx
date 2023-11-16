import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/rocket.png";

const HeroSection = () => {
  return (
    <>
      {/* Outer Div Wrapper  */}

      <div className="flex items-center  py-16 px-2 flex-col font-semibold gap-6   md:flex-row    w-full">
        {/* Left Section  */}
        <div className="left pt-8 flex md:w-1/2 items-center justify-center  flex-col">
          <span className="text-6xl my-2 font-semibold">
            New Generation Of <span className="text">Sofware</span> Development.
          </span>
          {/* tagline  */}

          <span className="my-4 text-slate-500 ">
            make your awesome bussiness idea a reality with Soften, High
            Performence Software Solutions that drives your bussiness forward.
          </span>

          {/* CTA button section  */}

          <div className="w-full flex items-center gap-8">
            <Link
              className="px-3 rounded-full py-2 text-white my-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-600 "
              to="/get-started"
            >
              Get Started
            </Link>

            <Link
              className="px-3 rounded-full py-2 text-white my-4 bg-black  hover:shadow-purple-600 hover:shadow-lg"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Section  */}
        <div className="right pt-12 flex items-center  justify-center">
          <img src={bg} className=" hue-rotate-60 " alt="hero-bg" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
