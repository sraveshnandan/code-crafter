import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* outer navBar Container  */}
      <nav className=" bg-glass-bg fixed -right-0  z-50 rounded-md  backdrop-blur-lg   mb-4 px-4  md:px-20 w-full py-2 flex items-center justify-between">
        {/* logo section  */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className=" cursor-pointer hover:text-primary font-[550] md:text-xl "
          >
            Code Crafter
          </Link>
        </div>

        {/* Menu Section  */}

        <div className="  rounded-full">
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

        <div className="flex items-center">
          <Link
            to="/quote-now"
            className=" px-5 py-2 hover:shadow-lg hover:shadow-violet-500 font-semibold text-light bg-[#000] rounded-full"
          >
            Qute Now
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
