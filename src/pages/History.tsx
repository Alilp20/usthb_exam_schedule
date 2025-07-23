import { BiSearch } from "react-icons/bi";
import { searchImage } from "../assets";
import Button from "../Components/Button";

const History = () => {
  const handleClick = () => {
    console.log("clicked to search for previous exams");
  };
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center px-6 lg:px-12 gap-10 lg:gap-0 mt-5 md:mt-0">
      <div className="flex flex-col gap-8 animate-fade-in-up lg:items-start items-center text-center lg:text-left">
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-6xl leading-snug">
          Search Previous Exams
        </p>
        <p className="text-[#A9B0C8] font-light text-xs sm:text-sm lg:text-md ml-2">
          Find your exam by entering the module code (e.g. ENDO). Feel free to
          search more broadly using the relevant code for your course if needed!
        </p>
        <p className="text-[#A9B0C8] font-light text-xs sm:text-sm lg:text-md ml-2">
          Additionally, you have the option to search for more than one module
          simultaneously. Just separate your search queries with a comma, for
          example: ANAD, AMP.
        </p>
        <div className="flex items-center justify-between gap-2 relative w-full max-w-[485px] h-[68px] bg-[#3D4254] rounded-full px-4">
          <input
            type="text"
            className="border-none bg-transparent flex-grow rounded-full outline-none text-white font-extralight text-2xl py-4 px-4"
            placeholder="Search..."
            aria-label="Search"
          />
          <Button
            buttonAction={handleClick}
            edges="rounded-full"
            px="px-2"
            py="py-2"
            additionalStyling="hover:brightness-125 hover:-translate-y-1 hover:scale-110 active:translate-y-0 shadow-xl transition-transform ease-in-out duration-150 active:duration-0"
          >
            <BiSearch size={28} />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-[150px] sm:max-w-[400px] lg:max-w-[460px] animate-fade-in-left">
        <img
          src={searchImage}
          alt="Usthb exam schedule"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default History;
