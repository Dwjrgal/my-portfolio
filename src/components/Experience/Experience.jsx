import { FaUpwork } from "react-icons/fa6";

const Experience = () => {
  return (
    <>
      <section
        className="
      flex flex-col gap-9 items-center bg-slate-200 pb-20"
      >
        <h6 className=" bg-gray-300 w-24 rounded text-center">Experience</h6>
        <p>Here is a quick summary of my most recent experiences:</p>
        <div className="flex flex-col gap-20">
          <div className="w-[896px] h-[320px] bg-gray-50 flex  gap-6 pt-[20px] mb-[20px] rounded-md">
            <img
              className="w-[206px] h-[28px]"
              src="./images/Column.png"
              alt=""
            />
            <ul className="flex flex-col gap-5 list-disc text-md text-gray-600 pt-[20px]">
              <h3 className="text-xl font-bold"> Sr.Frontend Developer</h3>
              <li>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </li>
              <li>
                Ut pretium arcu et massa semper, id fringilla leo <br />
                semper.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </li>
            </ul>
            <p>November 2021-Present</p>
          </div>
          <div className="w-[896px] h-[288px] bg-gray-50 flex  gap-6 pt-[20px] rounded-md">
            <img
              className="w-[206px] h-[28px]"
              src="./images/Column.png"
              alt=""
            />
            <ul className="flex flex-col gap-5 list-disc text-md text-gray-600 ">
              <h3 className="text-xl font-bold">Team lead</h3>
              <li>Lorem ipsum dolor sit amet, elit.</li>
              <li>Ut pretium arcu et massa semper, id semper.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <p>November 2021-Present</p>
          </div>
          <div className="w-[896px] h-[180px] bg-gray-50 flex  gap-6 pt-[20px] rounded-md">
            <img
              className="w-[206px] h-[28px]"
              src="./images/Column.png"
              alt=""
            />

            <ul className="flex flex-col gap-5 list-disc text-md text-gray-600">
              <h3 className="text-xl font-bold"> Sr.Frontend Developer</h3>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <p>November 2021-Present</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
