import { motion } from "framer-motion";

const ExperienceCard = ({ title, company, date, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-6 mb-6 bg-white rounded-lg shadow-lg md:flex-row dark:bg-gray-800"
    >
      <h1 className="flex-1 text-sm font-extrabold text-green-500 text-wrap max-w-[90px] mr-20">
        {company}
      </h1>
      <div className="flex-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <ul className="pl-5 mt-4 text-gray-700 list-disc dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 text-right text-gray-600 dark:text-gray-400">
        {date}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
