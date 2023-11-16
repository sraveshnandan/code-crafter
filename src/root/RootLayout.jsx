import React from "react";
import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <section className="md:px-20">
        <NavBar />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default RootLayout;
