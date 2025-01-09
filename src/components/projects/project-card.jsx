import { motion } from "framer-motion";
import LabelTag from "../label-tag";

const ProjectCard = ({ title, description, image, tags, swap }) => {
  return (
    <div
      className={`flex flex-col ${
        swap ? "md:flex-row-reverse" : "md:flex-row"
      } bg-white shadow-lg rounded-xl dark:bg-gray-800 overflow-hidden max-w-6xl mx-auto w-full`}
    >
      <div className="flex-1 min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="flex flex-col flex-1 gap-4 sm:gap-6 p-6 sm:p-8 md:p-12">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <LabelTag key={index} label={tag.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
