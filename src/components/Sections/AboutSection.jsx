import React from "react";
import ab from "../../assets/cone.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      {/* Outer Div Wrapper  */}
      <div className="flex my-20 py-12 md:flex-row flex-col  items-center gap-4 ">
        {/* left section  */}
        <div className="left flex items-center justify-center md:w-1/2 mb-8 w-full">
          <img src={ab} className="  object-fit" alt="about-im" />
        </div>
        {/* right section  */}
        <div className="right flex px-4 flex-col md:w-1/2 w-full">
          <span className="font-bold text mb-2">ABOUT US</span>
          <span className="font-bold text-4xl mb-4">
            We're Best in Software Development.
          </span>
          <span className="text-[grey] font-semibold">
            Scale your software operations through a custom engineering team.
            Meet the demand of your company's operations with a high-performing
            nerashore team skilled in the technologies you need.
          </span>

          <Link to="/about" className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-blue-600 w-fit my-6">
            See About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
