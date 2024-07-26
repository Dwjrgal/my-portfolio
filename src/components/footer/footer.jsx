import { FiGithub } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="flex  flex-col items-center mt-28 gap-9">
        <h4 className=" bg-gray-300 w-40 h-[28px] rounded-lg text-center">
          Get in touch
        </h4>
        <p className="text-xl text-center font-thin">
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
        {/* <textarea
          className=" border border-black
        "
          placeholder="@gmail"
          name="gmail"
          id="gmail"
        ></textarea> */}
      </section>
      <div className="flex flex-col items-center gap-8 mt-16 mb-20">
        <img className="w-90" src="./images/gmail.png" alt="" />
        <p className="font-thin">You may also find me on these platforms!</p>
        <div className="flex gap-6 mb-8">
          <FiGithub className="w-[20px] h-[20px]" />
          <LuTwitter className="w-[20px] h-[20px]" />
          <FaFigma className="w-[20px] h-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Footer;
