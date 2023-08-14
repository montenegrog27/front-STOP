import React, { useEffect } from "react";
import { getOfertas } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Ofertas() {
  const dispatch = useDispatch();
  const ofertas = useSelector((state) => state.ofertas);
  useEffect(() => {
    dispatch(getOfertas());
  }, [dispatch]);

  return (
    <>
      <div id="ofertas" className="flex justify-center z-5">
        <div className="border-t-2 w-[70%] border-gray-500 pt-5 text-[30px] md:text-[35px] lg:text-[45px] text-white-700 flex items-center justify-center mt-10 fonte mb-5">
          OFERTAS
        </div>
      </div>

      <div className=" flex shadow-xl lg:gap-5  flex-wrap justify-center md:p-10 items-center w-screen">
        {ofertas && ofertas.length > 0 ? (
          ofertas.map((of) => (
            <div
              key={of.id}
              className=" flex flex-col  w-[160px] md:w-[220px] bg-white shawod-md text-center h-[380px]   m-1 rounded-t rounded-b-2xl"
            >
              <div className="flex justify-end ">
                <div
                  id="cartelito"
                  className=" absolute text-yellow-300 text-lg  px-4 py-1 -m-3   fonte bg-gradient-to-r from-rojoDark shadow-xl to-rojoLight transform -skew-x-12 "
                >
                  Oferta!!!
                </div>
                <img
                  className="mx-auto  w-full p-2 h-[250px]  object-cover"
                  src={of.imagen_url}
                  alt=""
                />
              </div>
              <div className=" flex border-t  border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
                <div className="flex  w-full justify-start px-3 py-1  text-[35px]  text-bold text-slate-800">
                  ${of.precio},
                  <span className="text-sm font-bold underline">00</span>
                </div>
                <div className="  letra text-start px-3 pb-3 mb-3 items-start flex h-[60px]  text-slate-800  w-full ">
                  {of.producto}
                </div>
              </div>{" "}
            </div>
          ))
        ) : (
          <div>No hay ofertas disponibles</div>
        )}
      </div>
    </>
  );
}
export default Ofertas;
