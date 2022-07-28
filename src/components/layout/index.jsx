import { Footer, Navbar } from "../moleculs";
import { Outlet } from "react-router-dom";
import "./style.css";
import React from "react";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
