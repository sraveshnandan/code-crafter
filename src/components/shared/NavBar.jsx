import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* outer navBar Container  */}
      <nav className="  bg-glass-bg fixed -right-0  z-50 rounded-md  backdrop-blur-lg   mb-4 px-4  md:px-20 w-full md:py-2 py-5 flex items-center shadow-lg justify-between">
        {/* logo section  */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className=" cursor-pointer hover:text-primary font-[550] md:text-2xl text-xl "
          >
            Code Crafter
          </Link>
        </div>

        {/* Menu Section  */}

        {/* Desktop menu  */}
        <div className=" hidden md:block  rounded-full">
          <ul className="flex items-center px-8">
            <Link
              to="/"
              className="hover:bg-white duration-500 hover:shadow-md py-1 px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:bg-white duration-500 hover:shadow-md py-1 px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:bg-white duration-500 hover:shadow-md py-1 px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
            >
              Contact
            </Link>

            <Link
              to="/support"
              className="hover:bg-white duration-500 hover:shadow-md py-1 px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
            >
              Support
            </Link>
          </ul>
        </div>

        {/* CTA button section  */}

        <div className=" hidden md:flex items-center">
          <Link
            to="/quote-now"
            className=" md:px-5 px-3 md:py-2 py-1 hover:shadow-lg hover:shadow-violet-500 font-semibold text-light bg-[#000] rounded-full"
          >
            Qute Now
          </Link>
        </div>

        {/* Mobile Menu  */}

        <div className="md:hidden block">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className=" md:hidden block font-[850] hover:text-purple-600  text-xl"
          >
            {open === true ? "⪥" : "⫗"}
          </button>
        </div>
        {open === true ? (
          <div className=" md:hidden  absolute top-12 w-[75%]  bg-glass-bg-1 shadow-xl  h-screen backdrop:blur-3xl rounded-lg  flex  right-0 ">
            <ul className=" flex py-8 bg-transparent w-full flex-col items-center px-8">
              <Link
                to="/"
                className="hover:bg-white w-full text-center py-3 duration-500 hover:shadow-md  text-lg px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:bg-white w-full text-center py-3 duration-500 hover:shadow-md  text-lg px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:bg-white w-full text-center py-3 duration-500 hover:shadow-md  text-lg px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
              >
                Contact
              </Link>

              <Link
                to="/support"
                className="hover:bg-white w-full text-center py-3 duration-500 hover:shadow-md  text-lg px-3 rounded-full font-semibold hover:text-primary cursor-pointer"
              >
                Support
              </Link>

              {/* Quote now button  */}
              <div className="w-full mt-4  rounded-lg    flex items-end py-8 justify-center">
                <Link
                  to="/quote-now"
                  className=" px-5 py-2  w-[60%] text-center hover:shadow-lg hover:shadow-violet-500 font-semibold text-light bg-[#000] rounded-full"
                >
                  Qute Now
                </Link>
              </div>

              {/* Copyright text  */}
              <div className="grow flex items-end py-4 text-[grey]">
                <span>
                  Designed & Developed By <b className="hover:text-purple-600 cursor-pointer">Sravesh Nandan</b>
                </span>
              </div>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
