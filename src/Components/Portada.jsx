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
  console.log(aviso);
  return (
    <div className="amarillo flex justify-start  pt-[50px]">
      {aviso.length ? (
        <div
          id="aviso"
          className="absolute border-[6px] items-center h-[200px] w-[250px] border-yellow-400 shadow-2xl mt-[37px] ml-[69%] text-2xl text-gray-200  p-2 rounded-[25px]"
        >
          <div className="flex justify-center  fonte  text-[40px] text-center">
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
