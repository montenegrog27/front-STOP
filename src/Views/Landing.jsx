import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landing from "../assets/Landing.jpg";
import landing2 from "../assets/Landing2.png";

function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Actualiza el estado de 'isMobile' según el tamaño de la ventana al cargar y redimensionar
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar el valor según tus necesidades
    };

    // Llama a la función de manejo de tamaño de ventana al cargar y redimensionar
    window.addEventListener("resize", handleResize);
    handleResize();

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <img
          className=" h-full lg:h-screen lg:object-cover lg:w-screen"
          src={isMobile ? landing2 : landing}
          alt=""
        />
        <button className="absolute mt-[350px] px-6 py-3 rounded-[30px] font-bold text-[25px] text-gray-100 letra hover:scale-110 transition border-2 rojol2">
          <Link to={"/home"}>Ingresar</Link>
        </button>
      </div>
    </>
  );
}

export default Landing;
