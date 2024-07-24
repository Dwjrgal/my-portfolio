const Skills = () => {
  return (
    <>
      <section className="flex flex-col gap-8 items-center h-[560px] w-[1440px] my-28">
        <p className=" bg-gray-300 w-24 rounded text-center">Skills</p>
        <h5>The skills, tools and technologies I am really good at</h5>
        <section className="logos flex flex-col h-10  gap-9 items-center w-[1216px] mt-20">
          <div className="flex gap-x-20 h-10 w-16 justify-center items-center ">
            <img className="h-10" src="./images/icon-javscript.svg" alt="" />
            <img className="h-10" src="./images/icon-typescript.svg" alt="" />
            <img className="h-10" src="./images/icon-react.svg" alt="" />
            <img className="h-10" src="./images/icon-nextjs.svg" alt="" />
            <img className="h-10" src="./images/icon-nodejs.svg" alt="" />
            <img className="h-10" src="./images/Vector.png" alt="" />
            <img className="h-10" src="./images/icon-nest.svg" alt="" />
            <img className="h-10" src="./images/icon-socket.png" alt="" />
          </div>
          <div className="flex gap-x-20  h-10 w-16 justify-center">
            <img className="h-10" src="./images/icon-postgresql.svg" alt="" />
            <img className="h-10" src="./images/icon-mongodb.svg" alt="" />
            <img className="h-10" src="./images/icon-sass.svg" alt="" />
            <img className="h-10" src="./images/Figma.png" alt="" />
            <img className="h-10" src="./images/tailwind.png" alt="" />
            <img className="h-10" src="./images/Cypress.png" alt="" />
            <img className="h-10" src="./images/Storybook.png" alt="" />
            <img className="h-10" src="./images/git.png" alt="" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
