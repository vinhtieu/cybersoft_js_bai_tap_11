import {
  VIEW_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "./constant";
import database from "../data.js";

const initialState = {
  productList: database,
  productOverview: database[0],
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  let list;
  let newProduct;
  let productID;
  let productIndex;

  switch (action.type) {
    case VIEW_PRODUCT:
      return { ...state, productOverview: action.payload };

    case ADD_PRODUCT:
      list = [...state.cartItems];
      productID = action.payload.id;
      productIndex = list.findIndex((item) => item.id === productID);
      if (productIndex === -1) {
        newProduct = { ...action.payload, amount: 1 };
        list.push(newProduct);
      } else {
        list[productIndex].amount++;
      }

      return { ...state, cartItems: list };

    case DELETE_PRODUCT:
      list = [...state.cartItems];
      productID = action.payload.id;
      productIndex = list.findIndex((item) => item.id === productID);
      list.splice(productIndex, 1);
      return { ...state, cartItems: list };

    case INCREASE_AMOUNT:
      action.payload.amount++;
      return { ...state };

    case DECREASE_AMOUNT:
      action.payload.amount--;
      return { ...state };

    default:
      return state;
  }
};

export { initialState, reducer };
