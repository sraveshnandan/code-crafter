import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  // Subscribe Function
  const handleSubscribe = (ev) => {
    ev.preventDefault();

    alert(email);
  };
  return (
    <>
      <div className="flex mt-16  items-center flex-col  md:-mx-20 md:px-12 p-4 bg-gradient-to-br from-purple-200  to-blue-200 justify-center py-12  ">
        {/* Inner box  */}

        <div className="bg-white w-full rounded-lg shadow-lg flex p-12 md:flex-row flex-col ">
          {/* Get in Touch  */}
          <div className=" border-3 mb-4 flex w-full md:w-1/3 md flex-col gap-2">
            <span className="text font-semibold text-lg">GET IN TOUCH</span>
            <span className="text-sm font-semibold">
              Bihar Sharif, Bihar , India{" "}
            </span>

            <Link className="underline cursor-pointer">
              codecrafter@gmail.com
            </Link>
            <span className="cursor-pointer underline">+91 91261 23456</span>

            {/* Follow Us  */}
            <span className="text font-semibold mt-4 mb-2 text-lg">
              FOLLOW US
            </span>
            <div className="flex justify-start  items-center gap-2">
              <Link className="p-2 bg-light rounded-full w-fit hover:shadow-lg">
                📢
              </Link>
              <Link className="p-2 bg-light rounded-full w-fit hover:shadow-lg">
                📢
              </Link>
              <Link className="p-2 bg-light rounded-full w-fit hover:shadow-lg">
                📢
              </Link>
              <Link className="p-2 bg-light rounded-full w-fit hover:shadow-lg">
                📢
              </Link>
            </div>
          </div>

          {/* Information  */}

          <div className="md:w-2/3 h-   w-full flex flex-col mt-8 md:mt-0 gap-4 items-start md:px-8    ">
            <span className="text text-lg font-semibold">INFORMATION</span>

            {/* Links  */}

            <div className=" flex items-center justify-evenly md:gap-40 gap-12  ">
              <ul className="flex flex-col">
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  About Us
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Contact Us
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Support Us
                </Link>
              </ul>
              <ul className="flex flex-col">
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Privecy Policy
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Terms & Condition
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Desclaimer
                </Link>
              </ul>

              <ul className="flex flex-col">
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Our Works
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Team Members
                </Link>
                <Link className=" hover:text-purple-600 mb-2 font-semibold ">
                  Our Story
                </Link>
              </ul>
            </div>

            {/* NewsLetter  */}

            <div className=" w-full md:w-[60%]  flex flex-col gap-4 ">
              <div>
                <span className="text-lg text font-semibold ">
                  SUBSCRIBE OUR NEWSLETTER
                </span>
              </div>
              {/* Email Form  */}
              <form
                onSubmit={handleSubscribe}
                className="w-full flex bg-light  rounded-md px-1 py-1  "
              >
                {" "}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  placeholder="Enter Your Email"
                  className="grow px-4 font-semibold  outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-400 hover:bg-gradient-to-l
                   from-purple-600 via-violet-600 to-blue-600  duration-500 rounded-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright section  */}

        <span className="font-semibold text-[grey]">&copy; Copyright 2023-2023 Designed & Developed By <Link className="underline text-purple-600 font-bold md:mx-2">Code Crafter</Link> | All Rights Reserved. </span>
      </div>
    </>
  );
};

export default Footer;
