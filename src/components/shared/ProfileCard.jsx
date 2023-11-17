import React from "react";
import p from "../../assets/ring.png";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, post, exp, details, imgUrl }) => {
  return (
    <>
      {/* Wrapper  */}
      <div className="md:w-1/2 rounded-md w-[70%] bg-white flex-col md:flex-row flex gap-2 p-2">
        {/* left section  */}
        <div className=" bg-light hover:drop-shadow-lg cursor-pointer   rounded-md flex items-center justify-center p-2 w-1/4 md:w-1/2 ">
          <img src={p} className=" object-cover h-full w-full" alt="" />
        </div>

        {/* Right Section  */}
        <div className="md:w-1/2 items-start pl-1 flex w-full flex-col">
          <span className="text-2xl hover:text-purple-600 cursor-pointer  font-semibold">
            {name}
          </span>
          <span className="text-[12px] text-[grey] font-bold flex gap-2">
            {post} <span>Exp:&nbsp;{exp} years</span>
          </span>

          <span className="font-semibold line-clamp-5 text-[12px]">
            {details}
          </span>
          <span className="text font-semibold my-2">Social Media Links : </span>
          <div className="bg-light rounded-md p-2 w-full h-fit flex items-end justify-around">
           <Link to="/">💼</Link>
           <Link to="/">💼</Link>
           <Link to="/">💼</Link>
           <Link to="/">💼</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
