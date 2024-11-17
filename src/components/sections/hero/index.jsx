import { motion } from "framer-motion";
import HeroText from "./hero-text";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-12 items-center min-h-[560px] px-4 md:px-20 dark:bg-gray-950">
      <HeroText />
      <div className="flex bg-gray-200 h-[320px] w-[280px] relative">
        <motion.img
          src="/images/photos/profile.jpg"
          alt="Tom's photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="object-cover w-[280px] h-[320px] absolute bottom-8 right-8"
        />
      </div>
    </div>
  );
};

export default Hero;
