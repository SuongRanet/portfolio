import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-20 left-0 z-30 bg-background/10 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      >
        <aside
          className={`fixed top-20 left-0 z-40 w-72 h-[calc(100vh-4rem)] 
  bg-background/95 text-primary p-6 shadow-xl 
  transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={closeSidebar} aria-label="Close sidebar">
              <X />
            </button>
          </div>

          <nav>
            <ul className="space-y-4 text-lg">
              <li>
                <NavLink
                  to="/"
                  onClick={closeSidebar}
                  className={({isActive})=>`block hover:text-primary-hover
                  ${isActive ? "text-primary font-bold" : "text-gray-500"}
                  `}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  onClick={closeSidebar}
                  className={({isActive})=>`block hover:text-primary-hover
                  ${isActive ? "text-primary font-bold" : "text-gray-500"}
                  `}
                >
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  onClick={closeSidebar}
                  className={({isActive})=>`block hover:text-primary-hover
                  ${isActive ? "text-primary font-bold" : "text-gray-500"}
                  `}
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  onClick={closeSidebar}
                 className={({isActive})=>`block hover:text-primary-hover
                  ${isActive ? "text-primary font-bold" : "text-gray-500"}
                  `}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeSidebar}
                  className={({isActive})=>`block hover:text-primary-hover
                  ${isActive ? "text-primary font-bold" : "text-gray-500"}
                  `}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
