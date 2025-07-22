import { exams } from "../assets";
import Button from "../Components/Button";

const Home = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center px-6 lg:px-12 gap-10 lg:gap-0">
      <div className="flex flex-col gap-8 animate-fade-in-up lg:items-start items-center text-center lg:text-left">
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
          Welcome to the Computer Science Faculty's Exam Schedule
        </p>
        <p className="text-[#A9B0C8] font-light text-lg sm:text-xl lg:text-2xl">
          Add your exams to your calendar with ease! Just search, click add, and export...
        </p>
        <Button
          to="/search"
          text="font-light uppercase text-white text-sm sm:text-base lg:text-lg"
          px="px-6 sm:px-10"
          additionalStyling="w-fit"
        >
          GET STARTED
        </Button>
      </div>
      <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[588px] animate-fade-in-left">
        <img
          src={exams}
          alt="Usthb exam schedule"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
