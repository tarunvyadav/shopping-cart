import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  // cart:cartReducer,
});
export default reducers;
