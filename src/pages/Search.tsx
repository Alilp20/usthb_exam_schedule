import Button from "../Components/Button";
import { searchImage } from "../assets";
import { RxArrowTopRight } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center px-6 lg:px-12 gap-10 lg:gap-0">
      <div className="flex flex-col gap-8 animate-fade-in-up lg:items-start items-center text-center lg:text-left">
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
          Welcome to the Computer Science Faculty's Exam Schedule
        </p>
        <p className="text-[#A9B0C8] font-light text-lg sm:text-xl lg:text-2xl">
          Add your exams to your calendar with ease! Just search, click add, and
          export...
        </p>
        <div className="flex items-center justify-between gap-2 relative w-full max-w-[485px] h-[68px] bg-[#3D4254] rounded-full px-4">
          <input
            type="text"
            className="border-none bg-transparent flex-grow rounded-full outline-none text-white font-extralight text-2xl py-4 pl-6 pr-12"
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
        <Button
          to="/search"
          text="font-light uppercase text-white text-sm sm:text-base lg:text-lg"
          px="px-3 sm:px-6"
          edges="rounded-full"
          additionalStyling="flex items-center gap-2 w-fit"
        >
          <RxArrowTopRight size={24} />
          Add To Calender
        </Button>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] animate-fade-in-left">
        <img
          src={searchImage}
          alt="Usthb exam schedule"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Search;
