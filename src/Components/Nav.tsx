import { NavLinks } from "../Constants";
import { Link } from "react-router-dom";
import { usthbLogo } from "../assets";
import Button from "./Button";
const Nav = () => {
  return (
    <header className="flex w-full px-2 pt-3 items-center justify-between z-10">
      <Link to="/">
        <img
          src={usthbLogo}
          alt="Logo of USTHB university"
          className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px] object-contain cursor-pointer"
        />
      </Link>
      <nav className="hidden md:flex md:static px-5 justify-between items-center w-[70%]">
        <ul className="hidden md:flex md:flex-1 justify-between items-center w-full gap-6">
          {NavLinks.map((navlink) => (
            <li key={navlink.id}>
              <Link
                to={navlink.href}
                className="text-[#A9B0C8] hover:text-[#C6CFEC] transition-all ease-in-out duration-300"
              >
                <navlink.icon
                  height={30}
                  width={30}
                  className="md:w-10 md:h-10"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
