import { ADD_TOCART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TOCART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartItems;
