import Button from "../Components/Button";
import { myLinks } from "../Constants";

const Contact = () => {
  const handleClick = () => {
    console.log("clicked to send an email");
  };

  return (
    <section className="w-full flex flex-col lg:flex-row flex-wrap justify-around items-center px-4 sm:px-6 lg:px-12 gap-10">
      {/* Text Section */}
      <div className="flex flex-col gap-6 animate-fade-in-up items-center lg:items-start text-center lg:text-left max-w-xl">
        <p className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-snug">
          Contact Me
        </p>
        <p className="text-[#A9B0C8] font-light text-sm sm:text-base">
          Thank you for your interest in my project — I'd be happy to connect
          with you.
        </p>
        <p className="text-[#A9B0C8] font-light text-sm sm:text-base">
          I appreciate open communication and welcome questions, feedback, or
          collaboration opportunities. If you notice any errors or would simply
          like to connect, feel free to reach out through the contact form.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
          {myLinks.map((link) => (
            <a key={link.id} href={link.href}>
              <link.icon size={50} className="text-[#00A5FF]" />
            </a>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md animate-fade-in-left flex flex-col items-center gap-6">
        <form className="flex flex-col gap-4 w-full">
          {/* Name Inputs */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 bg-[#434448] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-[#434448] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="bg-[#434448] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none transition"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#434448] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none transition"
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            className="bg-[#434448] text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none transition resize-none"
            rows={5}
          />
        </form>

        {/* Send Button */}
        <Button
          buttonAction={handleClick}
          bg="bg-transparent border border-[#00A5FF]"
          text="text-[#00A5FF] text-md font-medium uppercase"
          px="px-10"
          additionalStyling="hover:scale-110 hover:brightness-125 transition-transform ease-in-out duration-300"
        >
          Send
        </Button>
      </div>
    </section>
  );
};

export default Contact;
