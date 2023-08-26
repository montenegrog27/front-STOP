import { useSelector, useDispatch } from "react-redux";
import portada from "../assets/Portada2.jpg";
import { useEffect } from "react";
import { getAviso } from "../Redux/actions";
// import portada from "../assets/ARCHIVO.png";

function Portada() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAviso());
  }, []);

  const aviso = useSelector((state) => state.avisos);
  return (
    <div className="amarillo flex justify-start  pt-[50px]">
      {aviso.length ? (
        <div
          id="aviso"
          className="absolute border-[3px] md:border-[6px] items-center h-[60px] md:h-[150px] lg:h-[200px]  w-[100px] md:w-[200px] lg:w-[250px] border-yellow-400 shadow-2xl mt-[10px] md:mt-[20px] lg:mt-[37px] ml-[69%] md:text-md lg:text-2xl text-gray-200  p-2 rounded-[25px]"
        >
          <div className="flex justify-center items-center fonte text-[10px] md:text-[27px] lg:text-[40px] h-full text-center">
            {aviso ? aviso[0].contenido : ""}
          </div>
        </div>
      ) : (
        ""
      )}

      <img className="border-none shadow-none w-full" src={portada} alt="" />
    </div>
  );
}

export default Portada;
