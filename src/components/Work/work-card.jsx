import { motion } from "framer-motion";
import LabelTag from "../label-tag";

const WorkCard = ({ title, description, image, tags, swap }) => {
  return (
    <div
      className={`flex ${
        swap ? "flex-row-reverse" : ""
      } mx-16 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800`}
    >
      <div className="flex-1 p-12 bg-gray-700">
        <img className="w-full" src=
"https://images.unsplash.com/photo-1721299417031-de890ff33b26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={title} />
      </div>
      <div className="flex flex-col flex-1 gap-6 p-12">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <LabelTag label={tag.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;