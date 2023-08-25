import axios from "axios";
import React, { useEffect, useState } from "react";
import { getOfertas, eliminarOferta } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PreciosPublicados() {
  const dispatch = useDispatch();
  const ofertas = useSelector((state) => state.ofertas);
  useEffect(() => {
    dispatch(getOfertas());
  }, [dispatch]);

  const [showModificMap, setShowModificMap] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setnewImage] = useState("");
  const [newPrice, setnewPrice] = useState("");
  async function actualizarTitulo(id, campo, valor) {
    try {
      await axios.put(
        `https://back-production-a8f7.up.railway.app/ofertas/${id}`,
        {
          [campo]: valor,
        }
      );
      setNewTitle("");
      setnewImage("");
      setnewPrice("");
      dispatch(getOfertas());

      toggleModificacion(id);
    } catch (error) {
      console.error("Error al actualizar el título:", error);
      toast.error("Hubo un error al actualizar el título");
    }
  }

  function toggleModificacion(id) {
    setShowModificMap((prevState) => ({
      [id]: !prevState[id],
    }));
  }

  function eliminar(id) {
    dispatch(eliminarOferta(id));
  }

  return (
    <div className="flex shadow-xl lg:gap-5 flex-wrap justify-center md:p-10 items-center w-screen">
      <ToastContainer />
      {ofertas && ofertas.length > 0 ? (
        ofertas.map((of) => (
          <div
            key={of.id}
            className="flex flex-col w-[160px] md:w-[220px] bg-white shawod-md text-center h-[420px] m-1 mb-10 rounded-t rounded-b-2xl"
          >
            <div className="bg-yellow-500 rounded p-1 m-1 flex hover:bg-yellow-600 justify-center">
              <button onClick={() => eliminar(of.id)} className="w-full h-full">
                Eliminar
              </button>
            </div>
            <div className="bg-yellow-500 rounded p-1 m-1 flex hover:bg-yellow-600 justify-center">
              <button
                onClick={() => toggleModificacion(of.id)}
                className="w-full h-full"
              >
                Modificar{" "}
              </button>
            </div>
            {showModificMap[of.id] ? (
              <div className="relative">
                <div className="absolute bg-gray-200 border-b-2 rounded-b-xl">
                  <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="my-1 text-center rounded"
                    type="text"
                    placeholder="titulo"
                  />
                  {newTitle ? (
                    <button
                      className="px-1 rounded bg-green-300 ml-1"
                      onClick={() => {
                        toast.success("Título modificado correctamente");

                        actualizarTitulo(of.id, "producto", newTitle);
                        window.alert("Titulo modificado");
                      }}
                    >
                      ok
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-1 rounded bg-gray-300 ml-1"
                      onClick={() => {
                        actualizarTitulo(of.id, "producto", newTitle);
                        window.alert("Titulo modificado");
                      }}
                    >
                      ok
                    </button>
                  )}

                  <input
                    onChange={(e) => setnewImage(e.target.value)}
                    className="my-1 text-center rounded"
                    type="text"
                    placeholder="imagen"
                  />
                  {newImage ? (
                    <button
                      className="px-1 rounded bg-green-300 ml-1"
                      onClick={() => {
                        toast.success("Imagen modificada correctamente");

                        actualizarTitulo(of.id, "imagen_url", newImage);
                      }}
                    >
                      ok
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-1 rounded bg-gray-300 ml-1"
                      onClick={() => {
                        actualizarTitulo(of.id, "imagen_url", newImage);
                      }}
                    >
                      ok
                    </button>
                  )}

                  <input
                    onChange={(e) => setnewPrice(e.target.value)}
                    className="my-1 text-center rounded"
                    type="text"
                    placeholder="precio"
                  />
                  {newPrice ? (
                    <button
                      className={`px-1 rounded bg-green-300 ml-1`}
                      onClick={() => {
                        toast.success("Precio modificado correctamente");

                        actualizarTitulo(of.id, "precio", newPrice);
                      }}
                    >
                      ok
                    </button>
                  ) : (
                    <button
                      disabled
                      className={`px-1 rounded bg-gray-300 ml-1`}
                      onClick={() => {
                        actualizarTitulo(of.id, "precio", newPrice);
                        window.alert("Precio modificado");
                      }}
                    >
                      ok
                    </button>
                  )}

                  <button
                    className="px-2 rounded bg-red-500 text-white "
                    onClick={() => {
                      toggleModificacion(of.id);
                    }}
                  >
                    Cerrar{" "}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-end ">
              <img
                className="mx-auto w-full p-2 h-[250px] object-cover"
                src={of.imagen_url}
                alt=""
              />
            </div>
            <div className="flex border-t border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
              <div className="flex w-full justify-start px-3 py-1 text-[35px] text-bold text-slate-800">
                ${of.precio}
                <span className="text-sm font-bold underline">00</span>
              </div>
              <div className="text-start px-3 pb-3 mb-3 items-start flex h-[60px] text-slate-800 w-full ">
                {of.producto}
              </div>
            </div>{" "}
          </div>
        ))
      ) : (
        <div>No hay ofertas disponibles</div>
      )}
    </div>
  );
}

export default PreciosPublicados;
