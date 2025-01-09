import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 sm:mt-12"
    >
      <div className="flex justify-center lg:justify-start lg:w-1/3">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72">
          <img
            src="/images/photos/moon.jpeg"
            alt="Your Photo"
            className="rounded-xl object-cover w-full h-full shadow-lg"
          />
        </div>
      </div>
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Curious about me? Here you have it:
        </h1>
        <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          <p>
            I, N. Davaajargal, joined the Pinecone Academy's Leap Program in May
            2024 to pursue a career as a software engineer. Currently, I am
            actively engaged in the academy's internship training courses,
            striving to enhance my skills and knowledge in the field.
          </p>
          <p>
            I am committed to continuous self-improvement and possess a
            responsible and determined character. In my free time, I engage in
            creative activities such as drawing, hiking, knitting, and listening
            to podcasts, all aimed at broadening my perspective and fostering
            creativity. Additionally, I strive to approach and resolve any
            challenges with responsibility and mindfulness.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
