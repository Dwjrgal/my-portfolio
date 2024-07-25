const Footer = () => {
  return (
    <>
      <section className="flex  flex-col items-center mt-40 gap-9">
        <h4 className=" bg-gray-300 w-24 h-[28px] rounded-lg text-center">
          Get in touch
        </h4>
        <p className="text-xl text-center font-thin">
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
        <textare
          className="bg-red-500"
          name="gmail"
          id="gmail"
          rows="2"
          cols="2"
        ></textare>
      </section>
    </>
  );
};

export default Footer;
