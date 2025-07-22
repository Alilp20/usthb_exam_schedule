import Button from "../Components/Button";
import { myLinks } from "../Constants";

const Contatc = () => {
  const handleClick = () => {
    console.log("clicked to send an email");
  };
  return (
    <section className="w-full flex flex-col lg:flex-row justify-around items-center px-6 lg:px-12 gap-10 lg:gap-0">
      <div className="flex flex-col gap-8 animate-fade-in-up lg:items-start items-center text-center lg:text-left mr-36 mb-10">
        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-6xl leading-snug">
          Contact Me
        </p>
        <p className="text-[#A9B0C8] font-light text-xs sm:text-sm lg:text-md ml-2">
          Thank you for your interest in my project — I'd be happy to connect
          with you.
        </p>
        <p className="text-[#A9B0C8] font-light text-xs sm:text-sm lg:text-md ml-2">
          I appreciate open communication and welcome questions, feedback, or
          collaboration opportunities. If you notice any errors or would simply
          like to connect, feel free to reach out through the contact form.
        </p>
        <div className="flex w-[60%] justify-between ml-4">
          {myLinks.map((link) => (
            <a key={link.id} href={link.href} className="">
              <link.icon size={70} className="text-[#00A5FF]" />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] animate-fade-in-left flex flex-col items-end gap-4">
        <form action="" className="flex flex-col space-y-4 w-full max-w-md">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#434448] text-[#747474] placeholder-gray-400 px-4 py-3 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#434448] text-[#747474] placeholder-gray-400 px-4 py-3 focus:outline-none transition"
            />
          </div>

          <input
            type="text"
            placeholder="Email"
            className="bg-[#434448] text-[#747474] placeholder-gray-400 px-4 py-3 focus:outline-none transition"
          />

          <input
            type="text"
            placeholder="Subject"
            className="bg-[#434448] text-[#747474] placeholder-gray-400 px-4 py-3 focus:outline-none transition"
          />

          <textarea
            placeholder="Your message"
            className="bg-[#434448] text-[#747474] placeholder-gray-400 px-4 py-3 focus:outline-none transition resize-none"
            rows={5}
          />
        </form>
        <Button
          buttonAction={handleClick}
          bg="bg-transparent border-1 border-[#00A5FF]"
          text="text-[#00A5FF] text-md font-mediumÏ uppercase"
          px="px-10"
          additionalStyling="hover:scale-110 hover:brightness-125 transition-transform ease-in-out duration-300"
        >
          Send
        </Button>
      </div>
    </section>
  );
};

export default Contatc;
