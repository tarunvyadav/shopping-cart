
import { ActionTypes } from "../constants/Action-types";
// import {math.round} from "react"



const intialState = {
  rating: 0,
  products: [],
  cart:[],
 
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
    case ActionTypes.SETECT_RATING:
      return { ...state, products: state.products.filter((c)=> c.rating.rate>=payload), rating:payload };
    case ActionTypes.PRICE_LOW_TO_HIGH:
      return { ...state, products:[...state.products.sort((a, b) => a.price - b.price)]};
    case ActionTypes.PRICE_HIGH_TO_LOW:
      return { ...state, products: [...state.products.sort((a, b) => b.price - a.price)]};
    default:
      return state;
    
  }
};




export const cartReducer= ( state={cart:[]}, {type, payload}) =>{
  switch(type){
    case ActionTypes.ADD_TO_CART:
      return {...state, cart:[...state.cart,{cart:payload, qyt:1, id:payload.id} ]};
    case ActionTypes.CHANGE_QYT:
      return {...state, cart:[...state.cart,{...state.cart.cart, qyt:payload} ]};
      // return{...state, ...payload}
    case ActionTypes.REMOVE_FROM_CART:
      return {...state, cart:state.cart.filter((c)=>c.cart.id!==payload.id)};

    case ActionTypes.INCREASE_QYT:
      return {...state, cart:state.cart.filter(c=>c.id===payload.id?c.qyt=payload.qyt+1:c.qyt)};

    case ActionTypes.DECREASE_QYT:
      return {...state, cart:state.cart.filter(c=>c.id===payload.id&&payload.qyt-1>0?c.qyt=payload.qyt-1:c.qyt)};
    default:
      return state;
  }
}