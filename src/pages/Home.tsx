import { exams } from "../assets";
import Button from "../Components/Button";
const Home = () => {
  return (
    <section className="w-full flex justify-around items-center px-12">
      <div className="flex flex-col gap-12 animate-fade-in-up">
        <p className="text-white font-bold text-3xl lg:text-4xl leading-snug">
          Welcome to the Computer Science Faculty's Exam Schedule
        </p>
        <p className="text-[#A9B0C8] font-light text-2xl">
          Add your exams to your calendar with ease! Just search, click add, and
          export...
        </p>
        <Button
          href="#"
          text="font-light uppercase text-white text-lg"
          px="px-10"
          additionalStyling="w-fit"
        >
          GET STARTED
        </Button>
      </div>
      <div className="w-full max-w-[588px] animate-fade-in-left">
        <img
          src={exams}
          alt="Usthb exam schedule"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
