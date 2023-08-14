import {
  MODIFICAR_PRECIO,
  TRAER_PRECIOS,
  POSTEAR_OFERTA,
  TRAER_OFERTAS,
  ELIMINAR_OFERTA,
  TRAER_AVISO,
  POSTEAR_AVISO,
  ELIMINAR_AVISO,
} from "./actions";

const initialState = {
  precios: [],
  ofertas: [],
  avisos: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAER_PRECIOS:
      return {
        ...state,
        precios: action.payload, // Agrega esta línea para actualizar los precios en el estado
      };
    case MODIFICAR_PRECIO:
      return {
        ...state,
        precios: [...state.precios, action.payload],
      };

    case TRAER_OFERTAS:
      return {
        ...state,
        ofertas: action.payload,
      };
    case POSTEAR_OFERTA:
      return {
        ...state,
      };
    case ELIMINAR_OFERTA:
      return {
        ...state,
        ofertas: state.ofertas.filter((oferta) => oferta.id !== action.payload),
      };
    case TRAER_AVISO:
      return {
        ...state,
        avisos: action.payload,
      };
    case POSTEAR_AVISO:
      return {
        ...state,
        avisos: action.payload,
      };
    case ELIMINAR_AVISO:
      return {
        ...state,
        avisos: state.avisos.filter((avi) => avi.id !== action.payload),
      };
    default:
      return { ...state };
  }
};
