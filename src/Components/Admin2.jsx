import React, { useState } from "react";
import { postearOferta } from "../Redux/actions";
import { useDispatch } from "react-redux";

function Admin2() {
  const dispatch = useDispatch();
  const [productos, setProductos] = useState([]); // Cambiado a setProductos

  const handleImageUrlChange = (event, index) => {
    const updatedProducts = [...productos];
    updatedProducts[index].imagen_url = event.target.value;
    setProductos(updatedProducts); // Cambiado a setProductos
  };

  const handleNameChange = (event, index) => {
    const updatedProducts = [...productos];
    updatedProducts[index].producto = event.target.value;
    setProductos(updatedProducts); // Cambiado a setProductos
  };

  const handlePriceChange = (event, index) => {
    const updatedProducts = [...productos];
    updatedProducts[index].precio = Number(event.target.value);
    setProductos(updatedProducts); // Cambiado a setProductos
  };

  const handleCreate = () => {
    const newProducto = {
      // Cambiado a newProducto
      producto: "",
      precio: 0,
      imagen_url: null,
    };
    setProductos([...productos, newProducto]); // Cambiado a setProductos
  };
  const handleDelete = (index) => {
    const updatedProducts = productos.filter((_, i) => i !== index);
    setProductos(updatedProducts);
  };
  const handleAddAll = () => {
    // Filtrar productos con valores no nulos
    const filteredProducts = productos.filter(
      (produ) => produ.producto !== "" && produ.precio !== ""
    );

    // Enviar solo los productos con valores no nulos al servidor
    dispatch(postearOferta(filteredProducts));
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-around w-full">
        <button
          className="rounded-xl px-10 py-2 bg-blue-400 font-bold text-gray-100 text-xl my-5"
          onClick={handleCreate}
        >
          Agregar Producto
        </button>
        <button
          className="rounded-xl px-10 py-2 text-xl bg-green-600 text-gray-100 font-bold my-5"
          onClick={() => {
            handleAddAll();
            setProductos([]);
            window.alert("Agregado");
          }}
        >
          Agregar
        </button>
      </div>

      {/* <PreciosPublicados /> */}
      <div className="products-container grid grid-cols-4 gap-4">
        {productos
          ? productos.map((product, index) => (
              <div
                key={index}
                className="product bg-gray-400 m-4 p-5 rounded-xl"
              >
                <div>
                  <div>
                    <input
                      className="bg-gray-200 my-1 text-center rounded h-10"
                      type="text"
                      value={product.name}
                      onChange={(event) => handleNameChange(event, index)}
                      placeholder="Nombre del producto"
                    />
                  </div>
                  <input
                    className="bg-gray-200 my-1 text-center rounded h-10"
                    type="text"
                    value={product.imageUrl}
                    onChange={(event) => handleImageUrlChange(event, index)}
                    placeholder="URL de la imagen"
                  />
                  <div className="bg-white text-center w-[200px] h-[200px] flex items-center">
                    <img
                      className=" w-auto h-auto"
                      src={product.imagen_url}
                      alt={`Imagen ${index}`}
                    />
                  </div>

                  <div className="bg-gray-400 flex justify-center items-center rounded-xl mt-1 px-2">
                    <span className=" text-xl text-white">PRECIO $ </span>
                    <input
                      className="rounded my-1 w-[60px] ml-2 text-center text-lg h-[40px]"
                      type="text"
                      value={product.price}
                      onChange={(event) => handlePriceChange(event, index)}
                    />
                  </div>

                  <div className="flex justify-end ">
                    <button
                      className="bg-red-600 text-gray-100 font-bold mt-1 p-2 rounded-2xl"
                      onClick={() => handleDelete(index)}
                    >
                      Eliminar
                    </button>{" "}
                  </div>
                </div>
              </div>
            ))
          : "cargando"}
      </div>
    </div>
  );
}

export default Admin2;
