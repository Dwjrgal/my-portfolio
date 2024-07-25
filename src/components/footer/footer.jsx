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
        <textarea
          className="border-black
        "
          name="gmail"
          id="gmail"
        ></textarea>
      </section>
    </>
  );
};

export default Footer;
