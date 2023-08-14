import React, { useState } from "react"; // Importa useState
import { modificarPrecio } from "../Redux/actions";
import { useDispatch } from "react-redux";

function Admin1() {
  const dispatch = useDispatch(); // Obtén la función dispatch de Redux

  // Define un estado para los nuevos precios
  const [nuevosPrecios, setNuevosPrecios] = useState({
    brahma: 0,
    coca: 0,
    azucar: 0,
    spriteFanta: 0,
  });

  // Función para manejar el cambio en los input de los nuevos precios
  const handlePrecioChange = (event) => {
    const { name, value } = event.target;

    // Validación: Verifica si el valor es un número antes de actualizar el estado
    if (!isNaN(value)) {
      setNuevosPrecios((prevPrecios) => ({
        ...prevPrecios,
        [name]: parseFloat(value),
      }));
    }
  };

  // Función para enviar los nuevos precios al servidor
  const handleSubmit = () => {
    dispatch(modificarPrecio(nuevosPrecios));
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10">
        <div className="rounded bg-blue-400 text-2xl text-gray-200 w-[500px] text-center m-2 p-2">
          PRECIOS
        </div>
        <div className="flex justify-center items-center bg-red-500 m-0.5 w-[300px] p-3 rounded-xl">
          <div className="mr-3 fonte ">brahma</div>
          <input
            className="items-center text-center w-[100px]"
            type="number"
            name="brahma"
            value={nuevosPrecios.brahma}
            onChange={handlePrecioChange}
          />
        </div>

        <div className="flex justify-center items-center bg-red-500 m-0.5 w-[300px] p-3 rounded-xl">
          <div className="mr-3 fonte ">Coca-Cola</div>
          <input
            className="items-center text-center w-[100px]"
            type="number"
            name="coca"
            value={nuevosPrecios.coca}
            onChange={handlePrecioChange}
          />
        </div>

        <div className="flex justify-center items-center bg-red-500 m-0.5 w-[300px] p-3 rounded-xl">
          <div className="mr-3 fonte ">Azucar</div>
          <input
            className="items-center text-center w-[100px]"
            type="number"
            name="azucar"
            value={nuevosPrecios.azucar}
            onChange={handlePrecioChange}
          />
        </div>

        <div className="flex justify-center items-center bg-red-500 m-0.5 w-[300px] p-3 rounded-xl">
          <div className="mr-3 fonte ">Sprite-Fanta</div>
          <input
            className="items-center text-center w-[100px]"
            type="number"
            name="spriteFanta"
            value={nuevosPrecios.spriteFanta}
            onChange={handlePrecioChange}
          />
        </div>
        <button
          className="rounded-[50px] bg-green-500 text-2xl text-gray-200 w-[300px] text-center m-2 p-2 hover:bg-green-600 hover:scale-105"
          onClick={() => {
            handleSubmit();
            window.alert("todo ok mi rey");
          }}
        >
          Actualizar
        </button>
      </div>
    </>
  );
}

export default Admin1;
