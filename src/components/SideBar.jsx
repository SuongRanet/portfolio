import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const linkClass = ({ isActive }) =>
  `flex items-center min-h-11 px-4 rounded-xl transition-transform duration-200 hover:translate-x-1 ${
    isActive ? "text-primary font-bold bg-primary/10" : "text-muted hover:text-text"
  }`;

const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 top-(--header-h) z-30 bg-background/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      >
        <aside
          className={`glass absolute top-0 left-0 z-40 w-72 max-w-[85vw] h-full
  text-primary p-6 !border-y-0 !border-l-0 overflow-y-auto
  transform transition-transform duration-300 will-change-transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={closeSidebar} aria-label="Close sidebar" className="tap rounded-full hover:bg-primary/10">
              <X />
            </button>
          </div>

          <nav>
            <ul className="space-y-1 text-lg">
              <li>
                <NavLink to="/" onClick={closeSidebar} className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/skill" onClick={closeSidebar} className={linkClass}>
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" onClick={closeSidebar} className={linkClass}>
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/education" onClick={closeSidebar} className={linkClass}>
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeSidebar} className={linkClass}>
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
