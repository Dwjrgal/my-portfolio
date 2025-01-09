import { motion } from "framer-motion";
import HeroText from "./hero-text";

const Hero = () => {
  return (
    <div
      className="flex mx-auto flex-col-reverse md:flex-row gap-6 md:gap-12 
      items-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16
      max-w-7xl w-full min-h-[calc(100vh-4rem)]
      dark:bg-gray-950"
    >
      <HeroText />
      <div
        className="flex bg-gray-200 
        h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] 
        w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] 
        relative mt-8 md:mt-0"
      >
        <motion.img
          src="/images/photos/profile.jpg"
          alt="Tom's photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute object-cover w-full h-full 
            bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 
            right-3 sm:right-4 md:right-6 lg:right-8
            shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
