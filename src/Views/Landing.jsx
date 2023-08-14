import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landing from "../assets/Landing.jpg";

function Landing() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          className=" h-[770px] object-cover lg:h-screen lg:object-cover lg:w-screen"
          src={landing}
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
