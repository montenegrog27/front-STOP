import logoNuevo from "../assets/logoNuevo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  // const [showCarro, setShowCarro] = useState(false);
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="grid grid-cols-8 z-10  w-[100%] bg-gray-900 fixed">
      <div className="fonte ml-5 col-span-5 text-gray-200 flex justify-start ">
        <Link to={"/administrador"}>
          <img
            src={logoNuevo}
            alt="logo"
            className="w-[55px] h-[25px] md:w-[65px] md:h-[30px] mt-3"
          />
        </Link>
      </div>
      <div className=" flex w-[60%] col-span-2 justify-around">
        <a
          className="m-3 text-gray-200 sm:text-[10px] md:text-[15px] lg:text-[20px] fonte hover:text-buttonBlue hover:scale-110 transition"
          href="/#destacados"
          onClick={(e) => handleScroll(e, "#destacados")}
        >
          Destacados
        </a>
        <a
          className="m-3 text-gray-200 sm:text-[10px] md:text-[15px] lg:text-[20px] fonte hover:text-buttonBlue hover:scale-110 transition"
          href="/#ofertas"
          onClick={(e) => handleScroll(e, "#ofertas")}
        >
          OFERTAS
        </a>
        <a
          className="m-3 text-gray-200 sm:text-[10px] md:text-[15px] lg:text-[20px] fonte hover:text-buttonBlue hover:scale-110 transition"
          href="/#contacto"
          onClick={(e) => handleScroll(e, "#contacto")}
        >
          Contacto
        </a>
      </div>
      <div className="text-white flex justify-end mx-5 items-center text-end">
        <Link to={"/shoppingCar"}>
          <FaShoppingCart className="w-5 h-5 lg:w-8 lg:h-8" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
