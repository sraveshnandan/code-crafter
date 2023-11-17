import React from "react";
import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <section className="md:px-20">
        <NavBar />
        <section className="py-12"> 
          <Outlet />
        </section>
        <Footer />
      </section>
    </>
  );
};

export default RootLayout;
