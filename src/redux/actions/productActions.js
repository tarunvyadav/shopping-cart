import { ActionTypes } from "../constants/Action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const menProduct = (products)=> {
  return {
    type: ActionTypes.SETECT_MEN,
    payload: products,
  }
};
export const womenProduct = (products)=> {
  return {
    type: ActionTypes.SETECT_WOMEN,
    payload: products,
  }
};
export const electronicsProduct = (products)=> {
  return {
    type: ActionTypes.SETECT_ELECTRONICS,
    payload: products,
  }
};
export const jeweleryProduct = (products)=> {
  return {
    type: ActionTypes.SETECT_JEWELERY,
    payload: products,
  }
}

export const ratingProduct= (index)=>{
  return {
    type: ActionTypes.SETECT_RATING,
    payload: index+1,
  }
}

export const priceFilter1 = ()=>{
return{
  type:ActionTypes.PRICE_LOW_TO_HIGH,
  // payload: item
}
}

export const priceFilter2 = ()=>{
return{
  type:ActionTypes.PRICE_HIGH_TO_LOW,
  // payload: item
}
}


export const addToCart=(items)=>{
  return{
    type: ActionTypes.ADD_TO_CART,
    payload:items,
    
  }
}


export const RemoveFromCart=(items)=>{
  return{
    type: ActionTypes.REMOVE_FROM_CART,
    payload:items
  }
}

export const alterQyt=(item)=>{
  return{
    type: ActionTypes.CHANGE_QYT,
    payload:item
  }
}

export const increaseQtyAction=(item)=>{
  return{
    type: ActionTypes.INCREASE_QYT,
    payload:item
  }
}

export const decreaseQtyAction=(item)=>{
  return{
    type: ActionTypes.DECREASE_QYT,
    payload:item
  }
}


