import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode
} from "react-icons/md";
import { useTheme } from "next-themes";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex border-l border-gray-400 gap-5 pl-5 items-center">
      {theme ? (
        <MdOutlineLightMode  className="hover:cursor-pointer" onClick={() =>{
          setTheme("dark");
        }}
        />
      ) :(
        <MdOutlineDarkMode className="hover:cursor-pointer" onClick={() =>{
          setTheme("light");
        }}
        />
      )}


      <button className="py-[6px] px-4 bg-black text-white rounded-xl dark:bg-white dark:text-black ml-5"  onclick={() => {

      }}
      >

        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
