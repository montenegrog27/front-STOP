import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarAviso, getAviso, postearAviso } from "../Redux/actions";

function Aviso() {
  const dispatch = useDispatch();
  const aviso = useSelector((state) => state.avisos);

  useEffect(() => {
    dispatch(getAviso());
  }, [dispatch]);

  const [nuevoAviso, setNuevoAviso] = useState("");

  function agregarAviso() {
    const titulo = "titulo";
    dispatch(postearAviso(titulo, nuevoAviso));
    setNuevoAviso("");
  }
  function elimAviso(id) {
    dispatch(eliminarAviso(id));
  }

  function refrescarAviso() {
    dispatch(getAviso());
  }
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className=" bg-gray-200 p-2 rounded-lg  m-10 flex flex-col">
        <div className="  text-center rounded-xl font-bold m-3  bg-gray-300 w-[500px]">
          AVISO ACTIVO:
          {aviso[0] ? (
            <div className="w-auto text-center flex items-center h-auto">
              "{aviso[0].contenido}"
            </div>
          ) : (
            <span className="ml-4">"NO HAY AVISO ACTIVO"</span>
          )}
        </div>{" "}
        <div className="flex justify-end b  w-full">
          {aviso[0] ? (
            <button
              onClick={() => {
                elimAviso(aviso[0].id);
                refrescarAviso();
              }}
              className="h-full bg-green-600 px-2 rounded-lg py-1 text-gray-100 font-bold hover:bg-red-700"
            >
              ELIMINAR AVISO
            </button>
          ) : (
            <button
              onClick={() => elimAviso(aviso[0].id)}
              className=" h-full bg-gray-400 px-2 rounded-lg py-1 text-gray-100 font-bold hover:cursor-not-allowed "
              disabled
            >
              ELIMINAR AVISO
            </button>
          )}
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg p-3 m-5  items-center flex">
        <textarea
          className="rounded-xl border-2 m-5 border-gray-300"
          onChange={(e) => setNuevoAviso(e.target.value)}
          value={nuevoAviso}
          name=""
          id=""
          cols="30"
          rows="4"
        ></textarea>
        <button
          onClick={() => {
            agregarAviso();
            window.location.reload();
          }}
          className=" h-full bg-blue-600 px-2 rounded-lg py-1 text-gray-100 font-bold hover:bg-blue-800"
        >
          AGREGAR AVISO
        </button>
      </div>
    </div>
  );
}
export default Aviso;
