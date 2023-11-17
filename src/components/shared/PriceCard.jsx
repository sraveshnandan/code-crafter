import React from "react";
import pimg from "../../assets/ring.png";
import { Link } from "react-router-dom";

const PriceCard = ({ price, title }) => {
  return (
    <>
      <div className="bg-white -skew-y-[2deg] p-3 w-[80%] md:w-1/4 rounded-md flex flex-col  shadow-lg gap-8">
        {/* header  */}

        <div className="flex  justify-around ">
          <div className="flex flex-col ">
            <span className="text-blue-600 font-semibold mb-1 text-3xl">
              {title}
            </span>
            <span className=" flex gap-2 font-bold text-xl">
              {" "}
              ₹ <span className="text-3xl">{price}</span>
            </span>
          </div>
          <div className="flex items-center justify-center">
            <img src={pimg} className="w-10 h-10" alt="p-img" />
          </div>
        </div>
        <hr className="border-0 h-[2px] bg-purple-300" />

        {/* Body  */}
        <div className="w-full">
          <ul className=" text-sm    flex flex-col gap-2">
            <li className="flex text-[grey] gap-3 font-semibold hover:text-purple-600 cursor-pointer">
              <span className="text-purple-600">◊</span>Web Development
              Technologies.
            </li>

            <li className="flex text-[grey] gap-3 font-semibold hover:text-purple-600 cursor-pointer">
              <span className="text-purple-600">◊</span>2 years of experience.
            </li>

            <li className="flex text-[grey] gap-3 font-semibold hover:text-purple-600 cursor-pointer">
              <span className="text-purple-600">◊</span>Top Skilled Developers
              Team.
            </li>

            <li className="flex text-[grey] gap-3 font-semibold hover:text-purple-600 cursor-pointer">
              <span className="text-purple-600">◊</span>Best Features that keeps
              us Ahed.
            </li>
          </ul>
        </div>

        {/* CTA button  */}

        <div className="w-full flex items-center gap-8">
          <Link
            className="px-3 rounded-full py-2 text-white my-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-600 "
            to="/quote-now"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
