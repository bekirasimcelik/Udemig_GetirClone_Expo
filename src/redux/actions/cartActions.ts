import { ADD_TOCART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

export const addToCart = (payload) => {
  return {
    type: ADD_TOCART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const clearCART = () => {
  return {
    type: CLEAR_CART,
  };
};
