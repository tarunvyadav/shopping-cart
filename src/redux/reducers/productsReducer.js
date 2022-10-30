import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/Action-types";
const intialState = {
  products: [],
  cart:[]
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SETECT_MEN:
      return { ...state, products: payload};
    case ActionTypes.SETECT_WOMEN:
      return { ...state, products: payload};
     case ActionTypes.SETECT_JEWELERY:
      return { ...state, products: payload};
       case ActionTypes.SETECT_ELECTRONICS:
      return { ...state, products: payload};
    default:
      return state;
    
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


export const cartReducer= ( state=intialState, {type, payload}) =>{
  switch(type){
    case ActionTypes.ADD_TO_CART:
      return {...state,cart:payload}
    case ActionTypes.REMOVE_FROM_CART:
      return {...state, cart:state.cart.filter(c=>c.id!==payload.id)}
  }
}