import React from "react";
import LabelTag from "../label-tag";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "Pawchig",
    image: "/images/photos/pawchig.png",
    description:
      "This time, our class was divided into teams to work on projects for the first time. Our team successfully developed a website with a four-member group, designed to facilitate donations for animals, provide aid to stray animals, and even enable users to adopt them.",
    tags: [
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Nest.js" },
      { name: "Shadcn" },
      { name: "Npm" },
      { name: "MongoDB" },
      { name: "Tailwind" },
    ],
  },
  {
    title: "E-commerce",
    image: "/images/photos/ecommerce.png",
    description:
      "Through this project, we developed an e-commerce website for an online clothing store using JavaScript and MongoDB.",
    tags: [
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Tailwind" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Shadcn" },
    ],
  },
  {
    title: "Blog web",
    image: "/images/photos/blog-web.png",
    description:
      "The main functionality of this project is to fetch data from Dev.to using JavaScript and present engaging blogs to users.",
    tags: [
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Tailwind" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Shadcn" },
    ],
  },
];

const Projects = () => {
  return (
    <div
      id="project"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-24 bg-gray-100 dark:bg-gray-950"
    >
      <LabelTag label="Projects" />
      <p className="mt-4 text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col w-full gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            swap={i % 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
