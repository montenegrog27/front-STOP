import axios from "axios";

const TRAER_PRECIOS = "TRAER_PRECIOS";
const MODIFICAR_PRECIO = "MODIFICAR_PRECIO";
const TRAER_OFERTAS = "TRAER_OFERTAS";
const POSTEAR_OFERTA = "POSTEAR_OFERTA";
const ELIMINAR_OFERTA = "ELIMINAR_OFERTA";
const ELIMINAR_AVISO = "ELIMINAR_AVISO";
const POSTEAR_AVISO = "POSTEAR_AVISO";
const TRAER_AVISO = "TRAER_AVISO";

const getPrecios = () => {
  // Quita "precios" de los parámetros, ya que no parece ser necesario
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/precios");
      const data = response.data;
      return dispatch({
        type: TRAER_PRECIOS,
        payload: data, // Aquí debería ser "data" en lugar de "precios"
      });
    } catch (error) {
      console.log("HUBO ESTE ERROR:", error);
    }
  };
};

const modificarPrecio = (nuevosPrecios) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/actualizar-precios",
        nuevosPrecios
      );
      const data = response.data;
      console.log("esto es data", data);
      return dispatch({
        type: MODIFICAR_PRECIO,
        payload: data,
      });
    } catch (error) {
      console.log("Error al modif Precio", error);
    }
  };
};

const getOfertas = () => {
  // Quita "precios" de los parámetros, ya que no parece ser necesario
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/ofertas");
      const data = response.data;
      return dispatch({
        type: TRAER_OFERTAS,
        payload: data,
      });
    } catch (error) {
      console.log("HUBO ESTE ERROR:", error);
    }
  };
};

const postearOferta = (products) => {
  console.log("ESTO ES PRODUCTS EN ACTION", products);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/ofertas",
        products
      );
      const data = response.data;
      console.log("ESTO ES POST EN ACTION", data);
      return dispatch({
        type: POSTEAR_OFERTA,
        payload: data,
      });
    } catch (error) {}
  };
};
const eliminarOferta = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/ofertas/${id}`);
      dispatch({
        type: ELIMINAR_OFERTA,
        payload: id, // Envía el ID de la oferta eliminada al reducer
      });
    } catch (error) {
      console.log("Error al eliminar oferta:", error);
    }
  };
};

const getAviso = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/avisos");
      const data = response.data;
      console.log("que pa e", data);
      return dispatch({
        type: TRAER_AVISO,
        payload: data,
      });
    } catch (error) {
      console.log("HUBO ESTE ERROR:", error);
    }
  };
};

const postearAviso = (titulo, contenido) => {
  console.log("ESTO ES titulo EN ACTION", titulo, contenido);
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/avisos", {
        titulo: titulo,
        contenido: contenido,
      });
      const data = response.data;
      console.log("ESTO ES POST EN ACTION", data);
      return dispatch({
        type: POSTEAR_AVISO,
        payload: { data },
      });
    } catch (error) {}
  };
};
const eliminarAviso = (id) => {
  console.log("EL ID A ELIMNAR", id);
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/avisos/${id}`);
      dispatch({
        type: ELIMINAR_AVISO,
        payload: id, // Envía el ID de la oferta eliminada al reducer
      });
    } catch (error) {
      console.log("Error al eliminar oferta:", error);
    }
  };
};

export {
  MODIFICAR_PRECIO,
  TRAER_PRECIOS,
  POSTEAR_OFERTA,
  TRAER_OFERTAS,
  ELIMINAR_OFERTA,
  ELIMINAR_AVISO,
  TRAER_AVISO,
  POSTEAR_AVISO,
  getAviso,
  eliminarAviso,
  postearAviso,
  eliminarOferta,
  getOfertas,
  postearOferta,
  modificarPrecio,
  getPrecios,
};
