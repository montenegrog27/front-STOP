import React from "react";
import { Link } from "react-router-dom";
import { TabList, Tab } from "@tremor/react";
import logo from "../assets/logoNuevo.png";
import { useState } from "react";

import Admin1 from "../Components/Admin1";
import Admin2 from "../Components/Admin2";
import Aviso from "../Components/Aviso";
import PreciosPublicados from "../Components/PreciosPublicados";

function Admin() {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <>
      <main className="bg-gray-200">
        <Link to={"/"}>
          <button className="rounded px-3 py-2 mt-3 ml-3 bg-red-400">
            Volver al Home
          </button>
        </Link>
        <div className="text-center justify-center flex -m-2  text-[35px]">
          <img src={logo} alt="" className="w-[200px]" />
        </div>{" "}
        <div className="text-center text-xl">Administrador de precios</div>{" "}
        <TabList
          defaultValue={selectedView}
          onValueChange={(value) => setSelectedView(value)}
        >
          <Tab className="text-[60px] px-5 mx-1 " value={1} text="DESTACADOS" />
          <Tab className="text-[60px] px-5 mx-1 " value={2} text="OFERTAS" />
          <Tab
            className="text-[60px] px-5 mx-1 "
            value={3}
            text="CREAR OFERTA"
          />
          <Tab
            className="text-[60px] px-5 mx-1 "
            value={4}
            text="CREAR AVISO"
          />
        </TabList>
        {selectedView === 1 ? <Admin1 /> : ""}
        {selectedView === 2 ? <PreciosPublicados /> : ""}
        {selectedView === 3 ? <Admin2 /> : ""}
        {selectedView === 4 ? <Aviso /> : ""}
      </main>
    </>
  );
}

export default Admin;
