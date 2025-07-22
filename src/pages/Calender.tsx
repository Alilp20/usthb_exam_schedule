import { calender } from "../assets";
import Button from "../Components/Button";
import { PiExport } from "react-icons/pi";

const Calender = () => {
  const handleClick = () => {
    console.log("clicked to export calender");
  };
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center px-6 lg:px-12 gap-10 lg:gap-0">
      <div className="flex flex-col gap-8 animate-fade-in-up lg:items-start items-center text-center lg:text-left">
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-6xl leading-snug">
          Calender
        </p>
        <p className="text-[#A9B0C8] font-light text-xs sm:text-sm lg:text-md ml-2">
          No exams in your schedule.
        </p>
        <Button
          to="/search"
          text="font-light uppercase text-white text-sm sm:text-base lg:text-lg"
          px="px-3 sm:px-6"
          edges="rounded-full"
          additionalStyling="flex items-center gap-2 w-fit"
          buttonAction={handleClick}
        >
          <PiExport size={28} />
          Export Calender
        </Button>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] animate-fade-in-left">
        <img
          src={calender}
          alt="Usthb exam schedule"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Calender;
