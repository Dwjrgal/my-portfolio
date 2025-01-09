import React from "react";
import LabelTag from "../label-tag";
import AboutContent from "./about-content";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center 
      px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 
      w-full
      bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center">
          <LabelTag label="About" />
        </div>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
