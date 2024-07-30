import React from "react";
import { IoMdClose } from "react-icons/io";

const MobileMenu = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between w-[320px] h-[68px] p-4">
        <h2>DVJ</h2>
        <IoMdClose />
      </div>
      <ul className="text-black">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
