import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
export const Layout = () => {
  return (
    <>
      <header>
        <Header />
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
