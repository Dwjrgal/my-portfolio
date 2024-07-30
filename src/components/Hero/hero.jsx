
import { motion } from "framer-motion";
import HeroText from "./hero-text"

const Hero = () => {
  return (
      <section className="flex flex-col-reverse md:flex-row gap-12 items-center min-h:[560px] px-4 md:px-20 dark:bg-gray-950">
        <HeroText />
        <div className="flex items-center pr-[80px]">
          <div className="box h-80 w-[300px] bg-gray-200 relative top-10 left-10 max-sm:hidden"></div>
          <motion.img
            className=" object-cover mt-8 h-96 w-96 shadow-md shadow-cyan-800 absolute max-sm:w-[240px] max-sm:h-[280px]"
            src="https://images.unsplash.com/photo-1718511048847-26559b9b547d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"
            alt=""
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1}}
            transition ={{duration: 0.5 }}
            />
         </div>
      </section>
  );
};

export default Hero;
