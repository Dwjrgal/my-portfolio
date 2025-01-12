import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";

const socialLinks = [
  {
    label: "github",
    url: "https://github.com/",
    icon: <FiGithub />,
  },
  {
    label: "twitter",
    url: "https://twitter.com/",
    icon: <FiTwitter />,
  },
  {
    label: "figma",
    url: "https://figma.com/",
    icon: <FiFigma />,
  },
];

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold">
        Hi{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <p className="mt-4 text-sm md:text-base max-w-[600px] text-wrap">
        I am passionate about honing my skills in software engineering by
        applying the technologies I have mastered and continuously learning new
        ones needed in the workplace. I am eager to collaborate with skilled
        teams, embracing challenges and opportunities to grow both personally
        and professionally. With a strong sense of responsibility, I prioritize
        continuous self-improvement and strive to maintain a positive attitude
        and a growth-oriented mindset.
      </p>
      <div className="flex flex-col gap-2 mt-8">
        <div>
          <p className="flex items-center text-sm md:text-base">
            <IoLocationOutline />
            Ulaanbaatar, Mongolia
          </p>
          <p className="mt-1 text-sm md:text-base">
            <span className="flex items-center">
              <span className="w-3 h-3 mr-2 bg-green-500 rounded-full"></span>
              Available for new projects
            </span>
          </p>
        </div>
        <div className="flex flex-wrap mt-4 space-x-4">
          {socialLinks.map((sl) => (
            <a
              href={sl.url}
              aria-label={sl.label}
              className="text-lg md:text-xl"
              key={sl.label}
            >
              {sl.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroText;
