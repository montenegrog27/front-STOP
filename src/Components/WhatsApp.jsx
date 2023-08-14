import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

function WhatsApp() {
  const phoneNumber = "3794769259";
  const message = "Hola me gustaría hacer un pedido";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="fixed bottom-5 right-5 flex justify-center items-center flex-row z-50">
      <div
        id="hover"
        className={`pl-2 pr-6 rounded-xl -mr-5 bg-white ${
          hovered ? "block" : "hidden"
        }`}
      >
        Envianos tu pedido!
      </div>
      <Link
        to={whatsappUrl}
        target="_blank"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-3 rounded-full transform hover:shake transition-transform">
          <BsWhatsapp className=" w-10 h-10" />
        </button>
      </Link>
    </div>
  );
}

export default WhatsApp;
