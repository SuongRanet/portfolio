import React, { useState } from "react";
import Header from "../header/Header.jsx";
import HeroPage from "./HeroPage.jsx";
import Footer from "../footer/Footer.jsx";
import SideBar from "../components/SideBar.jsx";
import { Outlet } from "react-router-dom";
import ClickSpark from '../components/animation/ClickSpark';
import DotField from '../components/animation/DotField';
import useThemeStore from "../store/themeStore";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useThemeStore();
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-dvh">
      {/* Interactive dot background — fixed behind all content */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          gradientFrom={theme === "dark" ? "rgba(74, 222, 128, 0.35)" : "rgba(22, 163, 74, 0.3)"}
          gradientTo={theme === "dark" ? "rgba(148, 163, 184, 0.2)" : "rgba(100, 116, 139, 0.22)"}
          glowColor={theme === "dark" ? "#0b0f17" : "#f8fafd"}
        />
      </div>
      <ClickSpark
        sparkColor={theme === "dark" ? "#ffffff" : "#000000"}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
        {/* HEADER */}
        <div className="sticky top-0 z-50">
          <Header isOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
        </div>

        {/* Main Section */}
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        {/* FOOTER */}
        <div className="w-full text-center mt-16">
          <Footer />
        </div>
        <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </ClickSpark>
    </div>
  );
};

export default MainPage;
