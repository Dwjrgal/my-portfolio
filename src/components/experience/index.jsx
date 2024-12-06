import React from "react";
import ExperienceCard from "./experience-card";
import LabelTag from "../label-tag";

const experiences = [
  {
    title: "Full-stack developer",
    company: "Pet adoption web",
    date: "Oct 2024 - 2024 Nov",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    company: "E-commerce",
    date: "Jul 2016 - Oct 2020",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Blog web",
    date: "Dec 2011 - May 2016",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 bg-gray-100 sm:px-10 md:px-20 dark:bg-gray-900">
      <LabelTag label="Experience" />
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="w-full max-w-4xl mt-12">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            className="mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
