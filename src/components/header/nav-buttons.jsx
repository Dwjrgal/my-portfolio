import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex border-l border-gray-400 gap-5 pl-5 items-center">
      <MdOutlineLightMode />
      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
