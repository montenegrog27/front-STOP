import footer from "../assets/Footer.jpg";

function Footer() {
  return (
    <div
      className="flex justify-center flex-col bg-red-600 items-center p-5 md:p-10"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        id="contacto"
        className="bg-yellow-400 rounded-2xl w-[95%] p-3 md:p-5 justify-around items-center flex-col mb:flex-col-2 flex"
      >
        <div className="flex justify-center items-center fonte text-gray-900 text-[30px] pr-3 w-auto h-auto ">
          Contacto
        </div>
        <div className="flex p-3 items-start justify-center bg-yellow-200 flex-col text-buttonBlue rounded-2xl fonte w-[90%] h-auto text-lg ">
          <div className="mb-3 justtify-center flex-row-1 flex">
            <a
              className="letra sm:text-sm md:text-xl lg:text-2xl ml-2"
              href="https://www.linkedin.com/in/montenegro-german-e/"
              target="_blank"
              rel="noopener noreferrer"
            >
              379-154545310
            </a>
          </div>
          <div className="mb-3 sm:text-sm md:text-xl lg:text-2xl flex flex-row-1">
            <a className="letra ml-2" href="mailto:tu_correo@gmail.com">
              gentarsrl27@gmail.com
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
