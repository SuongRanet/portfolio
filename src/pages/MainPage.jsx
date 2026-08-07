import React, { useState } from "react";
import Header from "../header/Header.jsx";
import HeroPage from "./HeroPage.jsx";
import Footer from "../footer/Footer.jsx";
import SideBar from "../componets/SideBar.jsx";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <div className="sticky top-0 z-50">
        <Header isOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
      </div>

      {/* Main Section */}
      <div className="lg:w-[80%] m-auto px-4 md:px-0">
        <Outlet />
      </div>

      {/* FOOTER */}
      <div className="bottom-0 left-0 w-full bg-red-200 text-center ">
        <Footer />
      </div>
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default MainPage;
