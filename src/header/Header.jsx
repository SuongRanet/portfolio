import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X , Moon,Sun} from "lucide-react";
import useThemeStore from "../store/themeStore";

const navLinkClass = ({ isActive }) =>
  `tap relative px-3 rounded-md font-mono text-xs tracking-[0.15em] transition-transform duration-300 hover:-translate-y-0.5 after:absolute after:inset-x-3 after:bottom-2 after:h-px after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
    isActive
      ? "text-primary after:scale-x-100"
      : "text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
  }`;

const Header = ({ isOpen, onMenuToggle }) => {
  const { theme, setTheme } = useThemeStore();
  return (
    <header className="glass !border-x-0 !border-t-0 !shadow-none flex justify-between items-center h-(--header-h) px-4 sm:px-6 lg:px-[10%]">
      {/* Logo */}
      <div className="min-w-0 flex items-center gap-2">
        <span className="font-mono text-primary/70 select-none">~/</span>
        <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-primary truncate">
          SUONG RANET
        </span>
        <span aria-hidden className="text-primary animate-pulse font-mono">_</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2 lg:gap-4">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="tap rounded-md border border-border text-text hover:border-primary/50 hover:text-primary lift"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <ul className="lg:flex items-center justify-end gap-1 hidden">
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
          className="tap rounded-md border border-border text-text hover:border-primary/50 hover:text-primary lg:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
