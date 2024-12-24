import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row mt-12 max-w-[1700px] mx-auto"
    >
      <div className="flex-1 mb-6 md:mb-0 w-[600px] rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1734613876170-079f67aa0d15?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Your Photo"
          className="w-60 h-60 mx-auto md:ml-20 rounded-xl object-center"
        />
      </div>
      <div className="flex-1 mt-6 text-center md:ml-8 md:mt-0 md:text-left max-w-[1300px] max-h-[1500px]">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Curious about me? Here you have it:
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I, N. Davaajargal, joined the Pinecone Academy's Leap Program in May
          2024 to pursue a career as a software engineer. Currently, I am
          actively engaged in the academy's internship training courses,
          striving to enhance my skills and knowledge in the field.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I am committed to continuous self-improvement and possess a
          responsible and determined character. In my free time, I engage in
          creative activities such as drawing, hiking, knitting, and listening
          to podcasts, all aimed at broadening my perspective and fostering
          creativity. Additionally, I strive to approach and resolve any
          challenges with responsibility and mindfulness.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutContent;
