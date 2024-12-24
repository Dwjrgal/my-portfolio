import React from "react";
import ExperienceCard from "./experience-card";
import LabelTag from "../label-tag";

const experiences = [
  {
    title: "Full-stack developer",
    company: "Pet adoption web",
    description: [
      "I developed a full-stack application by creating a blog page with the goal of providing interesting facts about animals to users.",
      "I developed the section for posting articles or posts from the admin side.",
      "Development of the home page.",
      "The page was designed with a responsive layout.",
    ],
  },
  {
    title: "Full-stack",
    company: "E-commerce",
    description: [
      "Users can log in and access the system.",
      "Users can add items to the cart.",
      "Users can add items to the save",
    ],
  },
  {
    title: "Full Stack",
    company: "Blog web",
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
