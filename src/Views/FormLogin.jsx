import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logoNuevo.png";
function FormLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      navigate("/admin");
    } else {
      setErrorMessage("Usuario/contraseña incorrecto. Intentelo de nuevo");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center mt-10 bg-gray-300 w-[30%] p-10 rounded-2xl">
        <img src={logo} alt="" className="mt-10" />
        <h2 className="text-xl mb-10 font-semibold ">
          Ingresar a administrador
        </h2>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Usuario"
          className="border rounded py-2 px-3 mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border rounded py-2 px-3 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 letra w-[135px] rounded"
          onClick={handleLogin}
        >
          Ingresar
        </button>
        <button className=" mt-10 bg-red-500 text-white letra py-2 w-[135px] rounded">
          <Link to={"/home"}>Volver a inicio</Link>
        </button>
      </div>
    </div>
  );
}

export default FormLogin;
