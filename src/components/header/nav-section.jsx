import { useTheme } from "next-themes";
import Menu from "./menu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const menuList = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Experience", link: "#experience" },
  { label: "Project", link: "#project" },
  { label: "Contact", link: "#contact" },
];

const NavSection = () => {
  const { theme, setTheme } = useTheme();
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:3000/#about.pdf"; // Path to your CV
    link.download = "my-portfolio.pdf"; // Optional: Specify a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className="items-center justify-between hidden space-x-4 md:flex">
        <Menu menuList={menuList} />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          {theme === "light" ? (
            <MdOutlineLightMode className="hover:cursor-pointer" />
          ) : (
            <MdOutlineDarkMode className="hover:cursor-pointer" />
          )}
        </button>
        <button
          onClick={downloadCV}
          className="px-4 py-2 text-center text-white bg-gray-900 rounded-md dark:bg-white dark:text-gray-900"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default NavSection;
