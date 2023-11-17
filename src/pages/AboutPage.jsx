import React from "react";
import AboutSection from "../components/Sections/AboutSection";
import ab from "../assets/wimg.jpg";
import ProfileCard from "../components/shared/ProfileCard";
import ProcessCard from "../components/shared/ProcessCard";

const AboutPage = () => {
  return (
    <>
      {/* wrapper  */}
      <div className="flex p-4 mt-20 flex-col-reverse gap-4 md:flex-row">
        {/* left section  */}
        <div className="flex custom-radius bg-gradient-to-tr from-purple-200 via-purple-200 to-blue-200 items-center py-12 flex-col gap-4 md:w-1/2 w-full">
          <span className="text-4xl font-semibold text ">ABOUT US</span>

          <span className=" max-w-[70%] mx-auto text-justify text-lg font-semibold py-4">
            {" "}
            At Code Crafter, we are passionate about coding and its potential to
            transform ideas into reality. Our mission is to provide high-quality
            software development services that exceed expectations.
            <div className="mt-4">
              {" "}
              With years of experience and a commitment to excellence, we take
              pride in our ability to deliver cutting-edge solutions.
            </div>
          </span>
        </div>

        {/* Right Section  */}

        <div className=" hover:drop-shadow-lg duration-500 cursor-pointer md:w-1/2 w-full overflow-hidden bg-[#fff] rotate-180 custom-radius flex items-center p-4 justify-center">
          <img
            src={ab}
            className="w-[80%] hover:hue-rotate-90 rotate-180 h-[80%]"
            alt=""
          />
        </div>
      </div>

      {/* Second Wrapper  */}

      <div className="w-full mt-12 -skew-y-1 p-4 rounded-lg  bg-gradient-to-r from-purple-200 to-violet-200 flex flex-col">
        <div className="w-full flex flex-col ">
          <span className="text mb-2 font-bold">OUR DEVELOPMENT PROCESS</span>
          <span className="text-2xl max-w-[50%] line-clamp-2 font-semibold ">
          Our development process - from initial ideation to deployment. We follow an agile methodology, ensuring transparency, flexibility, and client involvement at every stage of the project.
          </span>
          

          <div className="w-full justify-evenly flex items-center my-12 flex-col drop-shadow-md md:flex-row">
            <ProcessCard name={'Product Design'}/>
            <hr className="border-0 md:h-1 h-12 rounded-full md:w-36 w-1 bg-red-600" />
            <ProcessCard name={'Mockup & Sketch'}/>
            <hr className="border-0 md:h-1 h-12 rounded-full md:w-36 w-1 bg-red-600" />
            <ProcessCard name={'Prototyping'}/>
            <hr className="border-0 md:h-1 h-12 rounded-full md:w-36 w-1 bg-red-600" />
            <ProcessCard name={'Development'}/>          

          </div>
        </div>
      </div>

      {/* Third Wrapper  */}

      <div className=" mt-12">
        {/* Header  */}
        <div className="text-center flex flex-col gap-0">
          <span className=" text-lg my-2 font-bold text">OUR TEAM MEMBERS</span>
          <span className="text-[30px] font-semibold ">
            Meet Our <i className="text underline">Professional Team Members</i>
            <br />
            Perfectly Fit For Your Project.
          </span>
        </div>

        {/* services Card box  */}
        <div className="flex  items-center flex-wrap  md:justify-between justify-center my-12 md:w-[80%] mx-auto">
          <ProfileCard
            name={"Sravesh Nandan"}
            post={"CEO"}
            exp={"1"}
            details={
              "I starts this small startup for helping those small and local bussiness who are struggling a lot issues to put their bussiness Online."
            }
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
