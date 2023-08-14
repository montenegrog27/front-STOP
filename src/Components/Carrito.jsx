import logo from "../assets/logoNuevo.png";

function Carrito() {
  const carroExistente = JSON.parse(localStorage.getItem("carro"));

  return (
    <div className=" bg-blue-500 flex h-screen justify-center items-start">
      <div className="bg-blue-600 rounded p-10 mt-5">
        <img src={logo} className="mt-[50px]" alt="" />
        <div className="flex justify-center items-center flex-col-2">
          <div className="flex flex-col">
            {carroExistente
              ? carroExistente.map((prod, index) => (
                  <div key={prod.index} className="m-1">
                    <div>{prod.producto}</div>
                  </div>
                ))
              : ""}
            <div className="text-end m-1">total</div>
          </div>
          <div className="flex flex-col ml-5">
            {carroExistente
              ? carroExistente.map((prod, index) => (
                  <div key={prod.index} className="m-1">
                    <div>{prod.precio}</div>
                  </div>
                ))
              : ""}
            <div className="m-1">$$$</div>
          </div>
        </div>
        <div className="bg-red-500 flex justify-center items-center">
          <button>hacer pedido!!</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
