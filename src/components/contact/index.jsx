import LabelTag from "../label-tag";

const Contact = () => {
  return (
    <div
      className="flex flex-col py-24 bg-gray-100 items-centerpx-20 py-22 dark:bg-gray-950"
      id="contact"
    >
      <div className="flex justify-center">
        <LabelTag label="Contact" />
      </div>
      <div className="flex flex-col gap-12">
        <p className="w-1/2 m-auto mt-4 text-center">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col text-2xl font-semibold">
          <div className="flex items-center justify-center gap-1">
            <span className="mr-2">✉️</span>
            <span>ns.davaajargal@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="mr-2">📞</span>
            <span className="text-lg">+976 88567406</span>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <p>You may also find me on these platforms!</p>
          <div className="flex justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub Icon</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter Icon</span>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Dribbble Icon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
