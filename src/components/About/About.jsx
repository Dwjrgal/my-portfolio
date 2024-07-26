const About = () => {
  return (
    <>
      <section className="px-[80px] pt-[100px] gap-14 flex flex-col items-center mb-10 mt-12 bg-slate-50 ">
        <p className=" bg-gray-300 w-24 rounded text-center">About me</p>
        <section className="flex   w-[1226px]  h-[558px] justify-between items-center gap-[80px]">
          <div className="flex">
            <div className="box h-[420px] w-[380px] bg-gray-600 relative top-20 right-60"></div>
            <img
              className="h-[420px] w-[380px] shadow  shadow-slate-500 absolute"
              src="https://images.unsplash.com/photo-1719871362125-0869885ea481?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-9 w-[584px]">
            <h4 className="text-2xl font-medium">
              Curious about me? Here you have it:
            </h4>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <ul className="flex list-disc gap-9 pl-3">
              <div className="flex flex-col gap-4">
                <li>B.E in Computer Engineering</li>
                <li> Full time freelancer</li>
              </div>
              <li> Avid learner</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
