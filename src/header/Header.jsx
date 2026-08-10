import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X , Moon,Sun} from "lucide-react";
import useThemeStore from "../store/themeStore";

const Header = ({ isOpen, onMenuToggle }) => {
  const { theme, setTheme } = useThemeStore();
  return (
    <header className="flex justify-between items-center p-4 md:px-34 py-8 backdrop-blur-sm border-b-4 border-primary bg-background/50">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-primary">SUONG RANET</h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-8">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon/> : <Sun/>}</button>
        <ul className="lg:flex items-center justify-end lg:gap-4 gap-8 text-primary font-medium hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:scale-125 ${
                isActive ? "text-primary font-bold" : "text-gray-500"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/skill"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:scale-125 ${
                isActive ? "text-primary font-bold" : "text-gray-500"
              }`
            }
          >
            SKILL
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:scale-125 ${
                isActive ? "text-primary font-bold" : "text-gray-500"
              }`
            }
          >
            PROJECT
          </NavLink>

          <NavLink
            to="/education"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:scale-125 ${
                isActive ? "text-primary font-bold" : "text-gray-500"
              }`
            }
          >
            EDUCATION
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:scale-125 ${
                isActive ? "text-primary font-bold" : "text-gray-500"
              }`
            }
          >
            CONTACT ME
          </NavLink>
        </ul>
        <button onClick={onMenuToggle} className="duration-300 lg:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
