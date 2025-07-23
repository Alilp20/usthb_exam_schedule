import { useState } from "react";
import { NavLinks } from "../Constants";
import { Link } from "react-router-dom";
import { usthbLogo } from "../assets";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu"; // ✅ import your component

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex w-full px-2 pt-3 items-center justify-between z-10 relative">
      {/* Logo */}
      <Link to="/">
        <img
          src={usthbLogo}
          alt="Logo of USTHB university"
          className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px] object-contain cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex px-5 justify-between items-center w-[70%]">
        <ul className="flex flex-1 justify-between items-center w-full gap-6">
          {NavLinks.map((navlink) => (
            <li key={navlink.id}>
              <Link
                to={navlink.href}
                className="text-[#A9B0C8] hover:text-[#C6CFEC] transition-all ease-in-out duration-300"
              >
                <navlink.icon className="md:w-8 md:h-8" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Custom Hamburger Menu for Mobile */}
      <div className="md:hidden z-50">
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#10121B]/20 backdrop-blur-md px-6 py-4 pt-20 flex flex-col items-center gap-4 md:hidden z-20">
          {NavLinks.map((navlink) => (
            <Link
              key={navlink.id}
              to={navlink.href}
              className="text-[#A9B0C8] hover:text-[#C6CFEC] flex items-center gap-3 text-[2rem]"
              onClick={toggleMenu}
            >
              <span>{navlink.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Visit Button (desktop only) */}
      <Button
        href="https://finfo.usthb.dz/index.php/examens/"
        additionalStyling="md:block hidden"
      >
        visit exams
      </Button>
    </header>
  );
};

export default Nav;
