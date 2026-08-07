import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ isOpen, onMenuToggle }) => {
  return (
    <header className="flex justify-between items-center p-4 md:px-34 py-8 backdrop-blur-sm border-b-4 border-primary bg-background/50">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-primary">SUONG RANET</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="lg:flex items-center justify-end lg:gap-4 gap-8 text-primary font-medium hidden">
          <Link
            to="/"
            className="cursor-pointer hover:primary-hover transition-transform duration-300 hover:scale-125"
          >
            HOME
          </Link>
          <Link
            to="/skill"
            className="cursor-pointer hover:primary-hover transition-transform duration-300 hover:scale-125"
          >
            SKILL
          </Link>
          <Link
            to="/project"
            className="cursor-pointer hover:primary-hover transition-transform duration-300 hover:scale-125"
          >
            PROJECT
          </Link>
          <Link
            to="/education"
            className="cursor-pointer hover:primary-hover transition-transform duration-300 hover:scale-125"
          >
            EDUCATION
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer hover:primary-hover transition-transform duration-300 hover:scale-125"
          >
            CONTACT ME
          </Link>
        </ul>
        <button onClick={onMenuToggle} className="duration-300 lg:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
