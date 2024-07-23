import { FiGithub } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandFigma } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section className="flex justify-between px-[90px] pt-[140px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold">Hi, I’m Tom 👋 </h1>
          <p className="font-thin text-black-600 text-xl">
            I specialize in full stack development, particularly with React.js
            and Node.js. <br /> My main goal is to create exceptional digital
            experiences that are fast, visually <br />
            appealing, and accessible to everyone. With over 7 years of
            experience in web <br /> development, I continue to find joy in
            crafting innovative solutions and designs.
          </p>
          <div>
            <ul className="font-thin  text-black-600 text-xl pt-[50px]">
              <li className="flex gap-5">
                {" "}
                <CiLocationOn className="text-3xl" />
                Ulaanbaatar, Mongolia
              </li>
              <li className="flex gap-5">
                <GoDotFill className="text-emerald-600 text-2xl" />
                Available for new projects
              </li>
            </ul>
          </div>
          <div className="icons flex gap-6 text-3xl text-gray-600 pt-[50px] ">
            <FiGithub />
            <TfiTwitter />
            <TbBrandFigma />
          </div>
        </div>
        <div className="flex items-center pr-[80px]">
          <div className="box h-80 w-[300px] bg-gray-200 relative top-10 left-10"></div>
          <img
            className="h-80 w-80 shadow-md shadow-cyan-800 absolute"
            src="https://images.unsplash.com/photo-1718511048847-26559b9b547d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
