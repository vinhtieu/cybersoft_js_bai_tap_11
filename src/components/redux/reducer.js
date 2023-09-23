import {
  VIEW_PRODUCT,
  CALC_TOTAL,
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
  subTotal: 0,
  tax: 0,
  total: 0,
};

initialState.subTotal = initialState.cartItems.reduce((acc, item) => {
  return acc + item.price * item.amount;
}, 0);
initialState.tax = initialState.subTotal * 0.1 || 0;
initialState.total = initialState.subTotal + initialState.tax;

const reducer = (state = initialState, action) => {
  let list;
  let newProduct;
  let productID;
  let productIndex;

  switch (action.type) {
    case VIEW_PRODUCT:
      return { ...state, productOverview: action.payload };

    case CALC_TOTAL:
      const subTotal = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
      const tax = subTotal * 0.1 || 0;
      const total = subTotal + state.tax;
      return {
        ...state,
        subTotal,
        tax,
        total,
      };

    case ADD_PRODUCT:
      list = [...state.cartItems];
      productIndex = list.findIndex((item) => item.id === action.payload.id);
      if (productIndex === -1) {
        newProduct = { ...action.payload, amount: 1 };
        list.push(newProduct);
      } else {
        let oldProduct = list[productIndex];
        newProduct = { ...oldProduct, amount: ++oldProduct.amount };
        list.splice(productIndex, 1, newProduct);
      }
      return { ...state, cartItems: list };

    case DELETE_PRODUCT:
      list = [...state.cartItems];
      productID = action.payload.id;
      productIndex = list.findIndex((item) => item.id === productID);
      list.splice(productIndex, 1);
      return { ...state, cartItems: list };

    case INCREASE_AMOUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
      };

    case DECREASE_AMOUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export { initialState, reducer };
