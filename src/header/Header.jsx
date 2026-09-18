import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X , Moon,Sun} from "lucide-react";
import useThemeStore from "../store/themeStore";

const navLinkClass = ({ isActive }) =>
  `tap relative px-3 rounded-lg text-sm tracking-wide transition-transform duration-300 hover:-translate-y-0.5 after:absolute after:inset-x-3 after:bottom-2 after:h-0.5 after:rounded-full after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
    isActive
      ? "text-primary font-bold after:scale-x-100"
      : "text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
  }`;

const Header = ({ isOpen, onMenuToggle }) => {
  const { theme, setTheme } = useThemeStore();
  return (
    <header className="glass !border-x-0 !border-t-0 !shadow-none flex justify-between items-center h-(--header-h) px-4 sm:px-6 lg:px-[10%]">
      {/* Logo */}
      <div className="min-w-0">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-primary truncate">SUONG RANET</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2 lg:gap-6">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="tap rounded-full text-text hover:bg-primary/10 lift"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <ul className="lg:flex items-center justify-end gap-1 font-medium hidden">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/skill" className={navLinkClass}>
            SKILL
          </NavLink>

          <NavLink to="/project" className={navLinkClass}>
            PROJECT
          </NavLink>

          <NavLink to="/education" className={navLinkClass}>
            EDUCATION
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            CONTACT ME
          </NavLink>
        </ul>
        <button
          onClick={onMenuToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="tap rounded-full text-text hover:bg-primary/10 lg:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
