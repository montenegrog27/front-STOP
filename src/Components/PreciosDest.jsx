import brahma from "../assets/PrecDest1-BRAHMA2.png";
import coca from "../assets/PrecDest1-COCA.png";
import azucar from "../assets/PrecDest1-AZUCAR.png";
import sprFant from "../assets/PrecDest1-SP-FT-Cajon.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPrecios } from "../Redux/actions";
import { useEffect } from "react";

function PreciosDest() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrecios());
  }, [dispatch]);

  const precios = useSelector((state) => state.precios);
  console.log("el precioi", precios);
  return (
    <div id="destacados" className="">
      <div className="mt-5 fonte mb-5 text-[30px] md:text-[35px] lg:text-[45px] text-center">
        PRECIOS DESTACADOS
      </div>
      <div className="flex flex-wrap mg:gap-4 lg:gap-6 justify-center ">
        {/* Columna 1 */}
        <div className=" flex flex-col w-[167px] md:w-[220px] bg-white shawod-md text-center h-[350px]   m-1 rounded-t rounded-b-2xl">
          <img
            className="mx-auto  w-full p-2 h-[250px]  object-cover"
            src={brahma}
            alt=""
          />
          <div className=" flex border-t border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
            <div className="flex  w-full justify-start px-3 py-1  text-[35px]  text-bold text-slate-800">
              ${precios[0] && precios[0].precio},
              <span className="text-sm font-bold underline">00</span>
            </div>
            <div className="  letra text-start px-3 pb-3 mb-3 items-start flex h-[60px]  text-slate-800  w-full ">
              Cajon Brahma RET x1L (12)
            </div>
          </div>{" "}
        </div>
        {/* Columna 2 */}
        <div className=" flex flex-col w-[167px] md:w-[220px] bg-white shawod-md text-center h-[350px]   m-1 rounded-t rounded-b-2xl">
          <img
            className="mx-auto  w-full p-2 h-[250px]  object-cover"
            src={coca}
            alt=""
          />
          <div className=" flex border-t border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
            <div className="flex  w-full justify-start px-3 py-1  text-[35px]  text-bold text-slate-800">
              ${precios[1] && precios[1].precio},
              <span className="text-sm font-bold underline">00</span>
            </div>
            <div className="  letra text-start px-3 pb-3 mb-3 items-start flex h-[60px]  text-slate-800  w-full ">
              Cajon Coca-Cola x1.5lts RET (8)
            </div>
          </div>{" "}
        </div>
        {/* Columna 3 */}
        <div className=" flex flex-col w-[167px] md:w-[220px] bg-white shawod-md text-center h-[350px]   m-1 rounded-t rounded-b-2xl">
          <img
            className="mx-auto  w-full p-2 h-[250px]  object-cover"
            src={azucar}
            alt=""
          />
          <div className=" flex border-t border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
            <div className="flex  w-full justify-start px-3 py-1  text-[35px]  text-bold text-slate-800">
              ${precios[2] && precios[2].precio},
              <span className="text-sm font-bold underline">00</span>
            </div>
            <div className="  letra text-start px-3 pb-3 mb-3 items-start flex h-[60px]  text-slate-800  w-full ">
              Azucar 1kg Ledesma pack x10kg (10)
            </div>
          </div>{" "}
        </div>
        {/* Columna 4 */}
        <div className=" flex flex-col w-[167px] md:w-[220px] bg-white shawod-md text-center h-[350px]   m-1 rounded-t rounded-b-2xl">
          <img
            className="mx-auto  w-full p-2 h-[250px]  object-cover"
            src={sprFant}
            alt=""
          />
          <div className=" flex border-t border-slate-300 border-t-1 flex-col justify-start rounded-b-lg items-center">
            <div className="flex  w-full justify-start px-3 py-1  text-[35px]  text-bold text-slate-800">
              ${precios[3] && precios[3].precio},
              <span className="text-sm font-bold underline">00</span>
            </div>
            <div className="  letra text-start px-3 pb-3 mb-3 items-start flex h-[60px]  text-slate-800  w-full ">
              Cajon de fanta y Sprite x2lts(8)
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default PreciosDest;
