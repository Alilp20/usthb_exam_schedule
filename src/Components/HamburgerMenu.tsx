interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: Props) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-between items-center w-8 h-4"
    >
      <span
        className={`bg-[#A9B0C8] block transition-all duration-300 ease-out 
                    h-[2px] w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`bg-[#A9B0C8] block transition-all duration-300 ease-out 
                    h-[2px] w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`bg-[#A9B0C8] block transition-all duration-300 ease-out 
                    h-[2px] w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
